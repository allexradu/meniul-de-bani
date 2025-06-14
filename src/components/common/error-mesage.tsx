import { DefaultTheme, styled } from 'styled-components'

export const ErrorMessage = styled.div`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.error};
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.small || '0.875rem'};
`
