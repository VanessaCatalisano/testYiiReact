import Loggedreducer from "./isLogged";
import {combineReducers} from "redux";
//qui inserisco tutti i vari reducer che creo, l'elenco sono  i vari reducer che utilizzo
const rootReducer = combineReducers({
    Loggedreducer,
});

export default rootReducer;