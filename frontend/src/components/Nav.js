import React from 'react';
import {Link} from "react-router-dom";
import "../css/nav.css"
const Nav = () => (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary text-primary col-sm-3 align-items-start pt-sm-3">
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand d-sm-none" href="#">spazio aderenti sgi-italia</a>
        <div className="navbar-collapse collapse pt-3 pt-sm-0" id="navbarNav">
            <ul className="navbar-nav flex-column w-100">
                <li className="nav-item">
                    <Link className="nav-link pt-0"><strong>Aiuto su come registrarsi</strong></Link>

                    <Link className="nav-link pt-0"><strong>Tutorial apertura del Gohonzon</strong></Link>

                    <Link className="nav-link pt-0"><strong>Comunicato Daiseido</strong></Link>
                </li>
                <li className="nav-text badge badge-primary text-left">
                    <h5>Strumenti</h5>
                </li>
                <li className="nav-item">
                    <Link className="nav-link pt-0"><strong>Accedi</strong></Link>
                </li>
                <li className="nav-text badge badge-primary text-left">
                    <h5>Link utili</h5>
                </li>
                <li className="nav-item">
                    <Link className="nav-link pt-0"><strong>Una frase per..</strong></Link>

                    <Link className="nav-link pt-0"><strong>Sito istituzionale</strong></Link>

                    <Link className="nav-link pt-0"><strong>Spazio abbonamenti</strong></Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;