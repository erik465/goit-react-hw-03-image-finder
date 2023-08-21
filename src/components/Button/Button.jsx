import React from 'react'
import { StyledButton } from './Button.styled'

const Button = ({loadMore}) => {
  return (
    <StyledButton onClick={loadMore}>Load more</StyledButton>
  )
}

export default Button
