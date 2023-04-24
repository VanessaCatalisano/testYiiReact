import {login, logout} from "../actions";

const initialState = {
    users: {
        login: false,
        account:{
            codiceMembro:"",
            password:"",
            email:""
        }
    }
}
const Loggedreducer = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN":
            return login();
        case "LOGOUT":
            return logout();
        default:
            return state;
    }
}

export default Loggedreducer;