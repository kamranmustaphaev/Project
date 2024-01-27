import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const res = await fetch('http://localhost:3001/products/all')
        const data = await res.json()
        return data
    }
)
export const fetchSingleProduct = async (id, callback) => {
    const res = await fetch(`http://localhost:3001/products/${id}`)
    const data = await res.json()
    return callback(...data)
};
const productSlice = createSlice({
    name: 'products',
    initialState: { list: [] },
    reducers: {
        search(state, { payload }) {
            state.list = state.list.map(el =>
            ({
                ...el, show: {
                    ...el.show,
                    search: el.title.toUpperCase().includes(payload.toUpperCase())
                }
            }))
        },
        sorted(state, { payload }) {
            if (payload === 'Ascending') {
                state.list.sort((a, b) => (a.discont_price || a.price) - (b.discont_price || b.price))
            }
            else if (payload === 'Descending') {
                state.list.sort((a, b) => (b.discont_price || b.price) - (a.discont_price || a.price))
            }
            else {
                state.list.sort((a, b) => a.id - b.id)
            }
        },
        discountedItems(state, { payload }) {
            state.list = state.list.map(el => {
                el.show.discont = payload ? el.discont_price : true
                return el
            })

        },
        priceMinMax(state, { payload }) {
            const { min, max } = payload
            state.list = state.list.map(el =>
            ({
                ...el, show: {
                    ...el.show,
                    price: (el.discont_price || el.price) >= min && (el.discont_price || el.price) <= max
                }
            }))
        },
        defaultState(state, { payload }) {
            state.list = payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = 'ready'
                state.list = payload.map(el => ({ ...el, show: { search: true, discont: true, price: true } }))
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})
export const { search, discountedItems, sorted, priceMinMax, defaultState } = productSlice.actions
export default productSlice.reducer