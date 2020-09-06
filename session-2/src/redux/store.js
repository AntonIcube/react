import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user";
import cartReducer from "./reducers/cart";


const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const middlewares = applyMiddleware(thunk);

const stores = createStore(
  reducers,
  undefined
);
export default stores;
