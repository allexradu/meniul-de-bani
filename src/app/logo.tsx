'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { styled } from 'styled-components'

import { ImageWrapper } from '@app/styles'

export const StyledLogo = styled.div`
    position: relative;
`

export const Logo: React.FC = () => {
    return (
        <ImageWrapper>
            <Link href="/">
                <Image
                    src="/vector/logo.svg"
                    alt="Logo"
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                    priority
                />
            </Link>
        </ImageWrapper>
    )
}
