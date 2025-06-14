'use client'
import { useServerInsertedHTML } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import {
    ServerStyleSheet,
    StyleSheetManager,
    ThemeProvider,
} from 'styled-components'

import { theme } from '@infra/theme/index'

export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode
}) {
    // For server-side rendering
    const [sheet] = useState(() => new ServerStyleSheet())

    // Track if we're on client
    const [isClient, setIsClient] = useState(false)

    // Set client flag after mount
    useEffect(() => {
        setIsClient(true)
    }, [])

    useServerInsertedHTML(() => {
        const styles = sheet.getStyleElement()
        sheet.instance.clearTag()
        return <>{styles}</>
    })

    // On client, we only need ThemeProvider (no StyleSheetManager)
    if (isClient) {
        return <ThemeProvider theme={theme}>{children}</ThemeProvider>
    }

    // On server, we need both components
    return (
        <StyleSheetManager sheet={sheet.instance}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyleSheetManager>
    )
}
