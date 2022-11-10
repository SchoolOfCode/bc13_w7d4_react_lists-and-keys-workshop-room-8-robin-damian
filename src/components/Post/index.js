import React from "react";

import "./index.css";

function Post({ title, date, author, text, highlights, image }) {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <h2>{author}</h2>
      <p>{text}</p>
      {highlights.map((highlight, index) => {
        return <li key={index}>{highlight}</li>;
      })}
      <img src={image.link} alt={image.alt} />
    </article>
  );
}

export default Post;
