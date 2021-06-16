import React, { useState, useEffect }  from 'react'
import SearchInfo from '../SearchInfo/SearchInfo';
import Card from '../Card/Card'
import './Content.css'
import ReactPaginate from 'react-paginate';


function Content({search, setModalCardId}) {

   const [result, setResult] = useState();
   const [currentPage, setCurrentPage] = useState(1)
   const [searchValue, setSearchValue] = useState('')
   const [loaded, setLoaded] = useState(false)

   if (searchValue !== search) {
      setCurrentPage(1)
      setSearchValue(search)
   }

   useEffect(() => {
      let link = `https://www.omdbapi.com/?apikey=8523cbb8&tt=`;
      if (searchValue) {
         link += `&s=${searchValue}`
      }
      if (currentPage > 1) {
         link += `&page=${currentPage}`
      }

      const fetchData = async () => {
         await fetch(link)
            .then((response) => {
               return response.json();
            }).then(
               (res) => {
                  setLoaded(true)
                  setResult(res)
               }
            )
      };
      fetchData();
   }, [search, currentPage]);

   function changePage(pageNum) {
      console.log('loading data');
      setLoaded(false)
      setCurrentPage(pageNum)
   }

   function createContent() {
      const totalPages = Math.ceil(result.totalResults / 10)

      return (
         <div className='wrapper'>
            {
               result.Search && loaded ? 
                  <>
                     <SearchInfo totalResults={result.totalResults} search={search} />
                     <div className="content">
                        {
                           result.Search.map((el, ind) => {
                              return <Card key={ind} el={el} setModalCardId={setModalCardId}/>
                           })
                        }
                     </div>
                     <ReactPaginate
                        pageCount={totalPages}
                        activeClassName={'active'}
                        containerClassName={'pagination'}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        forcePage={currentPage - 1}
                        onPageChange={(event) => changePage(event.selected + 1)}
                     />
                  </>
               :
                  <>
                     <p>Please Wait...</p>
                  </>
            }
         </div>
      )
   }

   
   return  (
      search ? 
         result.Response === "True"? 
            createContent()
            : 
            <>
               <p className="message-container">{result.Error}</p>
            </>
         : 
         <>
            <p className="message-container">Please, Enter Movie Title</p>
         </>   
   )

}

export default Content;