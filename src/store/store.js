import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from "./middleware/logger";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== 'production' && loggerMiddleware].filter(Boolean);

const composedEnhancer =(
  process.env.NODE_ENV !== 'production' &&
  window && 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const composeEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);

