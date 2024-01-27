import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrCount, incrCount, remove } from '../../store/slice/basketSlice'
import { RiDeleteBinLine } from "react-icons/ri";

export default function BasketItem({ id, count, price, discont_price, title, image }) {
  const dispatch = useDispatch()
  return (
    <div className={s.item}>
      <img src={`http://localhost:3001${image}`} alt={title} />
      <div className={s.count_block}>
        <p >{title}</p>
        <div className={s.count}>
          <button onClick={() => dispatch(decrCount(id))}>-</button>
          <p>{count}</p>
          <button onClick={() => dispatch(incrCount(id))}>+</button>
        </div>
      </div>
      <div className={s.price_block}>
        <p className={s.price}>{discont_price ?? price}$</p>
        {discont_price ? <p className={s.discount}>{price}$</p> : ''}
      </div>
      <button className={s.remove} onClick={() => dispatch(remove(id))}>
        <RiDeleteBinLine />
      </button>

    </div>
  )
}
