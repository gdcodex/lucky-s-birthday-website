import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const [opac, setopac] = useState(0);
  // useEffect(() => {
  //     let i=0;
  //       const interval= setInterval(() => {
  //           if(i<6){
  //               if(document.querySelector(`#intro${i}`) ) document.querySelector(`#intro${i}`).style.opacity = `1`;
  //           }
  //           i++;
  //       }, 300);
  //       setTimeout(() => {
  //           document.querySelectorAll(`.intro-pictures`).forEach(v=>v.style.opacity = `0`)
  //       }, 3000);
  //      const push= setTimeout(() => {
  //           history.push("/contentpage")
  //       }, 5000);
  //       if(i===5){
  //           clearInterval(interval)
  //       }
  //       return () => {
  //           clearInterval(push);
  //       };
  // }, [history]);
  // useEffect(() => {
  //   let interval= setInterval(() => {
  //     setopac((p) => {
  //       if (p === gallery.length) return 0;
  //       return p + 1;
  //     });
  //   }, 3500);
  //   return ()=>{
  //     clearInterval(interval);
  //   }
  // }, []);
  return (
    <div className="content-container">
      <section className="bigger">
        {gallery.map((e, i) => (
          <img
            key={i}
            className={`intro-pictures ${opac===i ? "opac" : ""}`}
            id={`intro${i}`}
            alt="lucky"
            src={`/images/${e}`}
          />
        ))}
        <audio
          src="/audio/oye2.mp3"
          autoPlay
          style={{ display: "none" }}
        ></audio>
      </section>
    </div>
  );
}

export default Content;
