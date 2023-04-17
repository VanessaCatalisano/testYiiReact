import React from 'react';
import {Link} from "react-router-dom";
import "../css/nav.css"
const Breadcrumb = (props) => {
    function returnNamePath (pathname) {
        switch (pathname) {
            case '/home':
                return "Home";
            case '/password':
                return "/Ricorda password";
            case '/richiestaPassword':
                return "/Richiesta password";
            default:
                return "";
        }
    }
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb  d-none d-sm-flex">
                <Link to= "/" className="link">Home</Link>
                <li className="breadcrumb-item active" aria-current="page">{returnNamePath(props.location)}</li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;