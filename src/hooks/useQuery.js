import { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'

const DEFAULT_LANGUAGE = 'pl'

export const useQuery = (data, field, locale = DEFAULT_LANGUAGE) => {
    const [items, setItems] = useState([])
    const [itemsLocale, setLocaleItems] = useState([])

    const getNodes = () => {
        if (field) {
            return data[field].nodes
        }
    }

    useEffect(() => {
        if (items && items.length > 0) {
            const localeItems = items.filter(item => item.locale === locale)
            setLocaleItems(localeItems)
        }
    }, [items])

    useEffect(() => {
        const nodes = cloneDeep(getNodes(data))
        setItems(nodes)
    }, [data])

    return [itemsLocale, items]
}
