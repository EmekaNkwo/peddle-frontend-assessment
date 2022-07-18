import axios from "axios";
import React, { useState, useEffect } from "react";
import GitData from "../../components/GitData/GitData";
import "./GitPage.css";

function GitPage() {
  const REPOURL =
    "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc";

  const [Repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading] = useState(true);
  const [repoPerPage] = useState(10);

  const loadRepos = async () => {
    const res = await axios.get(`${REPOURL}&page${currentPage}`);
    // console.log(res);
    setRepos(res.data.items);
  };

  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepo = Repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //changing the created data in Github API to a more readable format
  const createdAt = new Date(Repos.created_at);
  console.log(createdAt);

  // console.log(diff);

  useEffect(() => {
    loadRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <div className="git_page">
        <div className="git_page_container">
          <h1 className="page_title">
            Trending Repos ⭐⭐⭐ in the last 30 Days <br />
            (Relative to 2021-09-13)
          </h1>
          {loading ? (
            <div className="">
              {currentRepo.map((repo, index) => {
                return (
                  <GitData
                    key={index}
                    name={repo.name}
                    image={repo.owner.avatar_url}
                    desc={repo.description}
                    stars={repo.stargazers_count}
                    issues={repo.open_issues_count}
                    sumbitDate={repo.created_at}
                  />
                );
              })}

              <div className="pagination">
                {currentPage > 1 ? (
                  <>
                    <button onClick={() => paginate(currentPage - 1)}>
                      Prev
                    </button>
                    <button onClick={() => paginate(currentPage + 1)}>
                      Next
                    </button>
                  </>
                ) : (
                  <button onClick={() => paginate(currentPage + 1)}>
                    Next
                  </button>
                )}
              </div>
            </div>
          ) : (
            <h1>Loading....</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default GitPage;
