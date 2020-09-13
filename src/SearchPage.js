import React from 'react';
import './SearchPage.css';
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult'
function SearchPage(){
    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <p>62 stays . 26 august to 30 august . 2 guest </p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexible</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and bed</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzm5YOwz16Ebt345TcZRG_GNOeo0CvpgVpLQ&usqp=CAU' location='Dallas,TX'
            title='Private duplex house' description='6 Guests . 3 bedrooms . 3 Toilets . Wifi. Kitchen. Complimentary Breakfast'
            star={4.73} price="$120/night" total='$480 Total'/>
             <SearchResult img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkFZ2_FxhsN1ShwaphMsonaoo1LkjIGQHtAA&usqp=CAU' location='Houston,TX'
            title='Spacious nostalgic house' description='2 Guests . 1 bed . 1 bath . Wifi. Kitchen. Complimentary Breakfast'
            star={4.73} price="$40/night" total='$160 Total'/>
             <SearchResult img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzm5YOwz16Ebt345TcZRG_GNOeo0CvpgVpLQ&usqp=CAU' location='Seattle,WA'
            title='Private duplex house' description='6 Guests . 3 bedrooms . 3 Toilets . Wifi. Kitchen. Complimentary Breakfast'
            star={4.73} price="$120/night" total='$480 Total'/>
        </div>
    )
}
export default SearchPage