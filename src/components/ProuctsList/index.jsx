import Product from '../Product'
import s from './style.module.css'

export default function ProductsList({products}) {

  return products.status === "loading" ? ( "loading..." ) : (
    <div className={s.list}>
        {
         products.filter(el => Object.values(el.show).every(el => el))
         .map(el => <Product key={el.id} {...el} />) 
        }
   </div>
  )
}
