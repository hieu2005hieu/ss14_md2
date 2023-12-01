// Khởi tạo state:import createSlice
// khơir tạo reducer
// khởi tạo store
// xuất kho mang đi dùng
import { configureStore, createSlice } from "@reduxjs/toolkit"
//1.khoi tao state
const productState = createSlice({
    name: "redux-toolkit",
    initialState: {
        products: [
            {
                name: "hieu",
                age: 20,
                
            },
            {
                name: "hoa",
                age: 25,
            },
            {
                name: "kien",
                age: 27,
            },
            {
                name: "thao",
                age: 22,
            },
            {
                name: "thanh",
                age: 17,
            },
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push({
                name: action.payload,
                age:11
            })
        },
        DELETE: (state, action)=>{
            state.products= state.products.filter((item) => {
                return item.age!=action.payload
            })
        },
        edit: (state, action) => {
            let index = state.products.findIndex((ietm) => {
               return ietm.age ==action.payload.age
            })
            state.products[index]=action.payload
        }
    }
});
// xuat ra action
export const { addProduct, DELETE,edit } = productState.actions
// 2 khoi tao reduxtcer
const producReducer = productState.reducer
// 3 Khoi tao store
const store = configureStore({
    reducer: {
        producReducer,
    }
})
// 4 XUat ra cho ung dung dung
export default store