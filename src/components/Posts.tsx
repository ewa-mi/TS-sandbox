import React, { FC, useState, useEffect } from "react";
import { ItemPost, newPostsArray } from "./model";
import Filters from "./Filters";
import data from "../posts.json";
import "../scss/posts.scss";

const Posts: FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [newPosts, setNewPosts] = useState<newPostsArray>([]);

  useEffect(() => {
    let newPostsArray: any = [];

    if (filters.length) {
      newPostsArray = data.filter((post) => {
        let result = true;
        for (let index = 0; index < filters.length; index++) {
          if (!post.type.includes(filters[index])) {
            result = false;
          }
        }
        return result;
      });
    } else {
      newPostsArray = data;
    }

    setNewPosts(newPostsArray);
  }, [filters]);

  return (
    <div>
      <h1>POSTS</h1>
      <div className="filtersArea">
        <p className="applyFiltersText">Apply filters:</p>
        <Filters filters={filters} setFilters={setFilters} />
      </div>
      <div className="container">
        {newPosts.map((item: ItemPost) => (
          <div className="post" key={item.id}>
            <h2>{item.tool}</h2>
            <i className={item.icon}></i>

            <div className="tags-area">
              <>
                {item.type.map((type, index) => (
                  <p className={`tag tag--${type}`} key={index}>
                    {type}
                  </p>
                ))}
              </>
              <div>
                <p className="tag">{item.category}</p>
              </div>
            </div>
            <div className="post-text">
              <p>{item.description}</p>
              <p className="hr">Written in: {item.writtenIn}</p>
              <h3>Alternatives:</h3>
              {item.alternatives.map((alternative, index) => (
                <p key={index} className="alternatives">
                  {alternative}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
