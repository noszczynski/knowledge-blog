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

const containers = {
    mobileS: 0,
    mobileM: 0,
    mobileL: 578 - 32,
    tabletS: 768 - 32,
    tabletM: 1024 - 32,
    tabletL: 1280 - 64,
    laptopS: 1280 - 64,
    laptopL: 1440 - 64,
    desktopS: 1440 - 64,
    desktopM: 1920 - 128,
    desktopL: 1920 - 128,
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

export { breakpoints, mq, containers }
