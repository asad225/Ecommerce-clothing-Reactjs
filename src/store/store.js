import { createStore, applyMiddleware, compose } from 'redux';
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import { rootReducer } from './root-reducer';
// import { loggerMiddleWare } from './middleware/logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';
import thunk from 'redux-thunk';

const logger = createLogger({})


// const middleware = [process.env.NODE_ENV !== 'development' && loggerMiddleWare , thunk].filter(Boolean)

// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleware))
const persistConfiq = {
    key:'root',
    storage,
    // blacklist:'user',
    whitelist:['cart']
}

// const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfiq,rootReducer)

export const store = createStore(persistedReducer,applyMiddleware(logger,thunk));

// sagaMiddleware.run(rootReducer)

export const persistor = persistStore(store)