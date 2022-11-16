import axios from "axios";
import {configureStore} from "@reduxjs/toolkit";

import * as api from './config';
import {themeReducer} from "./features/theme/theme-slice";

import {countriesReducer} from "./features/countries/countries-slice";
import {controlsReducer} from "./features/controls/controls-slice";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countriesReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            }
        },
        serializableCheck: false
    })
});