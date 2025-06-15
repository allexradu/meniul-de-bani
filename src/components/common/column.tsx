'use client'

import { styled } from 'styled-components'

const ColumnComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: white;
    border-radius: 15px;
    padding: 20px;
    border: 2px solid rgba(0, 123, 255, 0.2);
`

interface ColumnProps {
    children: React.ReactNode
}

export const Column: React.FC<ColumnProps> = ({ children }: ColumnProps) => {
    return <ColumnComponent>{children}</ColumnComponent>
}
