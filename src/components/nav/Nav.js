import React, {Fragment} from 'react';
import {Link} from "@reach/router";

function Nav () {
    return(
        <Fragment>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </Fragment>
    )
}

export default Nav;