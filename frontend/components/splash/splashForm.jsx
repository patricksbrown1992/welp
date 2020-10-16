import React, {useState} from 'react';
import {Link } from 'react-router-dom';



const splashForm = () => {
    const [splashSearch, updateSplashSearch] = useState(() => '')

    function changeSplash(e){
        e.preventDefault();
        updateSplashSearch(e.target.value); 
    }

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
            <div className='splash-body'>
                <div className="splash-logo">
                    <h1 className='title'>Welp</h1>
                    <img src={window.logo} alt="" />
                </div>
                <div className="splash-search">
                    <input 
                        type="text" 
                        name="splash-search" 
                        onChange={changeSplash} 
                        value={splashSearch}
                        placeholder='plumbers, delivery, takeout...'
                    />
                </div>
            </div>
        
        
        </div>
      
    )
    
    
};

export default splashForm;