export const login = (state) => {
    return {
        type:'LOGIN',
        value:state.users.login = true
    }
}

export const logout = (state) => {
    return {
        type:'LOGOUT',
        value:state.users.login = false
    }
}