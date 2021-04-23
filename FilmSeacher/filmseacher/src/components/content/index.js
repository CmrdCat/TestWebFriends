import React, { useState, useEffect }  from 'react'
import SearchInfo from '../searchInfo/';
import Card from '../card/'
import './content.css'
import ReactPaginate from 'react-paginate';


function Content(props) {

   const [result, setResult] = useState();
   const [currentPage, setCurrentPage] = useState(1)
   const [searchValue, setSearch] = useState('')

   if (searchValue !== props.search) {
      setCurrentPage(1)
      setSearch(props.search)
   }

   useEffect(() => {
      let link = `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8`;
      if (searchValue) {
         link += `&s=${searchValue}`
      }
      if (currentPage > 1) {
         link += `&page=${currentPage}`
      }

      const fetchData = async () => {
         const result = await fetch(link)
            .then((response) => {
               return response.json();
            })
            setResult(result)
      };
      fetchData();
   }, [props, currentPage]);

   function changePage(pageNum) {
      setCurrentPage(pageNum)
   }

   function makeContent() {
      const totalPages = Math.ceil(result.totalResults / 10)
      if (result.Search) {
         return (
            <div className='wrapper'>
               <SearchInfo totalResults={result.totalResults} search={props.search}/>
               <div className="content">
                  {
                     result.Search.map((el, ind) => {
                        return <Card key={ind} el={el} />
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
            </div>
         )
      } 

      return (
         <>
            <p>Please Wait...</p>
         </>
      )
   }

   
   return  (
      props.search ? 
         result.Response === "True"? 
            makeContent()
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