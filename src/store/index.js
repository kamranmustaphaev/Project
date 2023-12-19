import {configureStore} from '@reduxjs/toolkit'
import categoriesSlice from './slice/categoriesSlice'
import productSlice from './slice/productSlice'
import basketSlice from './slice/basketSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productSlice,
        basket: basketSlice
    }
})
