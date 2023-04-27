import React from 'react'
import './RightContent.css'
import RightBottom from './RightBottom'


function RightContent({ data }) {
  console.log(data)
  return (
    <div className='rightcontent'>
      {/* Top Content */
      }
      <div className='rightcontent_top'>
        <img src={data.articles[1].image} alt=""/>
        <h1>{data.articles[1].head}</h1>
        <p>{data.articles[1].byline.text}</p>
      </div>
      {/* Bottom Content */}
      <RightBottom data={data.articles[6]} />
      <RightBottom data={data.articles[7]} />
      <RightBottom data={data.articles[8]} />
      <RightBottom data={data.articles[9]} />
      <RightBottom data={data.articles[10]} />
    </div>
  )
}

export default RightContent