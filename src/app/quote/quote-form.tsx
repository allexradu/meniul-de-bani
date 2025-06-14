'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import Link from 'next/link'
import React, { useState } from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { Button, ButtonWrapper } from '@comp/common/button'
import { Checkbox } from '@comp/common/checkbox'
import { DropDown, DropDownItem } from '@comp/common/drop-down'
import { ErrorMessage } from '@comp/common/error-mesage'
import { Input } from '@comp/common/input'
import { QuoteFormQuery } from '@data/DTO/quote-form-query'
import { QuoteFormQueryErrors } from '@data/DTO/quote-form.query-errors'
import packages from '@data/json/packages.json'
import { Size } from '@infra/constants/enums'

const CheckboxWrapper = styled.div`
    margin-top: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
`

const StyledLink = styled(Link)`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.link};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const SuccessMessage = styled.div`
    padding: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]};
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.button.bgPrimary};
    color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.button.primary};
`

export const TurnstileWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]} 0;
    justify-content: center;
`

export default function QuoteForm({ productId }: { productId?: string }) {
    const selectedPackage = packages.find((pkg) => pkg.id === productId)
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

    const initialState: QuoteFormQuery = {
        ok: false,
        errors,
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        squareMeters: '',
        productId: '',
        companyName: '',
        companyRegistrationNumber: '',
        marketingConsent: false,
        privacyPolicy: false,
    })

    const serviceOptions: DropDownItem[] = packages.map((pkg) => ({
        key: pkg.id, // Add the required key property
        label: pkg.name,
        value: pkg.name,
    })) // Remove

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleMarketingChange = () => {
        setFormData({
            ...formData,
            marketingConsent: !formData.marketingConsent,
        })
    }

    const handlePrivacyChange = () => {
        setFormData({
            ...formData,
            privacyPolicy: !formData.privacyPolicy,
        })
    }

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [state, setState] = useState(initialState)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const formData = new FormData(e.currentTarget)
            const response = await fetch('/api/quote', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()
            // Type assertion to match your expected state structure
            setState(result as QuoteFormQuery)
        } catch (error) {
            console.error('Error submitting form:', error)
            setState({
                ok: false,
                errors: {
                    name: null,
                    email: null,
                    phone: null,
                    address: null,
                    squareMeters: null,
                    productId: null,
                    companyName: null,
                    companyRegistrationNumber: null,
                    privacyPolicy: null,
                    default:
                        'Ceva nu a mers bine. Te rugăm să încerci mai târziu.',
                },
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {state.ok && (
                <SuccessMessage>
                    Mulțumim pentru solicitare! Vom reveni cu un răspuns cât mai
                    curând posibil.
                </SuccessMessage>
            )}
            {!state.ok && (
                <>
                    <p>
                        Campurile marcate cu <strong>*</strong> sunt
                        obligatorii.
                    </p>
                    {selectedPackage ? (
                        <>
                            <p>
                                Serviciul selectat:{' '}
                                <strong>{selectedPackage.name}</strong>
                            </p>
                            <input
                                type="hidden"
                                name="productId"
                                value={selectedPackage.id}
                            />
                        </>
                    ) : (
                        <DropDown
                            label={'Serviciu Dorit *'}
                            name={'productId'}
                            items={serviceOptions}
                            value={formData.productId}
                            onChange={handleChange}
                            error={
                                state.errors && state.errors.productId
                                    ? state.errors.productId
                                    : undefined
                            }
                        />
                    )}

                    <Input
                        label={'Nume și Prenume *'}
                        name={'name'}
                        placeholder={'Ex. Ion Popescu'}
                        value={formData.name}
                        onChange={handleChange}
                        error={
                            state.errors && state.errors.name
                                ? state.errors.name
                                : undefined
                        }
                    />
                    <Input
                        error={
                            state.errors && state.errors.email
                                ? state.errors.email
                                : undefined
                        }
                        label={'Email *'}
                        name={'email'}
                        type={'email'}
                        placeholder="email@exemplu.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        label={'Telefon *'}
                        name={'phone'}
                        placeholder={'07xx xxx xxx'}
                        value={formData.phone}
                        onChange={handleChange}
                        error={
                            state.errors && state.errors.phone
                                ? state.errors.phone
                                : undefined
                        }
                    />
                    <Input
                        label={'Nume Companie'}
                        name={'companyName'}
                        placeholder="Ex. SC Exemplu SRL"
                        value={formData.companyName}
                        onChange={handleChange}
                        error={
                            state.errors && state.errors.companyName
                                ? state.errors.companyName
                                : undefined
                        }
                    />
                    <Input
                        label={'CUI Companie'}
                        name={'companyRegistrationNumber'}
                        placeholder="RO12345678"
                        value={formData.companyRegistrationNumber}
                        onChange={handleChange}
                        error={
                            state.errors &&
                            state.errors.companyRegistrationNumber
                                ? state.errors.companyRegistrationNumber
                                : undefined
                        }
                    />
                    <Input
                        label={'Adresă *'}
                        name={'address'}
                        placeholder={'Strada, Număr, Oraș'}
                        value={formData.address}
                        onChange={handleChange}
                        error={
                            state.errors && state.errors.address
                                ? state.errors.address
                                : undefined
                        }
                    />
                    <Input
                        label={'Metri Patrati *'}
                        name={'squareMeters'}
                        type={'number'}
                        placeholder={'Ex. 75'}
                        value={formData.squareMeters}
                        onChange={handleChange}
                        error={
                            state.errors && state.errors.squareMeters
                                ? state.errors.squareMeters
                                : undefined
                        }
                    />
                    <CheckboxWrapper>
                        <Checkbox
                            label="Doresc sa primesc mesaje relevante de marketing."
                            name="marketingConsent"
                            checked={formData.marketingConsent}
                            onChange={handleMarketingChange}
                        />
                        <Checkbox
                            label={
                                <div>
                                    Sunt de acord cu{' '}
                                    <StyledLink
                                        target={'_blank'}
                                        href={'/policy'}
                                    >
                                        politica de confidentialitate.
                                    </StyledLink>{' '}
                                    *
                                </div>
                            }
                            name="privacyPolicy"
                            checked={formData.privacyPolicy}
                            onChange={handlePrivacyChange}
                            error={
                                state.errors && state.errors.privacyPolicy
                                    ? state.errors.privacyPolicy
                                    : undefined
                            }
                        />
                    </CheckboxWrapper>
                    {state.errors && state.errors.default && (
                        <ErrorMessage>{state.errors.default}</ErrorMessage>
                    )}
                    <TurnstileWrapper>
                        <Turnstile
                            siteKey={
                                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                            }
                        />
                    </TurnstileWrapper>
                    <ButtonWrapper>
                        <Button type="submit">
                            {isSubmitting ? 'Trimitere...' : 'Trimite'}
                        </Button>
                    </ButtonWrapper>
                </>
            )}
        </form>
    )
}
