import React from 'react'
import './brand.css'
import {shopify, dropbox,slack,atlassian,google} from './imports'

const Brand = () => {
  return (
    <div className='gpt__brand section__padding'>
      <div>
          <img src={google} alt="google"/>
      </div>
      <div>
          <img src={atlassian} alt="google"/>
      </div>
      <div>
          <img src={slack} alt="google"/>
      </div>
      <div>
          <img src={dropbox} alt="google"/>
      </div>
      <div>
          <img src={shopify} alt="google"/>
      </div>
    </div>
  )
}

export default Brand