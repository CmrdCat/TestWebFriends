import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import './Header.css'

function Header({setSearch}) {
   return (
      <div className='wrapper'>
         <div className="header">
            <div><h1>Movie Catalog</h1></div>
            <form>
               <SearchBox setSearch={setSearch} />
            </form>
         </div>
      </div>  
   );
}

export default Header;