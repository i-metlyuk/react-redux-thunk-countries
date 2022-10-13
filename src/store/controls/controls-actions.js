import {CLEAR_CONTROLS, SET_REGION, SET_SEARCH} from "./controls-consts";

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search
})

export const setRegion = (region) => ({
    type: SET_REGION,
    payload: region
})

export const clearControls = () => ({
    type: CLEAR_CONTROLS
})