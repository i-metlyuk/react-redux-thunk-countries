import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: '@theme',
    initialState: 'light',
    reducers: {
        changeTheme: (_, action) => action.payload
    }
})

export const {changeTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;