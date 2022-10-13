import {CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS} from "./details-consts";

export const setLoading = () => ({
    type: SET_LOADING
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})

export const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country
})

export const clearDetails = () => ({
    type: CLEAR_DETAILS
})

export const setNeighbors = (countries) => ({
    type: SET_NEIGHBORS,
    payload: countries
})

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading);

    client.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch((error) => dispatch(setError(error.message)));
}

export const loadNeighborsByBorders = (borders) => (dispatch, _, {client, api}) => {
    client.get(api.filterByCode(borders))
        .then(({data}) => dispatch(setNeighbors(data.map((c) => c.name))))
        .catch(console.error);
}