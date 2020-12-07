import React,{useState} from 'react'
import './l.css'
function Landing() {
    const [exit, setexit] = useState(false);
    return (
        <section className={`landing ${exit?"exit":""}`}>
        <img src="/images/beernn.png" alt="beer" className="hat" id="hat1"/>
        <div className="entry-text">
        <p className="title">
            
        {"Happy 22".split('').map((e,i)=><span key={i} className="letter">{e}</span>)} <br/>
        {"Hulk !".split('').map((e,i)=><span key={i} className="letter">{e}</span>)}</p>
        <p className="enter" onClick={()=>setexit(true)}>Let's Celebrate !</p>
        </div>
        <img src="https://www.flaticon.com/svg/static/icons/svg/609/609624.svg" alt="hat" className="balloon"/>
        </section>
    )
}

export default Landing
