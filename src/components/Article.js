import React from 'react'
import './Article.css'
function Article({ data }) {
    console.log(data)
    return (
        <div className='article'>
            <div className='article_head'>
                <h1>{data.head}</h1>
                <p>{data.teaser}</p>
            </div>
            <p className='article_author'>{data.byline.text}</p>
        </div>
    )
}

export default Article