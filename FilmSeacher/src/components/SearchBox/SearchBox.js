import React from 'react'
import "./SearchBox.css"

function SearchBox({setSearch}) {

   return (
      <input 
         type="text" 
         name="name" 
         placeholder="Enter Film Name"
         onKeyPress={(event) => {
            if (event.key === 'Enter') {
               event.preventDefault()
               setSearch(event.target.value)
            }
         }}
      />
   )
}

export default SearchBox