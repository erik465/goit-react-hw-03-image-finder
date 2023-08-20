import React from 'react'
import {StyledItem} from './ImageGalleryItem.styled'

const ImageGalleryItem = ({small , large}) => {
  return (
    <StyledItem className="gallery-item">
        <img src={small} alt=""/>
    </StyledItem>
  )
}

export default ImageGalleryItem
