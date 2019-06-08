import { createStore, applyMiddleware } from 'redux';
import  { persistStore, persistReducer } from "redux-persist";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from "react-native"
import reducers from 'reducers';

const persistConfig = {
    key : 'root',
    storage : AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        createLogger(),
        thunkMiddleware
    )
);

const persistor = persistStore(store);

export  {
    store,
    persistor
};
