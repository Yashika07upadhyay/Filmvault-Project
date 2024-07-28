import React from 'react'
import MovieCard from './MovieCard'
import {useEffect} from 'react'
import axios from 'axios'
import {useState} from 'react'
import Pagination from './Pagination'
function Movies({watchlist,handleaddtowatchlist,handleremovefromwatchlist}) {
  const[movies,setMovies]=useState([])
  const[pageNo,setPageNo]=useState(1)
  const handlePrev=()=>{
    if(pageNo===1){
    setPageNo(1)
    }
    else
    setPageNo(pageNo-1)
  }
  const handleNext=()=>{
    setPageNo(pageNo+1)
  }
useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=90a899c27059548f5f19d61814d5e04c&language=en-US&page=${pageNo}`).then(function(res){
    setMovies(res.data.results)
  })
},[pageNo])
  return (
    <div>
      <div className='text-2xl m-5 font-bold text-center p-5'>Trending Movies
        <div className='flex flex-row flex-wrap justify-around gap-5'>
          {movies.slice(0,18).map((movieObj)=>{
            return <MovieCard key={movieObj.id} watchlist={watchlist} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleaddtowatchlist={handleaddtowatchlist} handleremovefromwatchlist={handleremovefromwatchlist}/>
})}
          </div>       
      </div >
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies