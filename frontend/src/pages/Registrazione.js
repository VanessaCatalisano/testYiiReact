import React, {useState} from 'react';
import Header from '../components/Header';
import Nav from "../components/Nav";
import {useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
import qs from "qs";

const Registrazione = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessageAlert, setErrorMessageAlert] = useState([]);
    const [errorMessageNome, setErrorMessageNome] = useState("");
    const [errorMessageCognome, setErrorMessageCognome] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [errorMessageConfermaPassword, setErrorConfermaPassword] = useState("");
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessageConfermaEmail, setErrorConfermaEmail] = useState("");
    const [errorMessageCheckBox, setErrorCheckBox] = useState("");
    const [errorMessageCodiceFedele, seterrorMessageCodiceFedele] = useState("");
    const [nome, setNome] = useState("");
    const [cognome, setCogome] = useState("");
    const [password, setPassword] = useState("");
    const [confermaPassword, setConfermaPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confermaEmail, setConfermaEmail] = useState("");
    const [codiceFedele, setCodiceFedele] = useState("");
    const [checkBox, setCheckBox] = useState(false);

    const requestAPI = async () => {
        try {
            const result = await axios.post(`http://192.168.2.12/newSpazioAderenti/Vanessa/spazioaderenti-react/index.php/site/registrazione`,  qs.stringify({
                RegisterForm : {
                    nome : nome,
                    cognome : cognome,
                    password : password,
                    passwordConferma: confermaPassword,
                    email: email,
                    emailConferma: confermaEmail,
                    codiceMembro: codiceFedele,
                    checkPrivacy: checkBox
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
        setErrorMessageAlert([]);
        switch (event.target.name){
            case "nome":
                setNome(event.target.value);
                setErrorMessageNome("");
                break;
            case "cognome":
                setCogome(event.target.value);
                setErrorMessageCognome("");
                break;
            case "password":
                setPassword(event.target.value);
                setErrorMessagePassword("");
                break;
            case "confermaPassword":
                setConfermaPassword(event.target.value);
                setErrorConfermaPassword("");
                break;
            case "email":
                setEmail(event.target.value);
                setErrorMessageEmail("");
                break;
            case "confermaEmail":
                setConfermaEmail(event.target.value);
                setErrorConfermaEmail("");
                break;
            case "checkBox":
                setErrorCheckBox("");
                if(checkBox === false) setCheckBox(true);
                else setCheckBox(false);
                break;
            case "codiceFedele":
                setCodiceFedele(event.target.value);
                seterrorMessageCodiceFedele("");
                break;
            default:
                break;
        }
    }

    const checkInputRealtime = event =>{
        const regaxCheck = new RegExp(event.target.pattern);
        switch (event.target.name){
            case "nome":
                if(regaxCheck.test(event.target.value) === false){
                    setErrorMessageNome("inserire il proprio nome");
                }else{
                    setErrorMessageNome("");
                }
                break;
            case "cognome":
                if(regaxCheck.test(event.target.value) === false){
                    setErrorMessageCognome("inserire il proprio cognome");
                }else{
                    setErrorMessageCognome("");
                }
                break;
            case "password":
                if(event.target.value === ""){
                    setErrorMessagePassword("indicare una password");
                }else{
                    if(regaxCheck.test(event.target.value) === false){
                        setErrorMessagePassword("la password deve contenere almeno una lettera minuscola, una lettera maiuscola e un numero");
                    }else{
                        setErrorMessagePassword("");
                    }
                }
                break;
            case "confermaPassword":
                if(event.target.value === ""){
                    setErrorConfermaPassword("conferma la  password");
                }else{
                    if(event.target.value !== password){
                        setErrorConfermaPassword("la password e la sua conferma devono essere uguali");
                    }else{
                        setErrorConfermaPassword("");
                    }
                }
                break;
            case "email":
                if(event.target.value === ""){
                    setErrorMessageEmail("indicare un'email");
                }else{
                    if(regaxCheck.test(event.target.value) === false){
                        setErrorMessageEmail("controllare che la mail sia scritta correttamente");
                    }else{
                        setErrorMessageEmail("");
                    }
                }
                break;
            case "confermaEmail":
                if(event.target.value === ""){
                    setErrorConfermaEmail("conferma l'email");
                }else{
                    if(event.target.value !== email){
                        setErrorConfermaEmail("l'email e la sua conferma devono essere uguali");
                    }else{
                        setErrorConfermaEmail("");
                    }
                }
                break;
            case "codiceFedele":
                if(event.target.value === ""){
                    setErrorMessagePassword("inserire il proprio codice fedele");
                }else{
                    if(regaxCheck.test(event.target.value) === false){
                        setErrorMessagePassword("il codice fedele è composto da una parte numerica e due lettere finali, come scritto sul proprio cartellino");
                    }else{
                        setErrorMessagePassword("");
                    }
                }
                break;
            default:
                break;
        }
    }

     async function checkInput() {
        setErrorMessageAlert([]);
        let inputValid = true;
        let alertError = [];
        if(new RegExp("^[a-zA-Z]{1,30}$").test(nome) === false){
            inputValid = false;
            setErrorMessageNome("inserire il proprio nome");
            alertError.push("inserire il proprio nome");
        }
        if(new RegExp("^[a-zA-Z]{1,30}$").test(cognome) === false){
            inputValid = false;
            setErrorMessageCognome("inserire il proprio cognome");
            alertError.push("inserire il proprio cognome");
        }
        if(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,12}$").test(password) === false){
            inputValid = false;
            if(password === ""){
                setErrorMessagePassword("indicare una password");
                alertError.push("indicare una password");
            }else{
                setErrorMessagePassword("la password deve contenere almeno una lettera minuscola, una lettera maiuscola e un numero");
                alertError.push("la password deve contenere almeno una lettera minuscola, una lettera maiuscola e un numero");
            }
        }
        if(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,12}$").test(confermaPassword) === false){
            inputValid = false;
            if(confermaPassword === ""){
                setErrorConfermaPassword("conferma password");
                alertError.push("conferma password");
            }else{
                if(confermaPassword !== password){
                    setErrorConfermaPassword("la password e la sua conferma devono essere uguali");
                    alertError.push("la password e la sua conferma devono essere uguali");
                }
            }
        }
        if(new RegExp("[a-zA-Z0-9_.-]*[@.][a-zA-Z]{2,4}$").test(email) === false){
            inputValid = false;
            if(email === ""){
                setErrorMessageEmail("indicare una email");
                alertError.push("indicare una email");
            }else{
                setErrorMessageEmail("controllare che la mail sia scritta correttamente");
                alertError.push("controllare che la mail sia scritta correttamente");
            }
        }
        if(new RegExp("[a-zA-Z0-9_.-]*[@.][a-zA-Z]{2,4}$").test(email) === false){
            inputValid = false;
            if(confermaEmail === ""){
                setErrorConfermaEmail("conferma email");
                alertError.push("conferma email");
            }else{
                if(confermaEmail !== email){
                    setErrorConfermaPassword("l'email e la sua conferma devono essere uguali");
                    alertError.push("l'email e la sua conferma devono essere uguali");
                }
            }
        }
        if(new RegExp("[0-9]*[a-zA-Z]{2}$").test(codiceFedele) === false){
            inputValid = false;
            if(codiceFedele === ""){
                seterrorMessageCodiceFedele("inserire il proprio codice fedele");
                alertError.push("inserire il proprio codice fedele");
            }else{
                seterrorMessageCodiceFedele("il codice fedele è composto da una parte numerica e due lettere finali, come scritto sul proprio cartellino");
                alertError.push("il codice fedele è composto da una parte numerica e due lettere finali, come scritto sul proprio cartellino");
            }
        }
        if(checkBox === false){
            inputValid = false;
            setErrorCheckBox("è necessario accettare le condizioni del servizio");
            alertError.push("è necessario accettare le condizioni del servizio");
        }
        if(inputValid === true){
            let request = requestAPI();
            console.log(request);
            navigate('/confermaRegistrazione');
        }else{
            setErrorMessageAlert(alertError);
        }
    }

    return (
        <div>
            <Header/>
            <div className="row h-100 align-items-start bg-secondary" id="content">
                <Nav/>
                <div className="bg-secondary col-sm-9 p-0 p-sm-3 h-100">
                    <Breadcrumb location = {location.pathname}/>
                    <div className="card align-top">
                        <div className="card-header">
                            <h2>Registrazione</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <p>
                                    Per registrarsi allo spazio aderenti è necessario essere membro dell'Istituto e compilare il form seguente:
                                </p>
                                <div className="alert alert-danger" id="ricordaPassword-form_es_" style={{display: errorMessageAlert.length > 0 ? 'block' : 'none'}}>
                                    <h4>Errore nei dati inseriti:</h4>
                                    <ul>
                                        {errorMessageAlert.map(errorMessageAlert => (
                                            <li key={errorMessageAlert}>{errorMessageAlert}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label  font-weight-bold">
                                        Nome
                                    </label>
                                    <input className="form-control"
                                           name="nome"
                                           id="nome"
                                           type="text"
                                           pattern="^[a-zA-Z]{1,30}$"
                                           onChange={handleChange}
                                           onBlur={checkInputRealtime}
                                           value={nome}
                                    />
                                    <p className="m-1"></p>
                                    <div className="border border-danger rounded small text-danger p-2 col-12"
                                         id="RegistraNome" style={{display:errorMessageNome !== ""? 'block':'none'}}>
                                        {errorMessageNome}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label  font-weight-bold">
                                        Cognome
                                    </label>
                                    <input className="form-control"
                                           name="cognome"
                                           id="cognome"
                                           type="text"
                                           pattern="^[a-zA-Z]{1,30}$"
                                           onChange={handleChange}
                                           onBlur={checkInputRealtime}
                                           value={cognome}
                                    />
                                    <p className="m-1"></p>
                                    <div className="border border-danger rounded small text-danger p-2 col-12"
                                         id="RegistraCognome" style={{display:errorMessageCognome !== ""? 'block':'none'}}>
                                        {errorMessageCognome}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label  font-weight-bold">
                                        la password che vuoi usare per accedere (tra 8 e 12 caratteri, almeno una lettera minuscola, una lettera maiuscola ed un numero)
                                    </label>
                                    <input className="form-control"
                                           name="password"
                                           id="password"
                                           type="password"
                                           pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$"
                                           onChange={handleChange}
                                           onBlur={checkInputRealtime}
                                           value={password}
                                    />
                                    <p className="m-1"></p>
                                    <div className="border border-danger rounded small text-danger p-2 col-12"
                                         id="RegistraPsw" style={{display:errorMessagePassword !== ""? 'block':'none'}}>
                                        {errorMessagePassword}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label  font-weight-bold">
                                        Conferma la password
                                    </label>
                                    <input className="form-control"
                                           name="confermaPassword"
                                           id="confermaPassword"
                                           type="password"
                                           pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$"
                                           onChange={handleChange}
                                           onBlur={checkInputRealtime}
                                           value={confermaPassword}
                                    />
                                    <p className="m-1"></p>
                                    <div className="border border-danger rounded small text-danger p-2 col-12"
                                         id="RegistraConfermaPassword" style={{display:errorMessageConfermaPassword !== ""? 'block':'none'}}>
                                        {errorMessageConfermaPassword}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label  font-weight-bold">
                                        Email: questo è l'indirizzo di posta elettronica dove ti verranno comunicati i dati per l'accesso
                                    </label>
                                    <input className="form-control"
                                           name="email"
                                           id="email"
                                           type="email"
                                           pattern="[a-zA-Z0-9_.-]*[@.][a-zA-Z]{2,4}$"
                                           onChange={handleChange}
                                           onBlur={checkInputRealtime}
                                           value={email}
                                    />
                                    <p className="m-1"></p>
                                    <div className="border border-danger rounded small text-danger p-2 col-12"
                                         id="RegistraEmail" style={{display:errorMessageEmail !== ""? 'block':'none'}}>
                                        {errorMessageEmail}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label  font-weight-bold">
                                        Conferma email
                                    </label>
                                    <input className="form-control"
                                           name="confermaEmail"
                                           id="confermaEmail"
                                           type="email"
                                           pattern="[a-zA-Z0-9_.-]*[@.][a-zA-Z]{2,4}$"
                                           onChange={handleChange}
                                           onBlur={checkInputRealtime}
                                           value={confermaEmail}
                                    />
                                    <p className="m-1"></p>
                                    <div className="border border-danger rounded small text-danger p-2 col-12"
                                         id="RegistraConfermaEmail" style={{display:errorMessageConfermaEmail !== ""? 'block':'none'}}>
                                        {errorMessageConfermaEmail}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label  font-weight-bold">
                                        il codice fedele è il codice alfanumerico presente sul cartellino dell'Istituto
                                    </label>
                                    <input className="form-control"
                                           name="codiceFedele"
                                           id="codiceFedele"
                                           type="text"
                                           pattern="[0-9]*[a-zA-Z]{2}$"
                                           onChange={handleChange}
                                           onBlur={checkInputRealtime}
                                           value={codiceFedele}
                                    />
                                    <p className="m-1"></p>
                                    <div className="border border-danger rounded small text-danger p-2 col-12"
                                         id="RegistraCF" style={{display:errorMessageCodiceFedele !== ""? 'block':'none'}}>
                                        {errorMessageCodiceFedele}
                                    </div>
                                </div>
                                <div className="form-group success">

                                    <input
                                        id="ytLoginFormAde_rememberMe"
                                        type="hidden"
                                        value="0"
                                        name="LoginFormAde[rememberMe]"/>
                                    <input className=""
                                           name="checkBox"
                                           id="checkBox"
                                           onClick={handleChange}
                                           value={checkBox}
                                           type="checkbox"/>
                                    <label htmlFor="LoginFormAde_rememberMe">
                                        Contrassegnando questa casella dichiari di aver preso visione dell'informativa sulla <a href="https://privacy.sgi-italia.org/" target="IBISGprivacy">privacy</a>
                                    </label>
                                    <p className="m-1"></p>
                                    <div className="border border-danger rounded small text-danger p-2 col-12"
                                         id="RegistracheckBox" style={{display:errorMessageCheckBox !== ""? 'block':'none'}}>
                                        {errorMessageCheckBox}
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <button className="btn btn-primary w-100" onClick={() => checkInput()} >
                                        <strong>Procedi</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registrazione;