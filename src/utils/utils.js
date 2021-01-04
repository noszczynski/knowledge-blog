import { cloneDeep } from 'lodash'

const getNodes = (data, field) => {
    if (field) {
        const items = data[field].edges
        return items ? items.map(item => ({ ...item.node })) : []
    }

    return []
}

const getLanguageItems = (arr = [], lang) => {
    if (arr && Array.isArray(arr)) {
        const items = cloneDeep([...arr])
        return items.filter(item => item.locale === lang)
    }

    return []
}

const getUserLanguage = () => {
    return navigator.language
}

export { getNodes, getLanguageItems, getUserLanguage }
