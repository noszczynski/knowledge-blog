import React from 'react'
import { ThemeProvider } from 'styled-components'

import LayoutComponent from './Component'
import theme from '../utils/theme'
import { WindowProvider } from '../utils/windowContext'

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <WindowProvider>
                <LayoutComponent>{children}</LayoutComponent>
            </WindowProvider>
        </ThemeProvider>
    )
}

export default Layout
