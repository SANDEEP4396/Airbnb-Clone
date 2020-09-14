import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

//ES7 snippets to do 'rfce'
function Home(){
    return(
        <div className='home'>
             
           <Banner />
           <div className='home_section'>
               <Card src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" 
               title="Online Experience" description="Unique activities we can do together, led by a world of hosts."/>
               <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
               title="Unique Stays" description="Spaces that are more than just a place to sleep."/>
               <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
               title="Entire Homes" description="Comfortable private places, with room for friends or family."/>
           </div>
           <div className='home_section'>
               <Card src="https://i2.wp.com/thepointsguy.com/wp-content/uploads/2020/05/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1-scaled.jpg?fit=2560%2C1707px&ssl=1"
               title="3 bedroom house in Nevada" description="Superhost with a stunning view of the riverside mountain" price="$200/night" />

               <Card src="https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?fit=2400%2C1600"
               title="Hut House with a lake view in Bay Area" description="Enjoy the amazing sights of bay area" price="$350/night" />

               <Card src="https://mediad.publicbroadcasting.net/p/wunc/files/styles/x_large/public/201905/SanFrancisco_12623927_PrivateRoomApt_LivingRoom.jpg"
               title="Lavish Apartment in Dallas" description="Feel the luxry in a private apartment" price="$270/night" />
           </div>
        </div>
    )
}
export default Home