import React, {useState} from 'react';
import Header from '../components/Header';
import Nav from "../components/Nav";
import {Link} from "react-router-dom";
const Login = () => {
   /*
   * STATE OF VARIABLE TO LOGIN PAGE
   */
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [checkBox, setCheckBox] = useState(false);
   const [noUsername, setNoUsername] = useState(false);
   const [noPassword, setNoPassword] = useState(false);

    const handleChange = event => {
        if(event.target.name === "username"){
            setUsername(event.target.value);
        }else{
            setPassword(event.target.value);
        }

        if(event.target.value!== ""){
            if(event.target.name === "username"){
                setNoUsername(false);
            }else{
                setNoPassword(false);
            }
        }else{
            if(event.target.name === "username"){
                setNoUsername(true);
            }else{
                setNoPassword(true);
            }
        }

    };


    function checkInput() {
        /*const checkRegaxCodiceFedele = new RegExp('[0-9]*[a-zA-Z]{2}$');
        const checkRegaxPsw = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+)');*/
        if(username === "" && password===""){
            setNoUsername(true);
            setNoPassword(true);
        }else{
            if(username === ""){
                setNoUsername(true);
            }else{
                if(password === "") {
                    setNoPassword(true);
                }
            }
        }
    }

    /*
    * COMPONENT RETURN
    */
   return ( <div>
        <Header/>
        <div className="row h-100 align-items-start bg-secondary" id="content">
            <Nav/>
            <div className="bg-secondary col-sm-9 p-0 p-sm-3 h-100">
                <div className="card align-top">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-muted text-center d-none d-sm-block">Per usufruire del servizio
                                    è necessario autenticarsi
                                </div>
                                <div className="form-group error">
                                    <label htmlFor="username">Nome utente</label>
                                    <input className="form-control p-sm"
                                           placeholder="Codice fedele"
                                           name="username"
                                           id="username"
                                           onChange={handleChange}
                                           value={username}
                                           type="text"/>
                                    <div className="errorMessage" id="username" style={{display: noUsername===true ? 'block' : 'none' }} >
                                        inserire il proprio codice fedele
                                    </div>
                                </div>
                                <div className="form-group error">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control p-sm"
                                           placeholder="Password"
                                           name="password"
                                           id="password"
                                           onChange={handleChange}
                                           value={password}
                                           type="password"/>
                                    <div className="errorMessage" id="LoginFormAde_password_em_" style={{display: noPassword===true ? 'block' : 'none' }}>
                                        inserire la password
                                    </div>
                                </div>
                                <div className="form-group success">
                                    <label htmlFor="LoginFormAde_rememberMe">Ricordami </label>
                                    <input
                                        id="ytLoginFormAde_rememberMe"
                                        type="hidden"
                                        value="0"
                                        name="LoginFormAde[rememberMe]"/>
                                    <input className=""
                                           name="LoginFormAde[rememberMe]"
                                           id="LoginFormAde_rememberMe"
                                           onClick={() => setCheckBox(!checkBox)}
                                           value={checkBox}
                                           type="checkbox"/>
                                    <div className="errorMessage" id="LoginFormAde_rememberMe_em_"></div>
                                </div>
                                <div className="mb-1">
                                    <button className="btn btn-primary w-100" onClick={() => checkInput()}>
                                        <strong>Accesso</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="text-muted d-none d-sm-block">oppure</div>
                                <div>
                                    <Link to= "/password" className="btn btn-outline-primary w-100 mt-1">Non ricordi più la password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);

};

export default Login;