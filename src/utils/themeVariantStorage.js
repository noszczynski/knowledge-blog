const item = 'theme_variant'

export default {
    set: value => localStorage.setItem(item, value),
    get: () => localStorage.getItem(item),
    is: () => !!localStorage.getItem(item),
    clear: () => localStorage.removeItem(item),
}
