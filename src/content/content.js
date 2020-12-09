import React, { useEffect } from "react";
import {useHistory} from 'react-router-dom'
import "./content.css";
const gallery = [
  "food.jpg",
  "holi.jpg",
  "feeding.jpg",
  "aesthetic.jpg",
  "fall.jpg",
  "jewel.jpg",
  "sleepy.jpg",
];
function Content() {
    const history = useHistory();
  useEffect(() => {
      let i=0;
        const interval= setInterval(() => {
            if(i<6){
                if(document.querySelector(`#intro${i}`) ) document.querySelector(`#intro${i}`).style.opacity = `1`;
            }
            i++;
        }, 300);
        setTimeout(() => {
            document.querySelectorAll(`.intro-pictures`).forEach(v=>v.style.opacity = `0`)
        }, 3000);
       const push= setTimeout(() => {
            history.push("/contentpage")
        }, 5000);
        if(i===5){
            clearInterval(interval)
        }
        return () => {
            clearInterval(push);
        };
  }, []);
  return (
    <div className="content-container">
    <section className="bigger">
      {gallery.map((e, i) => (
        <img
          key={i}
          className="intro-pictures"
          id={`intro${i}`}
          src={`/images/${e}`}
        />
      ))}
    </section>
   
    </div>
  );
}

export default Content;
