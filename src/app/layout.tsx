import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import React from 'react'

import './globals.css'
import StyledComponentsRegistry from '@infra/theme/registry'

const GTM_ID = 'GTM-PBR54FRV'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://terminatorul.eu'),
    title: 'Terminatorul de Insecte - Dezinsecție, Deratizare și Dezinfectie',
    description:
        'Service de dezinsecție, deratizare și dezinfectie în București și Ilfov. Oferim soluții profesionale pentru combaterea dăunătorilor.',
    authors: [{ name: 'Radergy S.R.L.', url: 'https://radergy.ro' }],
    creator: 'S.C.David Marian DDD Brand S.R.L',
    category: 'Pest Control',
    classification: 'Business',
    keywords: [
        'pest control',
        'dezinsectie',
        'deratizare',
        'dezinfectie',
        'Bucuresti',
        'Ilfov',
        'insect removal',
        'rodent control',
        'professional services',
        'Terminatorul de Insecte',
    ],
    icons: {
        icon: [
            {
                url: '/images/favicon-96x96.png',
                type: 'image/png',
                sizes: '96x96',
            },
            { url: '/images/favicon.svg', type: 'image/svg+xml' },
            { url: '/images/favicon.ico', rel: 'shortcut icon' },
        ],
        apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
    },
    openGraph: {
        title: 'Terminatorul de Insecte - Dezinsecție, Deratizare și Dezinfectie',
        description:
            'Service de dezinsecție, deratizare și dezinfectie în București și Ilfov. Oferim soluții profesionale pentru combaterea dăunătorilor.',
        url: 'https://terminatorul.eu',
        images: [
            {
                url: '/images/banner.png',
                width: 1024,
                height: 1024,
                alt: 'Terminatorul de Insecte - Dezinsecție, Deratizare și Dezinfectie',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terminatorul de Insecte - Dezinsecție, Deratizare și Dezinfectie',
        description:
            'Service de dezinsecție, deratizare și dezinfectie în București și Ilfov. Oferim soluții profesionale pentru combaterea dăunătorilor.',
        images: [
            {
                url: '/images/banner.png',
                width: 1024,
                height: 1024,
                alt: 'Terminatorul de Insecte - Dezinsecție, Deratizare și Dezinfectie',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
                    }}
                />
            </head>

            <body
                suppressHydrationWarning
                className={`${geistSans.variable} ${geistMono.variable}`}
            >
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>

                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
