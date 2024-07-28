import React from 'react'
import Watchlist from './Watchlist';

function MovieCard({ movieObj,poster_path, name, handleaddtowatchlist,handleremovefromwatchlist,watchlist }) {
  function doesContain(movieObj){
   for(let i=0;i<watchlist.length;i++){
    if(watchlist[i].id==movieObj.id){
      return true
    }
   }
   return false
  }
  return (
    <div
      className='h-[40vh] w-[200px] bg-center bg-contain bg-no-repeat rounded-xl flex flex-col items-end hover:scale-110 duration-300 hover:cursor-pointer relative'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}>
      {doesContain(movieObj)?
      <div onClick={()=>{handleremovefromwatchlist(movieObj)}} className='m-3 h-8 w-8 rounded-lg bg-gray-600/60'>&#10060;</div>:
      <div onClick={()=>{handleaddtowatchlist(movieObj)}} className='m-3 h-8 w-8 rounded-lg bg-gray-600/60'>
      &#128525;
      </div>
      }
      
      <div className='absolute bottom-0 left-0 right-0 text-white font-mono text-2xl text-center w-full bg-gray-900/60 p-4'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard;
