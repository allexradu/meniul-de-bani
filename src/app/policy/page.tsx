import type { Metadata } from 'next'

import { Logo } from '@app/logo'
import { Content } from '@app/styles'
import { Tagline } from '@app/tagline'
import { Column } from '@comp/common/column'
import { Container } from '@comp/common/container'
import { ContentContainer } from '@comp/common/content-container'
import { Footer } from '@comp/common/copytight'

export const metadata: Metadata = {
    title: 'Politica de Confidențialitate - Terminatorul de Insecte',
    description:
        'Politica de confidențialitate a companiei Terminatorul de Insecte privind colectarea, utilizarea și protecția datelor personale ale clienților.',
    keywords: [
        'politica de confidențialitate',
        'protecția datelor',
        'GDPR',
        'date personale',
        'confidențialitate',
        'termeni și condiții',
        'securitatea datelor',
        'Terminatorul de Insecte',
    ],
    openGraph: {
        title: 'Politica de Confidențialitate - Terminatorul de Insecte',
        description:
            'Politica de confidențialitate a companiei Terminatorul de Insecte privind colectarea și protecția datelor personale.',
        url: 'https://terminatorul.eu/policy',
        images: [
            {
                url: '/images/banner.png',
                width: 1024,
                height: 1024,
                alt: 'Politica de Confidențialitate - Terminatorul de Insecte',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Politica de Confidențialitate - Terminatorul de Insecte',
        description:
            'Politica de confidențialitate a companiei Terminatorul de Insecte privind colectarea și protecția datelor personale.',
        images: [
            {
                url: '/images/banner.png',
                width: 1024,
                height: 1024,
                alt: 'Politica de Confidențialitate - Terminatorul de Insecte',
            },
        ],
    },
}

export default function PrivacyPolicy() {
    return (
        <Container height="100vh" padding="20px 10px">
            <Column>
                <Logo />
                <Content>
                    <Tagline />
                    <ContentContainer title="Politica de Confidențialitate">
                        <h2>1. Informații generale</h2>
                        <p>
                            Această Politică de Confidențialitate reglementează
                            modul în care{' '}
                            <strong>S.C. David Marian DDD Brand S.R.L.</strong>{' '}
                            („Operatorul” sau „noi”) colectează, utilizează și
                            protejează datele dumneavoastră cu caracter personal
                            în conformitate cu Regulamentul (UE) 2016/679
                            (GDPR).
                        </p>
                        <ul>
                            <li>
                                <strong>Denumire:</strong> S.C. David Marian DDD
                                Brand S.R.L.
                            </li>
                            <li>
                                <strong>Website:</strong>{' '}
                                <a
                                    href="https://terminatorul.eu"
                                    target="_blank"
                                >
                                    terminatorul.eu
                                </a>
                            </li>
                            <li>
                                <strong>E-mail contact GDPR:</strong>{' '}
                                <a href="mailto:vali@terminatorul.eu">
                                    vali@terminatorul.eu
                                </a>
                            </li>
                            <li>
                                <strong>
                                    Responsabil cu protecția datelor:
                                </strong>{' '}
                                Stan Valentin Cristian
                            </li>
                        </ul>
                        <p>
                            <strong>Procesator:</strong> Radergy S.R.L. –
                            asigură dezvoltarea, găzduirea și mentenanța
                            website-ului.
                        </p>

                        <h2>2. Ce date colectăm</h2>
                        <p>Colectăm următoarele date cu caracter personal:</p>
                        <ul>
                            <li>Nume</li>
                            <li>E-mail</li>
                            <li>Număr de telefon</li>
                            <li>Adresă</li>
                            <li>Denumirea companiei</li>
                            <li>CUI</li>
                            <li>ID produs</li>
                        </ul>

                        <h2>3. Scopul colectării datelor</h2>
                        <ul>
                            <li>Contactarea utilizatorului</li>
                            <li>Emiterea de oferte și contracte</li>
                            <li>Facturare</li>
                            <li>Marketing direct (cu consimțământ)</li>
                            <li>Analiză statistică prin Google Analytics</li>
                        </ul>

                        <h2>4. Temeiul legal al prelucrării</h2>
                        <ul>
                            <li>Executarea unui contract – Art. 6(1)(b)</li>
                            <li>Obligații legale – Art. 6(1)(c)</li>
                            <li>Interes legitim – Art. 6(1)(f)</li>
                            <li>Consimțământ – Art. 6(1)(a)</li>
                        </ul>

                        <h2>5. Cui transmitem datele</h2>
                        <ul>
                            <li>Radergy S.R.L. (procesator IT)</li>
                            <li>
                                Furnizori autorizați (contabilitate, facturare
                                etc.)
                            </li>
                            <li>Autorități publice (la cerere)</li>
                            <li>Google LLC (pentru Google Analytics)</li>
                        </ul>

                        <h2>6. Durata păstrării datelor</h2>
                        <ul>
                            <li>
                                Pe durata relației contractuale și până la 3 ani
                                după
                            </li>
                            <li>
                                10 ani pentru datele din facturi (conform legii
                                fiscale)
                            </li>
                            <li>26 de luni pentru datele Google Analytics</li>
                        </ul>

                        <h2>7. Drepturile dumneavoastră</h2>
                        <ul>
                            <li>Dreptul de acces</li>
                            <li>Dreptul la rectificare</li>
                            <li>Dreptul la ștergere</li>
                            <li>Dreptul la restricționare</li>
                            <li>Dreptul la portabilitate</li>
                            <li>Dreptul de opoziție</li>
                            <li>Dreptul de retragere a consimțământului</li>
                            <li>Dreptul de a depune o plângere la ANSPDCP</li>
                        </ul>

                        <h2>8. Securitatea datelor</h2>
                        <p>
                            Aplicăm măsuri tehnice și organizatorice pentru
                            protejarea datelor personale.
                        </p>

                        <h2>9. Utilizarea Google Analytics</h2>
                        <p>
                            Folosim Google Analytics pentru analiză statistică
                            anonimă. Datele pot fi transferate în SUA, în
                            condiții de securitate (Clauze Contractuale
                            Standard). Puteți opta pentru dezactivare accesând:
                            <a
                                href="https://tools.google.com/dlpage/gaoptout"
                                target="_blank"
                            >
                                tools.google.com/dlpage/gaoptout
                            </a>
                            .
                        </p>

                        <h2>10. Modificări ale Politicii</h2>
                        <p>
                            Ne rezervăm dreptul de a actualiza politica. Ultima
                            actualizare: <strong>5 iunie 2025</strong>.
                        </p>

                        <h2>11. Contact</h2>
                        <p>
                            Pentru întrebări sau solicitări privind datele
                            personale:
                        </p>
                        <ul>
                            <li>
                                <strong>Nume:</strong> Stan Valentin Cristian
                            </li>
                            <li>
                                <strong>E-mail:</strong>{' '}
                                <a href="mailto:vali@terminatorul.eu">
                                    vali@terminatorul.eu
                                </a>
                            </li>
                        </ul>
                    </ContentContainer>
                </Content>
                <Footer />
            </Column>
        </Container>
    )
}
