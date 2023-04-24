import Home from '../pages/Home';
import RicordaPassword from '../pages/RicordaPassword';
import Login from "../pages/Login"
import RichiestaPassword from "../pages/RichiestaPassword"
import Registrazione from "../pages/Registrazione";
import ConfermaRegistrazione from "../pages/ConfermaRegisrazione"
import {Route, Routes} from "react-router-dom";;
const Router = () => {

    return <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/password" element={<RicordaPassword/>}/>
            <Route path="/richiestaPassword" element={<RichiestaPassword/>}/>
            <Route path="/registrazione" element={<Registrazione/>}/>
            <Route path="/confermaRegistrazione" element={<ConfermaRegistrazione/>}/>
        </Routes>
    </div>;
};

export default Router;