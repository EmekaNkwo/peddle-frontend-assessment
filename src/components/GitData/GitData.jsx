import React from "react";
import "./GitData.css";

function GitData({ image, name, desc, stars, issues, sumbitDate }) {
  return (
    <>
      <div className="git_data">
        <div className="git_data_container">
          <img src={image} alt="" />

          <div className="repo_details">
            <h2>{name}</h2>
            <p>{desc}</p>
            <div className="repo_extras">
              <div className="repo_buttons">
                <button className="stars">Stars: {stars}</button>
                <button className="issues">Issues: {issues}</button>
              </div>
              <span>
                Submitted {sumbitDate} by <strong>{name}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GitData;
