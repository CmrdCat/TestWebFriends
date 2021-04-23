import React from 'react'
import LoginBox from '../loginBox/';
import SearchBox from '../searchbox/'
import './header.css'

function Header(setSearch) {
   return (
      <div className='wrapper'>
         <div className="header">
            <div><h1>Movie Catalog</h1></div>
            <form>
               <SearchBox setSearch={setSearch} />
            </form>
            <LoginBox />
         </div>
      </div>  
   );
}

export default Header;