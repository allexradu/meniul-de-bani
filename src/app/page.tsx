import Link from 'next/link'

import { Logo } from '@app/logo'
import { Content } from '@app/styles'
import { Tagline } from '@app/tagline'
import { Accordion } from '@comp/accordion'
import { Button, ButtonWrapper } from '@comp/common/button'
import { Column } from '@comp/common/column'
import { Container } from '@comp/common/container'
import { ContentContainer } from '@comp/common/content-container'
import { Footer } from '@comp/common/copytight'
import { VideoWrapper, ResponsiveIframe } from '@comp/common/video-wrapper'

export const runtime = 'edge'

export default function Home() {
    return (
        <Container height="100vh" padding="20px 10px">
            <Column>
                <Logo />
                <Content>
                    <Tagline />
                    <ContentContainer
                        title="PROMO PENTRU RESTAUTANTE: 24 LUNI + 3 SESIUNI GRATUITE!"
                        isPromo={true}
                    >
                        <VideoWrapper>
                            <ResponsiveIframe
                                src="https://www.youtube.com/embed/smnJ4uEPxwk"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </VideoWrapper>
                        <p>
                            Un patron ne-a contactat după ce mai multe firme au
                            eșuat. După 3 luni cu sistemul nostru de combatere a
                            insectelor, Piedone a venit și...{' '}
                            <strong>nu a mai găsit nicio problemă!</strong>
                        </p>

                        <ul>
                            <li>
                                ✅ Sesiuni săptămânale în primele 3 săptămâni
                            </li>
                            <li>✅ Protecție lunară timp de 24 de luni</li>
                        </ul>

                        <p>
                            📩{' '}
                            <strong>
                                Cere acum o cotație personalizată – în doar 5
                                minute!
                            </strong>
                        </p>

                        <p>
                            🪳 <strong>Salvează-ți afacerea!</strong>
                        </p>
                        <Link href="/quote?productId=1">
                            <ButtonWrapper>
                                <Button isPromo={true}>
                                    Cere cotație instant!
                                </Button>
                            </ButtonWrapper>
                        </Link>
                    </ContentContainer>
                    <ContentContainer title="Servicii Profesionale de Deratizare, Dezinsecție și Dezinfectare">
                        <p>
                            <strong>S.C. David Marian DDD Brand S.R.L.</strong>{' '}
                            oferă servicii complete de igienizare și combatere a
                            dăunătorilor, executate la cele mai înalte standarde
                            de calitate, cu personal specializat și în
                            conformitate cu normele sanitare în vigoare.
                        </p>

                        <h3>✅ Dezinsecție</h3>
                        <p>Combatem insectele adulte și larvare cu:</p>
                        <ul>
                            <li>
                                Fumigații (FOGGER – ceață caldă) pentru spații
                                agro-industriale;
                            </li>
                            <li>
                                Atomizoare (ceață rece) pentru zone deschise;
                            </li>
                            <li>
                                Pulverizare cu pompe STIHL în spații alimentare
                                și birouri.
                            </li>
                        </ul>

                        <h3>✅ Deratizare</h3>
                        <p>Eliminarea eficientă a rozătoarelor prin:</p>
                        <ul>
                            <li>
                                Metode chimice (momeli raticide în stații
                                ecologice de interior/exterior);
                            </li>
                            <li>
                                Metode ecologice, precum capcane cu lipici sau
                                dispozitive cu ultrasunete.
                            </li>
                        </ul>

                        <h3>✅ Dezinfectare</h3>
                        <p>
                            Sterilizăm orice tip de spațiu – industrial,
                            alimentar, public – prin:
                        </p>
                        <ul>
                            <li>
                                Pulverizare și nebulizare ULV (BURE, generatoare
                                ULV);
                            </li>
                            <li>
                                Utilizarea substanțelor avizate de autoritățile
                                naționale și europene în domeniul biocidelor.
                            </li>
                            <Link href="/quote">
                                <ButtonWrapper>
                                    <Button>Cere cotație instant!</Button>
                                </ButtonWrapper>
                            </Link>
                        </ul>
                    </ContentContainer>

                    <Accordion title="Soluții Speciale pentru Asociații de Proprietari">
                        <ul>
                            <li>
                                <strong>
                                    ✔ Pachet Dezinsecție + Deratizare
                                </strong>{' '}
                                – Intervenim asupra tuturor spațiilor comune:
                                casa scării, ghene de gunoi, subsoluri și trepte
                                între etaje.
                            </li>
                            <li>
                                <strong>
                                    ✔ Curățenie și Debarasări Subsoluri /
                                    Magazii / Garaje
                                </strong>{' '}
                                – Oferim evacuarea completă a vechiturilor cu
                                personal calificat și autoutilitare, rapid și
                                eficient.
                            </li>
                            <Link href="/quote">
                                <ButtonWrapper>
                                    <Button>Cere cotație instant!</Button>
                                </ButtonWrapper>
                            </Link>
                        </ul>
                    </Accordion>
                    <ContentContainer title="De Ce Să Ne Alegeți">
                        <ul>
                            <li>
                                <strong>✅ Produse profesionale de top:</strong>{' '}
                                Bayer EC84, Maxgel IC, Racumin paste;
                            </li>
                            <li>
                                <strong>✅ Substanțe avizate de</strong> Comisia
                                Națională pentru Produse Biocide și ECHA
                                (European Chemicals Agency);
                            </li>
                            <li>
                                <strong>✅ Program de lucru flexibil:</strong>{' '}
                                intervenim conform orarului solicitat,
                                indiferent de oră;
                            </li>
                            <li>
                                <strong>
                                    ✅ Experiență în lucrări pentru:
                                </strong>{' '}
                                instituții publice, asociații de proprietari,
                                spații comerciale și persoane fizice.
                            </li>
                        </ul>
                    </ContentContainer>
                </Content>
                <Footer />
            </Column>
        </Container>
    )
}
