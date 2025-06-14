import { NextResponse } from 'next/server'

import { sendQuoteFormActions } from '@data/actions/send-quote-form.actions'

export const runtime = 'edge'

export async function POST(request: Request) {
    const formData = await request.formData()

    try {
        const result = await sendQuoteFormActions(formData)
        return NextResponse.json(result)
    } catch (error) {
        console.error('Error processing quote form:', error)
        return NextResponse.json(
            { ok: false, errors: { default: 'Failed to process request' } },
            { status: 500 },
        )
    }
}
