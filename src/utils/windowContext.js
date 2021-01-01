import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const WindowContext = React.createContext(null)

const WindowProvider = props => {
    const [width, setWidth] = useState(0)

    const onResize = () => {
        const w = window.innerWidth
        setWidth(w)
    }

    const init = () => {
        setWidth(window.innerWidth)

        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }

    useEffect(init, [])

    return (
        <WindowContext.Provider value={{ width }}>
            {props.children}
        </WindowContext.Provider>
    )
}

const useWindow = () => {
    return useContext(WindowContext)
}

const withWindow = Element => {
    const component = React.forwardRef((props, ref) => (
        <WindowContext.Consumer>
            {context => <Element userStream={context} {...props} ref={ref} />}
        </WindowContext.Consumer>
    ))
    component.displayName = 'withWindow'

    return component
}

export { WindowContext, WindowProvider, useWindow, withWindow }

WindowProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
