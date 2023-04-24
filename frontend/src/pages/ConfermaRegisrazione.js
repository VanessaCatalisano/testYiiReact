import React from 'react';
import Header from '../components/Header';
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";
import {useLocation} from "react-router-dom";
import "../css/ricordaPassword.css";

const ConfermaRegistrazione = (props) => {
    const location = useLocation();
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
                            <p>&Egrave; stata inviata una mail in risposta alla tua richiesta.</p>
                            <p>Controlla la tua casella di posta elettronica.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default ConfermaRegistrazione;