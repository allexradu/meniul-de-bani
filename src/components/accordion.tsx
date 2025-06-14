'use client'

import React, { useState } from 'react'
import { DefaultTheme, styled } from 'styled-components'

import { Size } from '@infra/constants/enums'

interface AccordionProps {
    title: string
    children: React.ReactNode
    initiallyOpen?: boolean
}

const AccordionContainer = styled.div`
    width: 100%;
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.SMALL]};
    border-radius: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.form.borderRadius};
    border: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.form.border};
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const AccordionHeader = styled.div`
    padding: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]};
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.button.bgPrimary};
    color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.button.primary};
    font-weight: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontWeights.bold};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AccordionContent = styled.div`
    padding: 12px 16px; /* Hard-coded padding value to ensure it's applied */
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
`

const Arrow = styled.div``

export const AccordionTextContainer = styled.div`
    p {
        margin: 0 0 12px 0;
        line-height: 1.6;
    }

    ul {
        margin: 0 0 16px 20px;
        padding: 0;
        list-style: disc inside;
    }

    li {
        margin-bottom: 6px;
        line-height: 1.5;
`

export const Accordion: React.FC<AccordionProps> = ({
    title,
    children,
    initiallyOpen = false,
}) => {
    const [isOpen, setIsOpen] = useState(initiallyOpen)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <AccordionContainer>
            <AccordionHeader onClick={toggleAccordion}>
                {title}
                {isOpen ? <Arrow>▲</Arrow> : <Arrow>▼</Arrow>}
            </AccordionHeader>
            {isOpen && (
                <AccordionContent>
                    <AccordionTextContainer>{children}</AccordionTextContainer>
                </AccordionContent>
            )}
        </AccordionContainer>
    )
}
