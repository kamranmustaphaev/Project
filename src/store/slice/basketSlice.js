import { createSlice } from "@reduxjs/toolkit";

const read = () => {
  return JSON.parse(localStorage.getItem('basket')) ?? [];
}
const write = (data) => {
  localStorage.setItem('basket', JSON.stringify(data));
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: {list: read()},
    reducers: {
        addToBasket(state, {payload}) {
          const target = state.list.find(el => el.id === payload)
          console.log(payload);
          if(target){
            target.count++
          }
          else{
            state.list.push({id: +payload, count: 1,basketId: Date.now()})
          }
          write(state.list)
        },
        remove(state, {payload}){
           state.list = state.list.filter(el => el.basketId !== payload)
           write(state.list)
        },
        incrCount(state, {payload}){
          state.list.find(el => el.basketId === payload).count++
          write(state.list)
        },
        decrCount(state, {payload}){
          const target = state.list.find(el => el.basketId === payload)
          if(target.count === 1){
            state.list = state.list.filter(el => el.basketId !== payload)
          }
          else{
            target.count--
          }
          write(state.list)
        }
    }
})
export const {addToBasket,incrCount,decrCount,remove} = basketSlice.actions
export default basketSlice.reducer