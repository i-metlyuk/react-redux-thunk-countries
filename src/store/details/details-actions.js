import {CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING} from "./details-consts";

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

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading);

    client.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch((error) => dispatch(setError(error.message)));
}