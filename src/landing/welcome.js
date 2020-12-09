import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './welcome.css'

function Welcome() {
    const history = useHistory();
    useEffect(()=>{
        setTimeout(() => {
            history.push('/landing')
        }, 4000);
    },[history])
    return (
        <div className="welcome-container">
       <p className="welcome">
           Welcome Lucky!
       </p>
       </div>
    )
}

export default Welcome
