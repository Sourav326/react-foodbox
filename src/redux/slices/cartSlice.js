import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        //mutating the state here
        additem:(state,action) => {
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            const itemToDelete = state.items.findIndex(item => item.id == action.payload.id);
            state.items.splice(itemToDelete, 1);
        },
        clearCart:(state,action)=>{
            state.items.length = 0;
        }
    }
});

// export the actions
export const {additem,removeItem,clearCart} = cartSlice.actions;

//export the reducers
export default cartSlice.reducer;