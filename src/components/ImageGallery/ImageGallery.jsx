import React from 'react'
import { StyledGallery } from './ImageGallery.styled'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'


const ImageGallery = ({images}) => {
  return (
    <StyledGallery className="gallery">
        {images.map((image => {
          console.log(image)
          return <ImageGalleryItem key={image.id} small={image.webformatURL} large={image.largeImageURL}/>
        }))}
    </StyledGallery>
  )
}

export default ImageGallery
