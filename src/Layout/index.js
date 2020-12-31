import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import LayoutComponent from './Component'
import theme from '../utils/theme'
import { darkThemeColors, lightThemeColors } from '../utils/colors'

const THEMES = {
    DARK: 'DARK',
    LIGHT: 'LIGHT',
}

const Layout = ({ children }) => {
    const [themeMode, setThemeMode] = useState(THEMES.DARK)
    const [themeObj, setThemeObj] = useState(null)

    useEffect(() => {
        const t = themeMode === THEMES.DARK ? darkThemeColors : lightThemeColors
        const obj = Object.assign(
            {},
            { ...theme, color: { ...theme.color, ...t } }
        )

        setThemeObj(obj)
    }, [])

    return themeObj ? (
        <ThemeProvider theme={themeObj}>
            <LayoutComponent setThemeMode={setThemeMode}>
                {children}
            </LayoutComponent>
        </ThemeProvider>
    ) : (
        <p>No theme object set</p>
    )
}

export default Layout
