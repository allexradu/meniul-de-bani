import packages from '@data/json/packages.json'
interface EmailParams {
    clientName: string
    company?: string
    phone: string
    cui?: string
    address: string
    areaSqm: number
    packageId: string
}
const TIER_1_MP = 100
const TIER_2_MP = 200
const TIER_3_MP = 500

export function generatePersonalizedEmail({
    clientName,
    company,
    phone,
    cui,
    address,
    areaSqm,
    packageId,
}: EmailParams) {
    const selectedPackage = packages.find((p) => p.id === packageId)
    if (!selectedPackage) {
        throw new Error('Package not found')
    }
    const { name: packageName, is_custom, prices, months } = selectedPackage

    const emailIntro = `
    <h2>Ofertă Personalizată Servicii DDD</h2>
    <p>Bună ziua, <strong>${clientName}</strong>${company ? ` de la compania <strong>${company}</strong>` : ''},</p>
    <p>
      Telefon: ${phone}<br>
      ${cui ? `CUI: ${cui}<br>` : ''}
      Adresă: ${address}<br>
      Suprafață: ${areaSqm} m²
    </p>
    <hr>
  `

    const companyDisclaimer = `
    <p><strong>S.C. David Marian DDD Brand S.R.L.</strong> nu este plătitoare de TVA. Prețurile sunt finale și nu se aplică TVA suplimentar.</p>
  `

    let emailBody
    let price

    if (is_custom || areaSqm > 500) {
        emailBody = `
      <p>Ați selectat pachetul: <strong>${packageName}</strong>.</p>
      <p>Echipa noastră vă va contacta în maximum 48 de ore cu o ofertă personalizată adaptată nevoilor dumneavoastră.</p>
    `
    } else {
        if (!prices || Object.keys(prices).length === 0) {
            throw new Error('No prices available for this package')
        }
        if (areaSqm <= TIER_1_MP) price = prices.tier1
        else if (areaSqm <= TIER_2_MP) price = prices.tier2
        else if (areaSqm <= TIER_3_MP) price = prices.tier3

        const totalPrice = price ? price * (months || 1) : null

        emailBody = `
      <p>Ați selectat pachetul: <strong>${packageName}</strong>.</p>
      <p><strong>Abonament preț ${price} lei/lună x ${months || 1} luni = ${totalPrice} lei</strong></p>
      <p>Asigurați-vă un mediu curat, sigur și fără griji! Rezervați acum și beneficiați de servicii profesionale de cea mai înaltă calitate.</p>
    `
    }

    const emailConclusion = `
    <p>Vă stăm la dispoziție pentru informații suplimentare și așteptăm cu interes colaborarea cu dumneavoastră!</p>
    <p>Cu respect,<br>Echipa DDD Brand</p>
  `

    return `
    ${emailIntro}
    ${emailBody}
    ${companyDisclaimer}
    ${emailConclusion}
  `
}

interface PackageInfo {
    packageName: string
    is_custom: boolean
    price: number | null
    totalPrice: number | null
    months: number | undefined
}

/**
 * Extracts package information based on package ID and area
 * @param packageId - The ID of the package to retrieve
 * @param areaSqm - The area in square meters
 * @returns Package information including name, custom flag, price, and total price
 */
export function getPackageInfo(
    packageId: string,
    areaSqm: number,
): PackageInfo {
    // Constants for tier thresholds (these should be defined at module level)

    const selectedPackage = packages.find((p) => p.id === packageId)
    if (!selectedPackage) {
        throw new Error('Package not found')
    }

    const { name: packageName, is_custom, prices, months } = selectedPackage

    let price: number | null = null
    let totalPrice: number | null = null

    // Calculate price only if not custom and area <= 500
    if (!is_custom && areaSqm <= TIER_3_MP && prices) {
        if (areaSqm <= TIER_1_MP) price = prices.tier1
        else if (areaSqm <= TIER_2_MP) price = prices.tier2
        else price = prices.tier3

        totalPrice = price * (months || 1)
    }

    return {
        packageName,
        is_custom,
        price,
        totalPrice,
        months,
    }
}
