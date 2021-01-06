import { cloneDeep } from 'lodash'
import Parser from 'html-react-parser'

const getNodes = (data, field) => {
    if (field) {
        return data[field].nodes
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

const truncate = (str = '', n = 0) => {
    if (str) {
        if (str.length <= n) {
            return str
        }

        const subString = str.substr(0, n - 1)
        return subString.substr(0, subString.lastIndexOf(' ')) + '&hellip;'
    }

    return ''
}

const parseHTML = (text = '') => {
    return text ? Parser(text) : ''
}

export { getNodes, getLanguageItems, getUserLanguage, truncate, parseHTML }
