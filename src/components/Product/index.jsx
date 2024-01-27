import React, { useState } from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { addToBasket } from '../../store/slice/basketSlice';
import { useDispatch } from 'react-redux';

export default function Product({ id, image, title, price, discont_price }) {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);

  const handlerAddToBasket = () => {
    dispatch(addToBasket(+id));
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };
  return (
    <div className={s.item}>
      <Link to={`/products/product/${id}`}>
        <img src={`http://localhost:3001${image}`} alt={title} />
      </Link>
      <div className={s.priceAndBtn}>
        <div className={s.priceBlock}>
          <p className={discont_price ? s.price : ''}>{price}$</p>
          {discont_price && <p className={s.disc}>{discont_price}$</p>}
          {discont_price ? (
            <p className={s.percent}>
              -{Math.ceil((price - discont_price) / price * 100)}%
            </p>
          ) : (
            ''
          )}
        </div>
        <HiOutlineShoppingBag className={s.addToBasket} onClick={handlerAddToBasket} />
        {
          showNotification && (<p className={s.notification}>added</p>)
        }
      </div>
      <Link to={`/products/product/${id}`}>
        <p className={s.title}>{title}</p>
      </Link>
    </div>
  );
}