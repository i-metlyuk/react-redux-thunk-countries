import {SET_COUNTRIES, SET_ERROR, SET_LOADING} from "./countries-consts";

const initialState = {
    countries: [],
    status: 'idle',
    error: null
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES: {
            return {
                ...state,
                status: 'received',
                countries: action.payload
            };
        }
        case SET_LOADING: {
            return {
                ...state,
                status: 'loading',
                error: null
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                status: 'rejected',
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}