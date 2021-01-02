const item = 'theme'

export default {
    set: value => localStorage.setItem(item, JSON.stringify(value)),
    get: () => JSON.parse(localStorage.getItem(item)),
    is: () => !!JSON.parse(localStorage.getItem(item)),
    clear: () => localStorage.removeItem(item),
}
