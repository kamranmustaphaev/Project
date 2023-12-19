import s from './style.module.css'
import CategoryItem from '../CategoryItem'
import { useSelector } from 'react-redux'


export default function CategoriesList({ length }) {
  const categories = useSelector(({ categories }) => categories.list).slice(0, length)
  return (
    <div className={s.list}>
      {
        categories.map(el => <CategoryItem key={el.id} {...el} />)
      }
    </div>
  )
}
