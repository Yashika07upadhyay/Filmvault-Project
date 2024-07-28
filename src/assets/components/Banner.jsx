import React from 'react';

function Banner() {
  return (
    <div
      className="bg-center  md:h-[70vh] bg-cover flex items-end"
      style={{ 
          backgroundImage: 'url("https://i.pinimg.com/736x/03/72/ae/0372ae402e0588907c92251de6bb6ebc.jpg")'}} >
            <div className='text-white  font-mono text-2xl text-center w-full bg-gray-900/60 p-4'>Toy Story 3</div>
    </div>
  );
}
export default Banner;






