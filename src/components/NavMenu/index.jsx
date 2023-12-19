import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from './style.module.css'
import logo from './logo.png'
import Container from '../UI/Container'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Button from '../UI/Button'
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector} from 'react-redux'
import { search } from '../../store/slice/productSlice'
import { VscThreeBars } from "react-icons/vsc";


export default function NavMenu() {
  const [navLinksElemVisible, setNavLinksElemVisible] = useState();

  const dispatch = useDispatch()

  const categories = useSelector(({categories}) => categories.list)
  
  const basket = useSelector(({basket}) => basket.list)
  const products = useSelector(({products}) => products.list)
  const basketProducts = basket.map(el => {
    const product = products.find(({id}) => id === el.id )  
    return {...el, ...product }
   })
  const totalCount = basketProducts.reduce((acc, el) => acc +  el.count,0)

  const linksElem = useRef()
  const linksBtnHandler = () => {
    if (linksElem.current.classList.contains(s.menu)) {
     linksElem.current.classList.remove(s.menu) 
    } else {
     linksElem.current.classList.add(s.menu) 
    }
};
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (!target.classList.contains(s.btn) && !target.classList.contains(s.catalog)
       && !target.classList.contains(s.category_link)) {
        linksElem.current.classList.remove(s.menu);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);
  const removeClass = () => {
    linksElem.current.classList.remove(s.menu) 
  }
  const navIsActive = ({ isActive }) => isActive ? s.active : ''
  return (
    <nav>
      <Container className={s.container}>
        <div className={s.logo}>
          <Link to={'/'}><img src={logo} alt="" /></Link>
          <div className={s.nav_search}>
            <Button onClick={linksBtnHandler} 
            type={'green'} className={s.btn}>All <MdArrowDropDown className={s.category_link}/></Button>
            <input onChange={({target}) => 
            dispatch(search(target.value))} type="text" placeholder='search' />
            <Link to={'/products'}><FaSearch className={s.search_icon}/></Link>
          </div>
          <div className={s.catalog} ref={linksElem}>
            {categories.map(el => 
            <Link onClick={removeClass} className={s.category_link} to={`categories/${el.id}`} key={el.id}>{el.title}</Link>)}
          </div>
        </div>
        <div className={s.nav_righte}>
          <div className={`${s.links} ${navLinksElemVisible ? s.nav_active : ''}`} >
            <NavLink className={navIsActive} to={'/'} >Main Page</NavLink>
            <NavLink className={navIsActive} to={'/products'}>All products</NavLink>
            <NavLink className={navIsActive} to={'/all_sales'} >All sales</NavLink>
          </div>
          <VscThreeBars className={s.bars}
           onClick={()=>setNavLinksElemVisible(!navLinksElemVisible)}/>
          <Link to={'/basket'} >
            <HiOutlineShoppingBag className={s.basket} /><p className={s.count}>{totalCount}</p>
          </Link>
        </div>
      </Container>
    </nav>
  )
}
