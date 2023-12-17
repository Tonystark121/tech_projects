import React from 'react'
import Button from './Button'

const New = ({handlePageChange, currPage, isClicked}) => {
  const prevPage = () => {
    let newPage = currPage - 1;
    handlePageChange(newPage)
  }
  const nextPage = () => {
    let newPage = currPage + 1;
    handlePageChange(newPage)
  }

  return (
    <div className={`w-[90%] mt-8 m-auto rounded-[20px] shadow-2xl flex items-center justify-center gap-6 ${isClicked ? 'bg-slate-400' : 'bg-red-400'}`}>
        <Button onClick={prevPage}>Prev</Button>
        <p className='font-semibold text-xl'>{currPage} <span>of 2</span></p>
        <Button onClick={nextPage}>Next</Button>
    </div>
  )
}

export default New
