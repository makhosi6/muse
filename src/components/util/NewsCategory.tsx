import React from 'react'

type Props = {
  label: string
}

const NewsCategory = (props: Props) => {
  return (
    <div className='muse-news-heading'>
        <div>
            <span className="muse-news-heading-title">
               {props.label}
            </span>
        </div>
    </div>
  )
}

export default NewsCategory