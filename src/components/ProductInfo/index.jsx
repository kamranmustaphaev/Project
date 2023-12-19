import Button from '../UI/Button'
import s from './style.module.css'
import Container from '../UI/Container'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket } from '../../store/slice/basketSlice'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function ProductInfo() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [showNotification, setShowNotification] = useState(false);

  const handlerAddToBasket = () => {
    dispatch(addToBasket(id));
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const product = useSelector(({ products }) => products).list.find(el => +id === el.id)
  const { title, image, price, discont_price, description } = product ?? ''

  return (
    <Container>
      {
        product && (<>
          <h2 className={s.title}>{title}</h2>
          <div className={s.item}>
            <img src={`http://localhost:3333${image}`} alt={title} />

            <div className={s.item_info}>
              <div className={s.price}>
                <p>{(discont_price ?? price)}$</p>
                {discont_price !== null ? <p>{price}$</p> : ''}
                {discont_price && <p className={s.percent}>{Math.ceil((price - discont_price) / price * 100)}%</p>}
              </div>
              <div>
                <Button onClick={handlerAddToBasket} type={'green'}>To Cart</Button>
                {
                  showNotification && (<p className={s.notification}>added to basket!</p>)
                }
              </div>
              <div className={s.descr}>
                <p>Description</p>
                <p >{description}</p>
              </div>
            </div>
          </div>
        </>)

      }
    </Container>

  )
}
