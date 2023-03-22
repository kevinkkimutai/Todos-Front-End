import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="pt-1">
      <nav className="navbar navbar-expand-sm ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#/"><b>TodoS</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">List</a>
          </li>
           
        </ul>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-primary btn-sm" type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav>
 
      {/* <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div> */}
    </header>
  );
}

export default NavBar;
