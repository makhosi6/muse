import React from 'react'

export default function MobileWrapper(props) {
  return (
    <main className='content-wrapper mobile-wrapper main'>{props.children}</main>
  )
}
