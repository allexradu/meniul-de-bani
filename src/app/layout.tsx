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
    metadataBase: new URL('https://meniuldebani.ro'),
    title: 'Meniul de Bani – Dublează vânzările restaurantului',
    description:
        'Crește valoarea comenzilor fără efort. Meniul nostru inteligent te ajută să vinzi mai mult, natural – fără presiune pe client sau personal.',
    authors: [{ name: 'Radergy S.R.L.', url: 'https://radergy.ro' }],
    creator: 'Radergy S.R.L.',
    category: 'Restaurant Marketing',
    classification: 'Business, Sales Optimization, Restaurant Growth',
    keywords: [
        'meniuri inteligente',
        'creștere vânzări restaurant',
        'meniul de bani',
        'meniuri care vând',
        'funnel de vânzare restaurant',
        'creștere profit ospitalitate',
        'branding restaurant',
        'optimizare meniu',
        'meniuri strategice',
        'dublare încasări restaurant',
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
        title: 'Meniul de Bani – Dublează vânzările restaurantului',
        description:
            'Crește valoarea comenzilor fără efort. Meniul nostru inteligent te ajută să vinzi mai mult, natural – fără presiune pe client sau personal.',
        url: 'https://meniuldebani.ro',
        images: [
            {
                url: '/images/banner.png',
                width: 1200,
                height: 630,
                alt: 'Dublează vânzările restaurantului cu meniul nostru inteligent',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Meniul de Bani – Dublează vânzările restaurantului',
        description:
            'Crește valoarea comenzilor fără efort. Meniul nostru inteligent te ajută să vinzi mai mult, natural – fără presiune pe client sau personal.',
        images: [
            {
                url: '/images/banner.png',
                width: 1200,
                height: 630,
                alt: 'Dublează încasările cu meniul nostru inteligent',
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
