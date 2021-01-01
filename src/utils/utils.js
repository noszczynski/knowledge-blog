const getNodes = (data, field) => {
    if (field) {
        const items = data[field].edges
        return items ? items.map(item => ({ ...item.node })) : []
    }

    return []
}

export { getNodes }
