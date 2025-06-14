import { QuoteFormQueryErrors } from '@data/DTO/quote-form.query-errors'

export class QuoteFormQuery {
    ok: boolean = false
    errors: QuoteFormQueryErrors | null = null

    constructor(payload: QuoteFormQuery) {
        this.ok = payload.ok
        this.errors = payload.errors
    }
}
