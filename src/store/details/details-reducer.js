import {CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS} from "./details-consts";

const initialState = {
    status: 'idle',
    error: null,
    currentCountry: null,
    neighbors: []
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
        case SET_NEIGHBORS: {
            return {
                ...state,
                neighbors: action.payload
            }
        }
        default: {
            return state;
        }
    }
}