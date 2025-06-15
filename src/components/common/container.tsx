'use client'

import React from 'react'
import { styled } from 'styled-components'

const ContainerComponent = styled.div<{
    height?: 'auto'
    $padding: string
}>`
    padding: ${({ $padding }) => $padding};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
`

interface ContainerProps {
    children: React.ReactNode
    height?: 'auto'
    padding?: string
}

export const Container: React.FC<ContainerProps> = ({
    children,
    height = 'auto',
    padding = '0',
}: ContainerProps) => {
    return (
        <ContainerComponent height={height} $padding={padding}>
            {children}
        </ContainerComponent>
    )
}
