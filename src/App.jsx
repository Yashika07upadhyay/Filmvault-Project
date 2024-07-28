import React, { useEffect, useState } from 'react';
import Navbar from './assets/components/Navbar';
import Movies from './assets/components/Movies';
import Watchlist from './assets/components/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route
import Banner from './assets/components/Banner';

function App() {
  let[watchlist,setwatchlist]=useState([])

  let handleaddtowatchlist=(movieObj)=>{
  let newWatchlist=[...watchlist,movieObj]
  localStorage.setItem('moviesApp',JSON.stringify(newWatchlist));
  setwatchlist(newWatchlist);
  }
  let handleremovefromwatchlist=(movieObj)=>{
    let filteredwatchlist=watchlist.filter((movie)=>{
      return movie.id!=movieObj.id
    })
    setwatchlist(filteredwatchlist)
  }
  useEffect(()=>{
    let moviesfromlocalstorage=localStorage.getItem('moviesApp')
    if(!moviesfromlocalstorage){
      return
    }
    setwatchlist(JSON.parse(moviesfromlocalstorage))
  },[])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Banner/> <Movies watchlist={watchlist} handleaddtowatchlist={handleaddtowatchlist} handleremovefromwatchlist={handleremovefromwatchlist}/></>} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist}  setwatchlist={setwatchlist} handleremovefromwatchlist={handleremovefromwatchlist}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

