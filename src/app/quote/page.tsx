import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Logo } from '@app/logo'
import QuoteFormWrapper from '@app/quote/quote-form-wrapper'
import { Content } from '@app/styles'
import { Tagline } from '@app/tagline'
import { Column } from '@comp/common/column'
import { Container } from '@comp/common/container'
import { ContentContainer } from '@comp/common/content-container'
import { Footer } from '@comp/common/copytight'

export const metadata: Metadata = {
    title: 'Cotație Gratuită Instant - Terminatorul de Insecte',
    description:
        'Obține o cotație gratuită în mai puțin de 5 minute pentru servicii de dezinsecție, deratizare și dezinfecție în București și Ilfov.',
    keywords: [
        'cotație dezinsecție',
        'preț deratizare',
        'cost dezinfecție',
        'ofertă DDD',
        'tarif exterminare dăunători',
        'preț control dăunători',
        'cotație gratuită',
        'servicii DDD București',
    ],
    openGraph: {
        title: 'Cotație Gratuită Instant - Terminatorul de Insecte',
        description:
            'Obține o cotație gratuită în mai puțin de 5 minute pentru servicii de dezinsecție, deratizare și dezinfecție.',
        url: 'https://terminatorul.eu/quote',
        images: [
            {
                url: '/images/banner.png',
                width: 1024,
                height: 1024,
                alt: 'Cotație Gratuită - Terminatorul de Insecte',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cotație Gratuită Instant - Terminatorul de Insecte',
        description:
            'Obține o cotație gratuită în mai puțin de 5 minute pentru servicii de dezinsecție, deratizare și dezinfecție.',
        images: [
            {
                url: '/images/banner.png',
                width: 1024,
                height: 1024,
                alt: 'Cotație Gratuită - Terminatorul de Insecte',
            },
        ],
    },
}

export default async function Home() {
    return (
        <Container height="100vh" padding="20px 10px">
            <Column>
                <Logo />
                <Content>
                    <Tagline />
                    <ContentContainer title="Cotație Gratuită Instant">
                        <h2>
                            Obține o cotație gratuită în mai puțin de 5 minute!
                        </h2>
                        <p>
                            Vrei să știi cât te costă? Îți trimitem{' '}
                            <strong>
                                cotația personalizată direct pe email
                            </strong>
                            , fără apeluri inutile și fără timp pierdut.
                        </p>
                        <ul>
                            <li>
                                <strong>Gratuit și fără obligații</strong>
                            </li>
                            <li>
                                <strong>
                                    Răspuns rapid – în maxim 5 minute
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    Doar informațiile esențiale, fără
                                    complicații
                                </strong>
                            </li>
                        </ul>
                        <p>
                            Completează formularul și lasă-ne restul nouă. Este
                            simplu, rapid și 100% online.
                        </p>
                        <p>
                            <strong>
                                📩 Trimite cererea ta acum și primește prețul
                                direct în inbox!
                            </strong>
                        </p>
                        <Suspense fallback={<div>Loading...</div>}>
                            <QuoteFormWrapper />
                        </Suspense>
                    </ContentContainer>
                </Content>
                <Footer />
            </Column>
        </Container>
    )
}
