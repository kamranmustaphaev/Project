import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function CategoryItem({ id, title, image }) {
  return (
    <Link to={`/categories/${id}`}>
      <div className={s.item}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  )
}
