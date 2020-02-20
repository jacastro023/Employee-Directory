import React from "react";
import Search from "./Search";

function Nav(props) {
    return (
        <nav className="navbar" style={{justifyContent: "center"}}>
            <div className="search-area col-4">
                <Search {...props} />
            </div>
        </nav>
    )
};

export default Nav;