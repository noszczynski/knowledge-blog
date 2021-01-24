import { useEffect, useState } from 'react'
import { cloneDeep, toLower, trim } from 'lodash'

export const useFilter = (data = []) => {
    const [filteredData, setFilteredData] = useState([])

    const onFilter = (term = '', field = '') => {
        if (term && (trim(term) === '' || trim(term) === ' ')) {
            setFilteredData([])
            return
        }

        if (!field) {
            return
        }

        const filtered = data.filter(item => {
            const termToLower = toLower(term)
            const base = toLower(item[field])

            return base.includes(termToLower)
        })

        setFilteredData(cloneDeep([...filtered]))
    }

    useEffect(() => {
        if (data && data.length > 0) {
            const items = cloneDeep([...data])
            setFilteredData(items)
        }
    }, [data])

    return [filteredData, onFilter]
}
