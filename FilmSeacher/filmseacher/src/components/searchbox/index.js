import React from 'react'
import "./searchbox.css"

function SearchBox(props) {

   return (
      <input 
         type="text" 
         name="name" 
         placeholder="Enter Film Name"
         onKeyPress={(event) => {
            if (event.key === 'Enter') {
               event.preventDefault()
               props.setSearch.setSearch(event.target.value)
            }
         }}
      />
   )
}

export default SearchBox