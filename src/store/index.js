import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import axios from "axios";
import storage from 'redux-persist/lib/storage';

import * as api from '../config';
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['controls']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({
        client: axios,
        api
    }))
))

export const persistor = persistStore(store)