import React, { useState } from 'react';
import './Banner.css';
import {Button} from "@material-ui/core";
import Search from './Search'
import { useHistory } from 'react-router-dom';


//ES7 snippets to do 'rfce'
function Banner(){
    const history = useHistory();
    const [showSearch,setShowSearch] = useState (false);
    return(
        <div className='banner'>

            <div className='banner_search'>
                {showSearch && <Search />}
            <Button onClick={()=>setShowSearch(!showSearch)} className='banner_searchButton' variant='outlined'>
                {showSearch  ? "Hide" : "Search Dates"}</Button>
            </div>

            <div className='banner_info'>
               <h1> Get out and stretch out your imagination</h1>
               <h5>Plan a different kind of getaway to uncover the hidden gems around the world.</h5>
               <Button variant='outlined' onClick={() => history.push('/search')}>Explore More</Button>
            </div>
        </div>
    )
}
export default Banner