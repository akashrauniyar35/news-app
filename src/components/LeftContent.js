import React from 'react'
import Article from './Article'
import './LeftContent.css'

function LeftContent({ data }) {
    return (
        <div>
            {/* header */}
            <div className="leftcontent">
                <div className='leftcontent_content'>
                    <div className='leftcontent_header'>
                        <h1>{data.articles[0].head}</h1>
                        <p>{data.articles[0].teaser}</p>
                    </div>
                    <p className='leftcontent_author'>{data.articles[0].byline.text}</p>
                </div>
                <img className='header_image' src={data.articles[0].image} alt="" />
            </div>
            <div className='bottom_content'>
                <div className='bottom_content_first'>
                    <img src={data.articles[2].image} alt=""/>
                    <Article data={data.articles[2]} />
                </div>
                <div className='bottom_content_double'>
                    <Article data={data.articles[3]} />
                    <div className='bottom_content_middle'>
                        <Article data={data.articles[4]} />
                    </div>
                </div>
                <div className='bottom_content_first'>
                    <img src={data.articles[5].image} alt=""/>
                    <Article data={data.articles[5]} />
                </div>
            </div>
        </div>
    )
}

export default LeftContent