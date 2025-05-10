import React from 'react'
import { CiGlobe } from "react-icons/ci";

const Formcont = () => {
  return (
    <>
      <div> 
        <div class="field">
          <input type="text" name="name" placeholder="search" className='top-search'/>
          <CiGlobe />
        </div>
        <div><button className='top-button'> Sort By</button></div>
      </div>
    </>
  )
}

export default Formcont