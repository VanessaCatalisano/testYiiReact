import React, {useState} from 'react';
import { format } from 'date-fns'
import Header from '../components/Header';
import Nav from "../components/Nav";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {login} from "../actions/index";
import axios from "axios";
import qs from "qs";
const Login = () => {
   /*
   * STATE OF VARIABLE TO LOGIN PAGE
   */
   const [condiceFedele, setCondiceFedele] = useState('');
   const [password, setPassword] = useState('');
   const [checkBox, setCheckBox] = useState(0);
   const [noCodiceFedele, setNoCodiceFedele] = useState(true);
   const [noPassword, setNoPassword] = useState(true);
   const [messageCodiceFedele, setMessageCodiceFedele] = useState('');
   const [messagePsw, setMessagePsw] = useState('');
   const navigate = useNavigate();
   const state = useSelector(state => state.Loggedreducer);
   const dispatch = useDispatch();
    const requestAPI = async () => {
        try {
            const result = await axios.post(`http://192.168.2.12/newSpazioAderenti/Vanessa/spazioaderenti-react/index.php/site/login`,  qs.stringify({
                LoginFormAde : {
                    username : condiceFedele,
                    password : password,
                    rememberMe : checkBox
                }
            }));
            if(result) {
                return result.data;
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = event => {
        setMessagePsw("");
        setNoPassword(false);
        if(event.target.name === "username"){
            setCondiceFedele(event.target.value);
        }else{
            setPassword(event.target.value);
        }
    };

    function checkInputCF(){
        setMessagePsw("");
        setNoPassword(false);
        const checkRegaxCodiceFedele = new RegExp('[0-9]*[a-zA-Z]{2}$');
        if(condiceFedele === "" || checkRegaxCodiceFedele.test(condiceFedele) === false){
            setNoCodiceFedele(true);
            if(condiceFedele === ""){
                setMessageCodiceFedele("inserire il proprio codice fedele");
            }else{
                setMessageCodiceFedele("il codice fedele è composto da una parte numerica e due lettere finali, come scritto sul proprio cartellino");
            }
        }else{
            setNoCodiceFedele(false);
        }
    }

    function checkInputPsw(){
        setMessagePsw("");
        setNoPassword(false);
        if(password === ""){
            setMessagePsw("inserire la password");
            setNoPassword(true);
        }else{
            setNoPassword(false);
        }
    }

    async function checkInput() {
        checkInputCF();
        checkInputPsw();
        if(noPassword || noCodiceFedele){
            navigate("/");
        }else{
            const request = await requestAPI();
            if(request.message !== ""){
                setMessagePsw(request.message);
                setNoPassword(true);
            }else{
                state.account.codiceMembro = condiceFedele;
                dispatch(login(state));

                if(checkBox === 1){
                    //i dati rimangono salvati anche dopo la chiusura del browser
                    localStorage.setItem("CF",condiceFedele);
                    localStorage.setItem("psw",password);
                    localStorage.setItem("login",JSON.stringify(true));
                    localStorage.setItem("dateLogin",format(new Date(), 'yyyy-MM-dd'));
                }else{
                    //i dati rimangono salvati fino alla chiusura dal browser
                    sessionStorage.setItem("CF",condiceFedele);
                    sessionStorage.setItem("psw",password);
                    sessionStorage.setItem("login",JSON.stringify(true));
                }
                navigate("/home");
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
                                           onBlur={checkInputCF}
                                           value={condiceFedele}
                                           type="text"/>
                                    <div className="errorMessage" id="username" style={{display: noCodiceFedele===true ? 'block' : 'none' }} >
                                        {messageCodiceFedele}
                                    </div>
                                </div>
                                <div className="form-group error">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control p-sm"
                                           placeholder="Password"
                                           name="password"
                                           id="password"
                                           onChange={handleChange}
                                           onBlur={checkInputPsw}
                                           value={password}
                                           type="password"/>
                                    <div className="errorMessage" id="LoginFormAde_password_em_" style={{display: noPassword===true ? 'block' : 'none' }}>
                                        {messagePsw}
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
                                           onClick={() => setCheckBox((checkBox === 0 ? 1 : 0))}
                                           value={checkBox}
                                           type="checkbox"/>
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
                                <Link to= "/registrazione" className="btn btn-outline-primary w-100 mt-1">Crea il tuo account</Link>
                                <Link to= "/password" className="btn btn-outline-primary w-100 mt-1">Non ricordi più la password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);

};

export default Login;