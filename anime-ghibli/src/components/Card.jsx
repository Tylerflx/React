import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";

function Card({ id, title, japan_title, image }) {
  return (
    <div className="card">
      <h1 key={id}>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`detail/${id}`}
        >
          {title}
        </Link>
      </h1>
      <div className="card-img">
        <img src={image} />
        <p>{japan_title}</p>
      </div>
    </div>
  );
}

export default Card;
