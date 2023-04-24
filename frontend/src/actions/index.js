//qui sto definendo tutte le funzioni che mi servono per il reducer della login
export const login = (state) => {
    state.users.login = true;
    return {
        type:'LOGIN',
        value:state
    }
}

export const logout = (state) => {
    state.users.login = false;
    return {
        type:'LOGOUT',
        value:state
    }
}