import React, { useEffect, useState } from "react";
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
//   useEffect(() => {
//     gallery.map((e, i) => {
//       document.querySelector(`#intro${i}`).style.left = `${i * 12}vw`;
//     });
//   }, []);
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
