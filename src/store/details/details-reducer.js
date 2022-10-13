import {CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING} from "./details-consts";

const initialState = {
    status: 'idle',
    error: null,
    currentCountry: null
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload,
                status: 'rejected'
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                status: 'loading',
                error: null
            }
        }
        case SET_COUNTRY: {
            return {
                ...state,
                status: 'received',
                currentCountry: action.payload
            }
        }
        case CLEAR_DETAILS: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}