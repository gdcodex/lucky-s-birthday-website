import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import './landing.css'
function Landing() {
    const history = useHistory();
    const [exit, setexit] = useState(false);
    const enter =()=>{
        setexit(true);
        setTimeout(() => {
            history.push('/content');
        }, 1000);
    }
    return (
        <section className={`landing ${exit?"exit":"entry"}`}>
        <img src="/images/beernn.png" alt="beer" className="hat" id="hat1"/>
        <div className="entry-text">
        <p className="title">
            
        {"Happy 22".split('').map((e,i)=><span key={i} className="letter">{e}</span>)} <br/>
        {"Hulk !".split('').map((e,i)=><span key={i} className="letter">{e}</span>)}</p>
        <p className={`enter ${exit?"fill":""}`} onClick={enter}>Let's Celebrate !</p>
        </div>
        <img src="https://www.flaticon.com/svg/static/icons/svg/609/609624.svg" alt="hat" className="balloon"/>
        </section>
    )
}

export default Landing
