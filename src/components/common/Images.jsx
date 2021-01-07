import React from 'react'
import PropTypes from 'prop-types'

const Images = ({ src, alt, width, height, circle, ...attrs }) => {
  if(!src) {src="https://picsum.photos/500"}
  return <img src={src} alt={alt} width={width} height={height} circle={circle} {...attrs}  />
}

Image.protoTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,

}

Image.defaultProps = {
  src: 'https://picsum.photos/500',
  alt: "alt name",
  width: 100,
  height: 100,

}

export default Images
