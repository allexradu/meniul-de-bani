'use server'

import { sendEmail } from '@data/actions/send-email-actions'
import { QuoteFormQuery } from '@data/DTO/quote-form-query'
import { QuoteFormQueryErrors } from '@data/DTO/quote-form.query-errors'
import Packages from '@data/json/packages.json'
import { db } from '@db/drizzle'
import { contact } from '@db/schema'
import { generatePersonalizedEmail } from '@utils/utils'

interface CloudflareTurnstileResponse {
    success: boolean
    'error-codes': string[]
    challenge_ts: string
    hostname: string
}

async function validateTurnstile(token: string) {
    const turnstileRequest = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
            method: 'POST',
            body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY!)}&response=${encodeURIComponent(token)}`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        },
    )

    if (!turnstileRequest.ok) {
        throw new Error('Failed to validate Turnstile token')
    }

    return (await turnstileRequest.json()) as CloudflareTurnstileResponse
}

export async function sendQuoteFormActions(formData: FormData) {
    console.log('Sending quote form...', formData)
    const name: string = (formData.get('name') as string).trim()
    const email: string = (formData.get('email') as string).trim()
    const phone: string = (formData.get('phone') as string).trim()
    const address: string = (formData.get('address') as string).trim()
    const productId: string = (formData.get('productId') as string).trim()
    const companyName: string = (formData.get('companyName') as string).trim()
    const companyRegistrationNumber: string = (
        formData.get('companyRegistrationNumber') as string
    ).trim()
    const marketingConsent: boolean = formData.get('marketingConsent') === 'on'
    const privacyPolicy: boolean = formData.get('privacyPolicy') === 'on'
    const squareMeters: number = formData.get('squareMeters')
        ? parseFloat(formData.get('squareMeters') as string)
        : 0
    const turnstileToken: string = formData.get(
        'cf-turnstile-response',
    ) as string

    let ok = true
    const errors = {
        email: null,
        name: null,
        phone: null,
        address: null,
        squareMeters: null,
        productId: null,
        companyName: null,
        companyRegistrationNumber: null,
        privacyPolicy: null,
        default: null,
    } as QuoteFormQueryErrors

    if (!name) {
        ok = false
        errors.name = 'Numele este obligatoriu'
    }
    if (!email) {
        ok = false
        errors.email = 'Email-ul este obligatoriu'
    }
    if (!phone) {
        ok = false
        errors.phone = 'Telefonul este obligatoriu'
    }
    if (!address) {
        ok = false
        errors.address = 'Adresa este obligatorie'
    }
    if (!productId) {
        ok = false
        errors.productId = 'Serviciul dorit este obligatoriu'
    }
    if (companyName && !companyRegistrationNumber) {
        ok = false
        errors.companyName =
            'CUI-ul este obligatoriu daca compania este specificata'
    }
    if (!privacyPolicy) {
        ok = false
        errors.privacyPolicy =
            'Trebuie sa accepti politica de confidentialitate'
    }
    if (!squareMeters || squareMeters <= 0) {
        ok = false
        errors.squareMeters = 'Numărul de metri pătrați este obligatoriu'
    }

    if (!turnstileToken) {
        ok = false
        errors.default = 'Te rog bifeaza captcha'
    } else {
        const errorMessage =
            'Captcha nu a fost validat. Te rog incearca din nou.'
        try {
            const turnstileResponse = await validateTurnstile(turnstileToken)
            if (!turnstileResponse.success) {
                ok = false
                errors.default = errorMessage
            }
        } catch (e) {
            console.error('Error validating turnstile:', e)
            ok = false
            errors.default = errorMessage
        }
    }

    if (!ok) {
        console.log('Form submission failed with errors:', errors)
        return { ok, errors } as QuoteFormQuery
    }

    const selectedPackage = Packages.find((pkg) => pkg.id === productId)

    const html = generatePersonalizedEmail({
        clientName: name,
        company: companyName,
        phone: phone,
        cui: companyRegistrationNumber,
        address: address,
        areaSqm: squareMeters,
        packageId: productId,
    })

    const payload = {
        name: name,
        to: email,
        html: html,
        subject: 'Cerere de ofertă - ' + selectedPackage?.name,
    }

    await sendEmail(payload)

    try {
        await db.insert(contact).values({
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            address: formData.get('address') as string,
            product_id: formData.get('productId') as string,
            company_name: (formData.get('companyName') ?? '') as string,
            company_registration_number: (formData.get(
                'companyRegistrationNumber',
            ) ?? '') as string,
            marketing_consent: marketingConsent,
            square_meters: squareMeters,
        })
    } catch (error) {
        console.error('Error inserting contact into database:', error)
        ok = false
        errors.default =
            'Eroare la trimiterea formularului. Încearcă mai târziu.'
    }

    console.log('Form submitted!')

    return { ok: ok, errors: null } as QuoteFormQuery
}
