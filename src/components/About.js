import React from "react";

function About({ image, about }) {
    image = (!image) ? "https://via.placeholder.com/215" : image;
  return (
    <aside>
        <img src={ image } alt="blog logo"></img>
        <p>{ about }</p>
    </aside>
  );
}

export default About;