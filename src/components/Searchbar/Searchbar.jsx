import React from 'react'
import {StyledSearchComponent} from './Searchbar.styled'

const Searchbar = ({changeQueue}) => {
  return (
    <StyledSearchComponent className="searchbar">
        <form className="form" onSubmit={(e) => {
            e.preventDefault()
            changeQueue(e.target.firstChild.value)
          }}>
            <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />

            <button type="submit" className="button" >
                <span className="button-label">Search</span>
            </button>
        </form>
    </StyledSearchComponent>
  )
}

export default Searchbar
