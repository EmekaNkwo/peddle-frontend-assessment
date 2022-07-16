import React from "react";
import TASKIMG1 from "../../assets/Screenshot (3).png";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <h1 className="home_title">Peddle Frontend Coding Challenge</h1>
          <div className="tasks">
            <Link to="/coming-soon">
              <div className="task_item">
                <h2>Task 1</h2>
                <div className="task_img">
                  <img src={TASKIMG1} alt="I-am-here" />
                </div>
                <div className="task_text">
                  <p>Lorem ipsum dolor sit amet consectetur ad</p>
                </div>
              </div>
            </Link>
            <Link to="/github">
              <div className="task_item">
                <h2>Task 2</h2>
                <div className="task_img">
                  <img src={TASKIMG1} alt="I-am-here" />
                </div>
                <div className="task_text">
                  <p>Lorem ipsum dolor sit amet consectetur ad</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
