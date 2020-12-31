const breakpoints = {
    mobileS: 375,
    mobileM: 425,
    mobileL: 578,
    tabletS: 768,
    tabletM: 1024,
    tabletL: 1280,
    laptopS: 1366,
    laptopL: 1440,
    desktopS: 1600,
    desktopM: 1920,
    desktopL: 2560,
}

const mq = {
    mobileS: `@media screen and (min-width: ${breakpoints.mobileS}px)`,
    mobileM: `@media screen and (min-width: ${breakpoints.mobileM}px)`,
    mobileL: `@media screen and (min-width: ${breakpoints.mobileL}px)`,
    tabletS: `@media screen and (min-width: ${breakpoints.tabletS}px)`,
    tabletM: `@media screen and (min-width: ${breakpoints.tabletM}px)`,
    tabletL: `@media screen and (min-width: ${breakpoints.tabletL}px)`,
    laptopS: `@media screen and (min-width: ${breakpoints.laptopS}px)`,
    laptopL: `@media screen and (min-width: ${breakpoints.laptopL}px)`,
    desktopS: `@media screen and (min-width: ${breakpoints.desktopS}px)`,
    desktopM: `@media screen and (min-width: ${breakpoints.desktopM}px)`,
    desktopL: `@media screen and (min-width: ${breakpoints.desktopL}px)`,
}

export { breakpoints, mq }
