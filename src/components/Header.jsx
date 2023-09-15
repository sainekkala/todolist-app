import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header () {
    return (
        <header>
        <HighlightIcon style={{fontWeight:"500",fontSize:"2rem"}}/>
        <h1>todolist</h1>
        </header>
    )
}

export default Header;