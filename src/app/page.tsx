import Link from 'next/link'

import { Logo } from '@app/logo'
import { Content } from '@app/styles'
import { Tagline } from '@app/tagline'
import { Button, ButtonWrapper } from '@comp/common/button'
import { Column } from '@comp/common/column'
import { Container } from '@comp/common/container'
import { ContentContainer } from '@comp/common/content-container'
import { Footer } from '@comp/common/copytight'
import { VideoWrapper, ResponsiveIframe } from '@comp/common/video-wrapper'

export const runtime = 'edge'

export default function Home() {
    return (
        <Container padding="20px 10px">
            <Column>
                <Logo />
                <Content>
                    <Tagline />
                    <ContentContainer title="Un simplu meniu care a schimbat totul pentru Marian">
                        <VideoWrapper>
                            <ResponsiveIframe
                                src="https://www.youtube.com/embed/B3v3VMUYxtY"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </VideoWrapper>
                        <Link href="mailto:contact@radergy.ro">
                            <ButtonWrapper>
                                <Button>Descarcă mostrele GRATUIT</Button>
                            </ButtonWrapper>
                        </Link>
                        <p>
                            ➡️ <strong>Marian, patronul unui restaurant</strong>
                            , a încercat toate metodele clasice de marketing:
                            fluturași, promoții, modificări de prețuri,
                            hostess... dar nimic nu a funcționat.
                        </p>

                        <p>
                            🔄 <strong>3 luni mai târziu</strong> și-a{' '}
                            <strong>dublat veniturile</strong>, a crescut
                            salariile angajaților și și-a dus familia în Dubai
                            pentru prima dată.
                        </p>

                        <p>
                            🎯 Ce s-a schimbat? A aplicat sistemul{' '}
                            <strong>„Meniul de Bani”</strong> – un meniu
                            inteligent, bazat pe psihologie, care convinge
                            clienții să comande mai mult, fără să se simtă
                            presați.
                        </p>

                        <p>
                            🍽️ Clienții comandă natural: fel principal, băutură,
                            garnitură și desert.
                        </p>

                        <p>
                            💸{' '}
                            <strong>
                                Veniturile cresc, fără presiune și fără efort
                                suplimentar.
                            </strong>
                        </p>

                        <p>
                            ✅{' '}
                            <strong>Vrei să vezi cum arată acest meniu?</strong>
                        </p>
                    </ContentContainer>
                </Content>
                <Footer />
            </Column>
        </Container>
    )
}
