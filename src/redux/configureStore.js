import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from './reducers/products'

const reducer = combineReducers({ products })
const store = configureStore({ reducer })

export default store