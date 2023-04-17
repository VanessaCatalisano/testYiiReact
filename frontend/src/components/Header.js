import React from 'react';
import "../css/header.css"
const Header = () => (
    <div className="row bg-primary text-secondary justify-content-between align-items-end d-print-none">
        <div className="col">
            <span className="d-none d-sm-block text-warning"><h2>spazio aderenti sgi-italia</h2></span>
        </div>

        <img src="http://192.168.2.12/aderenti/images/header.png" className="img-fluid" alt="spazio aderenti"/>
    </div>
);

export default Header;