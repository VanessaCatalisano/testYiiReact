import React, {useState} from 'react';
import Header from '../components/Header';
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";
import {useLocation, useNavigate} from "react-router-dom";
import "../css/ricordaPassword.css";
import axios from "axios";
import qs from "qs";

const RicordaPassword = () => {

    /*
   * STATE OF VARIABLE TO LOGIN PAGE
   */
    const [email, setEmail] = useState('');
    const [noEmail, setNoEmail] = useState(false);
    const [noEmailAlert, setNoEmailAlert] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState('inserire la propria email')

    const requestAPI = async () => {
        try {
            const result = await axios.post(`http://192.168.2.12/newSpazioAderenti/Vanessa/spazioaderenti-react/index.php/siteTest/password`,  qs.stringify({
                RicordaPasswordTestForm : {
                    email : email,
                }
            }));
            if(result) {
                return result.data;
            }
        } catch (err) {
            console.log(err);
        }
    };

    async function renderPage() {
        if(email === ""){
            setMessage("inserire la propria email");
            setNoEmail(true);
            setNoEmailAlert(true);
        }else{
            const checkRegax = new RegExp('[a-zA-Z0-9_.-]*[@.][a-zA-Z]{2,4}$');
            if(checkRegax.test(email)){
                const request = await requestAPI();
                navigate('/richiestaPassword', {state:{messaggioConferma:request}});
            }
            setMessage("controlla che l'email sia stata scritta correttamente");
            setNoEmail(true);
            setNoEmailAlert(true);
        }

    }
    const handleChange = event => {
        setEmail(event.target.value);
        setNoEmail(false);
        setNoEmailAlert(false);
    };

    function checkEmail() {
        setNoEmailAlert(false);
        if(email === ""){
            setMessage("inserire la propria email");
            setNoEmail(true);
        }else{
            const checkRegax = new RegExp('[a-zA-Z0-9_.-]*[@.][a-zA-Z]{2,4}$');
            if(checkRegax.test(email)){
                setNoEmail(false);
            }else{
                setMessage("controlla che l'email sia stata scritta correttamente");
                setNoEmail(true);
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
                <Breadcrumb location = {location.pathname}/>
                <div className="card align-top">
                    <div className="card-header">
                        <h2>Non ricordi più la password?</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <p>
                                Per poter recuperare i dati del tuo account è necessario inserire la mail con la quale ti sei registrato.
                            </p>
                            <div className="alert alert-danger" id="ricordaPassword-form_es_" style={{display: noEmailAlert === true ? 'block' : 'none'}}>
                                <h4>Errore nei dati inseriti:</h4>
                                <ul>
                                    <li>{message}</li>
                                </ul>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label  font-weight-bold">
                                    questa è la mail con la quale ti sei registrato
                                </label>
                                <input className="form-control"
                                    name="email"
                                    id="email"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={checkEmail}
                                    value={email}
                                />
                                <p className="m-1"></p>
                                <div className="border border-danger rounded small text-danger p-2 col-12"
                                     id="RicordaPasswordForm_email_em_" style={{display: noEmail === true ? 'block' : 'none'}}>
                                    {message}
                                </div>

                            </div>
                            <div className="form-group row">
                                <button className="btn btn-primary w-100" onClick={() => renderPage()}><strong>Procedi</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default RicordaPassword;