import React, { useState, useEffect } from "react";
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
  const [opac, setopac] = useState(0);
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
      </section>
    </div>
  );
}

export default Content;
