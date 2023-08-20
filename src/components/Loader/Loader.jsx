import React from 'react'
import { Circles } from 'react-loader-spinner'



const Loader = () => {
  return (
    <Circles
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
    />
  )
}

export default Loader
