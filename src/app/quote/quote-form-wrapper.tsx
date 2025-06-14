'use client'

import { useSearchParams } from 'next/navigation'

import QuoteForm from '@app/quote/quote-form'

export default function QuoteFormWrapper() {
    const searchParams = useSearchParams()
    const productId = searchParams.get('productId') ?? undefined

    return <QuoteForm productId={productId} />
}
