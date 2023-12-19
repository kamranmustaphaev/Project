import {  Route, Routes } from 'react-router-dom';
import NavMenu from '../NavMenu';
import './App.css';
import HomePage from '../pages/HomePage';
import CategoriesPage from '../pages/CategoriesPage';
import CategoryPage from '../pages/CategoryPage';
import ProductsPage from '../pages/ProductsPage';
import ProductPage from '../pages/ProductPage';
import BasketPage from '../pages/BasketPage';
import Stock from '../Stock';
import { useEffect } from 'react';
import { fetchCategories} from '../../store/slice/categoriesSlice';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/slice/productSlice';
import Footer from '../Footer';
import SalePage from '../pages/SalePage';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  },[dispatch])

  return (
   <>
    <NavMenu/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/stock' element={<Stock/>}/>
      <Route path='/categories' element={<CategoriesPage/>}/>
      <Route path='/categories/:id' element={<CategoryPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/all_sales' element={<SalePage/>}/>
      <Route path='/products/product/:id' element={<ProductPage/>}/>
      <Route path='/basket' element={<BasketPage/>}/>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
