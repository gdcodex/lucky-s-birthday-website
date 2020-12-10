import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './welcome.css'

function Welcome() {
    const history = useHistory();
    useEffect(()=>{
        setTimeout(() => {
            history.push('/landing')
        }, 6000);
    },[history])
    return (
        <div className="welcome-container">
       <p className="welcome">
           Welcome Lucky!
       </p>
       <audio src="/audio/oye1.mp3" autoPlay style={{display:"none"}}></audio>
       </div>
    )
}

export default Welcome
