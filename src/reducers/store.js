import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './root';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { createPromise } from 'redux-promise-middleware';

const loggerMiddleware = createLogger();
const customizedPromiseMiddleware = createPromise({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store, composeEnhancers;
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware, customizedPromiseMiddleware)));



let persistor = persistStore(store);

export { store, persistor };

