import React from 'react'
import './searchInfo.css'

function SearchInfo(props) {
   const {
      search,
      totalResults,
   } = props
   return (
      <div className="search-info">
         <p>You searched for: {search}, {totalResults} results found</p>
      </div>
   )
}

export default SearchInfo