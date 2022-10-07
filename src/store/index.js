import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from '../config';

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({
        client: axios,
        api
    }))
))