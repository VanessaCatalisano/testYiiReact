import Home from '../pages/Home';
import RicordaPassword from '../pages/RicordaPassword';
import Login from "../pages/Login"
import RichiestaPassword from "../pages/RichiestaPassword"
import {Route, Routes} from "react-router-dom";
const Router = () => {

    return <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/password" element={<RicordaPassword/>}/>
            <Route path="/richiestaPassword" element={<RichiestaPassword/>}/>
        </Routes>
    </div>;
};

export default Router;