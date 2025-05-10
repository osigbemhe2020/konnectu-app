import React from 'react'
import Revenue from './revenue.js'
import Performance from './performance.js'
import Job from './job.js'
import Account from './account.js'

const Body = () => {
  return (
    <div className='body-cont'>
        <h1 className="blue-text">Overview</h1>
        <div className='wrapper'>
          <Revenue />
          <Performance />
          <Job />
          <Account />
        </div>
    </div>
  )
}

            
            
            

export default Body