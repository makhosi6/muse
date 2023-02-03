import React, { PropsWithChildren, ReactNode } from 'react'


export const MobileWrapper = (props: PropsWithChildren<ReactNode>) => {
  return (
    <main className='mobile-wrapper main' >{props.children}</main>
  )
}