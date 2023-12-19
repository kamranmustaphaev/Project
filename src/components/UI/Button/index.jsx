import React from 'react'
import s from './style.module.css'

export default function Button({children, className,type,...props}) {
  props['className'] = [s.btn,s[type], className].join(' ')
  return (
    <>
      {
       <button {...props}>{children}</button> 
      }
    </>
  )
}
