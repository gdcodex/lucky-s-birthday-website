import React from "react";
import "./contentpage.css";

function Contentpage() {
  return (
    <div className="contentpage">
      <section className="artist">
        <img src="/images/person1.jpg" alt="artist" />
        <div className="caption">
          <p> {"The Art & the artist ".split('').map((e,i)=><span key={i} className="letter">{e}</span>)}</p>
        <section className="next">Next</section>
        </div>
      </section>
    </div>
  );
}

export default Contentpage;
