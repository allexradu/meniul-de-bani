export class QuoteFormQueryErrors {
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    squareMeters: string | null
    productId: string | null
    companyName: string | null
    companyRegistrationNumber: string | null
    privacyPolicy: string | null
    default: string | null

    constructor(payload: QuoteFormQueryErrors) {
        this.name = payload.name
        this.email = payload.email
        this.phone = payload.phone
        this.address = payload.address
        this.squareMeters = payload.squareMeters
        this.productId = payload.productId
        this.companyName = payload.companyName
        this.companyRegistrationNumber = payload.companyRegistrationNumber
        this.privacyPolicy = payload.privacyPolicy
        this.default = payload.default
    }
}
