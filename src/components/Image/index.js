import React from 'react'
import Img from 'gatsby-image'

const Image = ({ fluid }) => {
    return fluid ? <Img fluid={fluid} /> : null
}

export default Image
