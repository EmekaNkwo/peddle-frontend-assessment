import React from "react";
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

                <div className="task_text">
                  <p>
                    Reproduce the coming soon design prototype in either jsx or
                    tsx and css <br />
                    <strong>
                      "https://xd.adobe.com/view/b9ed8245-2809-4b31-a3c4-5c2e76ddb7e8-ecbe/?fullscreen"
                    </strong>
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/github">
              <div className="task_item">
                <h2>Task 2</h2>
                <div className="task_text">
                  <p>
                    To get the most starred Github repos created in the last 30
                    days (relative to 2021-09-13), you'll need to call the
                    following endpoint : <br />
                    <strong>
                      https://api.github.com/search/repositories?q=created:&gt;2021-08-13&sort=stars&order=desc
                      "https://xd.adobe.com/view/b9ed8245-2809-4b31-a3c4-5c2e76ddb7e8-ecbe/?fullscreen"
                    </strong>
                  </p>
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
