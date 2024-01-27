import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const res = await fetch('http://localhost:3001/categories/all')
        const data = await res.json()
        return data
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {list: []},
    reducers:{

    },
    extraReducers: builder => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state, {payload}) => {
            state.status = 'ready'
            state.list = payload
        })
        .addCase(fetchCategories.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})
export default categoriesSlice.reducer