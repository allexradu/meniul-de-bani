import { colors } from '@infra/theme/colors'
import { fonts, fontSizes, fontWeights } from '@infra/theme/fonts'
import { sizes } from '@infra/theme/sizes'

export const theme = {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    sizes,
    components: {
        contentContainer: {
            borderRadius: '15px',
        },
        form: {
            borderRadius: '15px',
            border: '2px solid rgba(0, 123, 255, 0.2)',
        },
        input: {
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
        button: {
            borderRadius: '5px',
        },
    },
}
