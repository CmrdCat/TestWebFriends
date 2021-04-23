import React from 'react'
import './card.css'

function Card(el) {
   const {
      Title,
      Year,
      imdbID,
      Type,
      Poster
   } = el.el
   return (
      <div className='card'>
         <img 
            src={
               Poster !== 'N/A'? `${Poster}`
               :
               'https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
            } 
            alt={Title}
         />
         <div className="card-info">
            <p>Title: <span>{Title}</span></p>
            <p>Year: <span>{Year}</span></p>
            <p>imdB: <span>{imdbID}</span></p>
            <p>Type: <span>{Type}</span></p>
         </div>
      </div>
   )
}

export default Card