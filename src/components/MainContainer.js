import React from 'react'
import { newData } from '../services/data'
import LeftContent from './LeftContent'
import './MainContainer.css'
import RightContent from './RightContent'

// const newData = JSON.parse(data)
function MainContainer() {
  return (
    <div className='maincontainer'>
      {/* Left Content */}
      <LeftContent data={newData} />
      {/* RightContent */}
      <RightContent data={newData} />

    </div>
  )
}

export default MainContainer