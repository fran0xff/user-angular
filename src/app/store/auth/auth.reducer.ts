import { createReducer, on } from "@ngrx/store"
import { loginSuccess, logout } from "./auth.actions"


export const initialLogin = {
    isAdmin: false,
    isAuth: false,
    user: undefined
}

const initialState = JSON.parse(sessionStorage.getItem('login') || JSON.stringify(initialLogin));
export const authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, { login }) => (
        {
            isAuth: true,
            isAdmin: login.isAdmin,
            user: login.user
        }
    )),
    on(logout, (state) => (
        {
            ...initialLogin
        }
    ))

        
)