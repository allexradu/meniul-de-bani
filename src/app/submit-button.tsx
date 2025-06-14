import React from 'react'
import { useFormStatus } from 'react-dom'

import { Button } from '@app/styles'

export const SubmitButton: React.FC = () => {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending}>
            {pending ? 'Sending...' : 'Submit'}
        </Button>
    )
}
