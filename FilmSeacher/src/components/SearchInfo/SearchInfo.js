import React from 'react'
import './SearchInfo.css'

function SearchInfo({search, totalResults}) {
   return (
      <div className="search-info">
         <p>You searched for: {search}, {totalResults} results found</p>
      </div>
   )
}

export default SearchInfo