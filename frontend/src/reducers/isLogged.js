import {login, logout} from "../actions";
// questo è lo stato inziale che viene inserito di default se non mi viene passato nulla
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

//qui definisco l'effettivo reducer con tutte le sue azioni che richiamo mediante il tipo
const Loggedreducer = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN":
            return login(state);
        case "LOGOUT":
            return logout(state);
        default:
            return state;
    }
}

export default Loggedreducer;