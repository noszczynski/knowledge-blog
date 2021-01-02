import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import LayoutComponent from './Component'
import theme from '../utils/theme'
import { darkThemeColors, lightThemeColors } from '../utils/colors'
import { WindowProvider } from '../utils/windowContext'
import themeStorage from '../utils/themeStorage'
import themeVariantStorage from '../utils/themeVariantStorage'

const THEMES = {
    DARK: 'DARK',
    LIGHT: 'LIGHT',
}

const handleMergeTheme = (theme, obj) => {
    return { ...theme, color: { ...theme.color, ...obj } }
}

const Layout = ({ children }) => {
    const initialTheme = themeStorage.is()
        ? handleMergeTheme(theme, themeStorage.get())
        : theme
    const [themeMode, setThemeMode] = useState(themeVariantStorage.get())
    const [themeObj, setThemeObj] = useState(initialTheme)

    const getTheme = theme => {
        switch (theme) {
            case THEMES.DARK:
                return darkThemeColors
            case THEMES.LIGHT:
                return lightThemeColors
            default:
                return darkThemeColors
        }
    }

    useEffect(() => {
        if (themeVariantStorage.is() && themeStorage.is()) {
            const storageTheme = themeStorage.get()
            setThemeObj(storageTheme)
        } else {
            const newTheme = handleMergeTheme(theme, getTheme())

            themeVariantStorage.set(THEMES.DARK)
            themeStorage.set(newTheme)
            setThemeObj(newTheme)
        }
    }, [])

    return (
        themeObj && (
            <ThemeProvider theme={themeObj}>
                <WindowProvider>
                    <LayoutComponent setThemeMode={setThemeMode}>
                        {children}
                    </LayoutComponent>
                </WindowProvider>
            </ThemeProvider>
        )
    )
}

export default Layout
