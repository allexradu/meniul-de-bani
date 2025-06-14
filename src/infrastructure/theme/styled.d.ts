import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            text: {
                primary: string
                link: string
                error: string
            }
            components: {
                form: {
                    boxShadow: string
                }
                input: {
                    boxShadow: string
                }
                button: {
                    danger: string
                    dangerHover: string
                    primary: string
                    bgPrimary: string
                    bgSecondary: string
                }
            }
        }
        fonts: {
            [key: string]: string
        }
        fontSizes: {
            [key: string]: string
        }
        fontWeights: {
            regular: string
            semiBold: string
            bold: string
        }
        sizes: string[] // Allow string[] type
        components: {
            form: {
                borderRadius: string
                border: string
            }
            input: {
                border: string
                borderRadius: string
            }
            button: {
                borderRadius: string
            }
        }
    }
}
