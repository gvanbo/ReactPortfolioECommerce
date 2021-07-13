import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //use local storage as default

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // array of reducers that should be persist
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)
