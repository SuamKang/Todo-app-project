import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return(
        <>
            <Link to='/'></Link>
            <Link to='/Yesterday'></Link>
            <Link to='/Quotes'></Link>
        </>
    );
};

export default Sidebar;