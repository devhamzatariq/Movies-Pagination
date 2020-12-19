import React, { useState, Fragment } from "react";
import { getMovies } from "./../services/fakeMovieService";
import Pagination from "./pagination";

function Movies() {
  const [movies, setMovies] = useState(getMovies);
  const [page, setPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage);

  const handleDelete = a => {
    const mov = movies.filter(m => m._id !== a._id);
    setMovies(mov);
  };
  const handlePageChange = p => {
    setCurrentPage(p);
  };

  const indexOfLastPost = currentPage * page;
  const indexOfFirstPost = indexOfLastPost - page;
  const currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Fragment>
      {movies.length <= 0 ? (
        <div>There are no movies in the database</div>
      ) : (
        <div style={{ margin: "30px", marginTop: "20px" }}>
          <p>Showing {movies.length} in a database </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {currentMovies.map(movie => (
                <tr key={movie._id}>
                  <th>{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(movie)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemCount={movies.length}
            pageSize={page}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </Fragment>
  );
}

export default Movies;
