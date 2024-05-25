import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice(
    {
        name:"app",
        initialState:{
            products: [],
            cart: [],
            itemToDisplay: "",
            totalCart: 0,
        },
        reducers:{
            Add_products:(state,actions)=>{
                

            }
        }
    }
)