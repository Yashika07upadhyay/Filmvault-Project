import React, { useEffect, useState } from 'react';
import genreids from './genre';

function Watchlist({ watchlist, setwatchlist, handleremovefromwatchlist, movieObj }) {
  const [search, setSearch] = useState('');
  const [genrelist, setgenrelist] = useState(['All Genres']);
  const [currgenre, setcurrentgenre] = useState('All Genres');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlefilter = (genre) => {
    setcurrentgenre(genre);
  };

  const sortIncreasing = () => {
    setwatchlist((prevWatchlist) => {
      const sortedList = [...prevWatchlist].sort((movieA, movieB) => {
        return movieA.vote_average - movieB.vote_average;
      });
      return sortedList;
    });
  };

  const sortDecreasing = () => {
    setwatchlist((prevWatchlist) => {
      const sortedList = [...prevWatchlist].sort((movieA, movieB) => {
        return movieB.vote_average - movieA.vote_average;
      });
      return sortedList;
    });
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    temp = ['All Genres', ...new Set(temp)];
    setgenrelist(temp);
  }, [watchlist]);

  return (
    <>
      <div className='flex justify-center flex-wrap gap-4'>
        {genrelist.map((genre) => (
          <div 
            key={genre}
            onClick={() => handlefilter(genre)} 
            className={
              currgenre === genre
                ? 'text-center bg-blue-400 flex items-center justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold'
                : 'text-center bg-gray-400 flex items-center justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold'
            }
          >
            {genre}
          </div>
        ))}
      </div>
      <div className='flex justify-center my-4'>
        <input
          onChange={handleSearch}
          value={search}
          placeholder='Search Movies'
          type='text'
          className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'
        />
      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center '>
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <div className='flex justify-center'>
                  <div onClick={sortIncreasing} className='p-2 cursor-pointer'>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className='p-2'>Ratings</div>
                  <div onClick={sortDecreasing} className='p-2 cursor-pointer'>
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currgenre === 'All Genres') {
                  return true;
                }
                return genreids[movieObj.genre_ids[0]] === currgenre;
              })
              .filter((movieObj) => {
                return movieObj.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movieObj, index) => (
                <tr key={index} className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <img
                      className='h-[6rem] w-[10rem]'
                      src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      alt=''
                    />
                    <div className='mx-10'>{movieObj.title}</div>
                  </td>
                  <td className='gap-4'>{movieObj.vote_average}</td>
                  <td className='gap-4'>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>
                  <td onClick={() => handleremovefromwatchlist(movieObj)} className='text-red-800 px-4 cursor-pointer'>
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;

