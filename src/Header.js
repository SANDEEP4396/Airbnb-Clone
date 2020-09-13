import React from 'react';
import './Header.css';
import SeachIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import {Link} from "react-router-dom";

//ES7 snippets to do 'rfce'
function Header(){
    return(
        <div className='header'>
            <Link to="/">
           <img className="header_icon" src="https://www.zilliondesigns.com/blog/wp-content/uploads/Airbnb-Logo-Contest.png" 
           alt=""/></Link>
           <div className="header_center">
               <input type="text" />
               <SeachIcon />
           </div>

           <div className="header_right">
               <p>Become a host</p>
               <LanguageIcon />
               <ExpandMoreIcon />
               <Avatar />
           </div>
        </div>
    )
}
export default Header