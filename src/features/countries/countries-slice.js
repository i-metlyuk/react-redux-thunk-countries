import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
    '@countries/load-countries',
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.ALL_COUNTRIES)
    }
)

const initialState = {
    status: 'idle',
    error: null,
    countries: []
}

const countriesSlice = createSlice({
    name: '@countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCountries.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountries.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error;
            })
            .addCase(loadCountries.fulfilled, (state, action) => {
                state.status = 'received';
                state.error = null;
                state.countries = action.payload.data;
            })
    }
})

export const countriesReducer = countriesSlice.reducer;

export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.countries.length
})

export const selectAllCountries = (state) => state.countries.countries;

export const selectVisibleCountries = (state, {search = '', region = ''}) => {
    return state.countries.countries.filter(
        country => (
            country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
        )
    )
}