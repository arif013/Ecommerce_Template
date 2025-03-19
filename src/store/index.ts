import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
  }

const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartItem[],
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            state.push(action.payload)
            // console.log(state.length)
        },
        removeFromCart(state, action: PayloadAction<string>) {
            // const index = state.indexOf(action.payload)
            // // const index = action.payload
            // console.log(action.payload)
            // console.log(index)
            // state.splice(index, 1)
            return state.filter(item => item.id !== action.payload)
        }
    }
})

const store = configureStore({
    reducer: {
        carts: cartSlice.reducer
    }
})

// console.log(store)
// const startingState = store.getState()
// console.log(JSON.stringify(startingState))

// store.dispatch(cartSlice.actions.addToCart("Some product"))

// const finalState = store.getState();
// console.log(JSON.stringify(finalState))

export { store }
export const { addToCart, removeFromCart } = cartSlice.actions