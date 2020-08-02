import React, { FC } from "react";
import { ItemPost } from "./model";
import data from "../posts.json";
import "../scss/posts.scss";

const Posts: FC = () => (
  <div>
    <h1>POSTS</h1>
    {data.map((item: ItemPost) => (
      <div className="post" key={item.id}>
        <h2>{item.tool}</h2>
        <i className={item.icon}></i>
        <div className="tags-area">
          <p className="tag">{item.type}</p>
          <p className="tag">{item.category}</p>
        </div>
        <div className="post-text">
          <p>{item.description}</p>
          <p>Written in: {item.writtenIn}</p>
          <hr></hr>
          <h3>Alternatives:</h3>{" "}
          {item.alternatives.map((alternative, index) => (
            <p key={index} className="alternatives">
              {alternative}
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Posts;
