import {SET_THEME} from "./theme-consts";

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme
})

export const changeTheme = (theme) => (dispatch) => {
    if (theme === 'light') {
        dispatch(setTheme('dark'))
    } else {
        dispatch(setTheme('light'))
    }
}