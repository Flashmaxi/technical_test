import React from 'react'

const NavBar = (props) => {
  


  return (
    <>
    <button onClick={() => props.navigationChange(0)} className={`p-4 mb-2  w-50 ${props.currentPage === 0 ? "bg-green-200" : ''}`}>Income details</button>
    <button onClick={() => props.navigationChange(1)} className={`p-4 mb-2  w-50 ${props.currentPage === 1 ? "bg-green-200" : ''}`}>Income</button>
    </>
  )
}

export default NavBar;