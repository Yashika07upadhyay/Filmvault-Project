import React from 'react'

function Pagination({pageNo,handlePrev,handleNext}) {
  return (
    <div className='bg-gray-900/60 p-4mt-8 flex justify-center gap-8'>
        <div onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination;