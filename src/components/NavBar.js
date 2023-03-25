import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("http://localhost:3000/users/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="pt-1">
      <div>
      
          <>
      <nav className="navbar navbar-expand-sm ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">📚 <b>TodoS</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            
              {/* <a className="nav-link " aria-current="page" href="/">Home</a>*/}
             <Link className="nav-link " to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/">Home</Link>
          </li>
           
        </ul>
        <div className="d-flex">
        {user ? (
        <>
         <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link me-2" href="#/">{user.username}!</a>
  </li>
  <li class="nav-item pt-1">
      <button className="btn btn-outline-danger btn-sm" onClick={handleLogoutClick}>Logout</button>
      </li>
      </ul>
        </>
        ) : (
      <>

  <div class="nav-item pt-0">
  <Link to="/login"><button className="btn btn-outline-info btn-sm " href="login" type="submit">Login</button></Link> 
  </div>
      </>
        )}
        </div>
        
      </div>
    </div>
  </nav>
  </>

   </div>
    </header>
          /* <div>
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
      </div> */
  );
}

export default NavBar;
