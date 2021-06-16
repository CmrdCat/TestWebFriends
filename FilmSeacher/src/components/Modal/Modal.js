import React, {useState, useEffect} from 'react'
import './Modal.css'

const Modal = ({ModalCardId, setModalCardId}) => {
   const [loaded, setLoaded] = useState(false)
   const [result, setResult] = useState({})
   
   useEffect(() => {
      const link = `https://www.omdbapi.com/?apikey=8523cbb8&i=${ModalCardId}&`
         const fetchData =  async  () => {
            await fetch(link)
               .then((response) => {
                  return response.json();
               }).then(
                  (res) => {
                     setLoaded(true)
                     setResult(res)
                  }
               )
         }
         fetchData()
   }, [ModalCardId])

   return (
      <div className="modal" onClick={() => setModalCardId('')} >
         <div className="modal-content">
            {
               loaded ?
                  <>
                     
                        <img className="modal-image"
                           src={
                              result.Poster !== 'N/A' ? `${result.Poster}`
                                 :
                                 'https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
                           }
                           alt={result.Title} />
                        <div className="modal-info">
                           <p>Title:{result.Title}</p>
                           <p>Year:{result.Year}</p>
                           <p>Rated:{result.Rated}</p>
                           <p>Released:{result.Released}</p>
                           <p>Runtime:{result.Runtime}</p>
                           <p>Genre:{result.Genre}</p>
                           <p>Director:{result.Director}</p>
                           <p>Writer:{result.Writer}</p>
                           <p>Actors:{result.Actors}</p>
                           <p>Plot:{result.Plot}</p>
                           <p>Language:{result.Language}</p>
                           <p>Country:{result.Country}</p>
                           <p>Awards:{result.Awards}</p>
                           <p>Actors:{result.Actors}</p>
                        </div>
                  </> :
                  <>
                     <p>Wait...</p>
                  </>
            }
         </div>
      </div>
      
   )
}

export default Modal