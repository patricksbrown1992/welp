import React, {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
// import google from 'google-map-react'


const splashForm = () => {
    const [splashSearch, updateSplashSearch] = useState(() => '')
    let currentLocation = 'Not found'
    function changeSplash(e){
        e.preventDefault();
        updateSplashSearch(e.target.value); 
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position){
            // let geocoder  = new google.maps.Geocoder(); 
           
            // var location  = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            // currentLocation = position
        })
       
    }, [])
   


    return (
        <div className = 'splash-form'> 
            <div className='row splash-nav'>
                <div className ='col splash-nav-col'>
                    <Link to='/write_review'>Write A Review</Link>
                    <Link to='/events'>Events</Link>
                    
                </div>
                <div className="col splash-nav-col">
             
                    <a href="https://patricksbrown1992.github.io/portfolio/" target="_blank">Portfolio</a>
                    <a href="https://www.linkedin.com/in/patricksbrown1992/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/patricksbrown1992" target="_blank">Github</a>

                   
                </div>
                <div className='col splash-nav-col splash-links'>
                    <Link to='/login'>Log in</Link>
                    <div className='sign-up-link'><Link to='/signup'>Sign up</Link></div>
                </div>
                
        

            </div>
            <div className='splash-body col'>
                <div className="splash-logo">
                    <h1 className='title'>Welp</h1>
                    <img className='logo-img' src={window.logo} alt="" />
                </div>
                <div className="splash-search row">
                    <input 
                        className = 'col-md-6'
                        type="text" 
                        name="splash-search" 
                        onChange={changeSplash} 
                        value={splashSearch}
                        placeholder='plumbers, delivery, takeout...'
                    />
                    {/* <div >{currentLocation}</div> */}
                </div>
                
                
            </div>
        
        
        </div>
      
    )
    
    
};

export default splashForm;