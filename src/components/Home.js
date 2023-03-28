import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Home({ user, setUser }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/users/${user.id}/todos`)
        .then(response => response.json())
        .then(data => setTodos(data.data));
    }
  }, [user]);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 bg-dark pt-1">
          <nav className="navbar heads pt-0 ">
            <div className="container-fluid pt-0 ">
              <h2>TODO LIST</h2>
              <div className="d-flex mb-2">
                <Link to="/login"><button className="btn btn-outline-info btn-sm" type="submit">Add Todo ➕</button></Link>
              </div>
            </div>
          </nav>
          <div className="list pt-2">
            {todos.map(todo => (
              <li className='pt-3 l1' key={todo.id}>{todo.title}</li>
            ))}
          </div>
        </div>
        <div className="col-md-7 offset-md-1 bg-dark pt-1">
          <nav className="navbar pt-0 heads">
            <div className="container-fluid ">
              <h2>TODO DETAILS</h2>
              <div className="d-flex mb-2">
                <Link to="/login"><button className="btn btn-outline-info btn-sm" href="/addtodo" type="submit">Add Todo  ➕</button></Link>
              </div>
            </div>
          </nav>
          <div className="pt-2">
            {todos.map(todo => (
              <div className="card ms-1 mb-1" style={{width: "18rem"}} >
                <div className="card-body">
                  <h5 className="card-title" key={todos.title}>{todo.title}</h5>
                  <p className="card-text">{todo.description}</p>
                  <button className="btn btn-primary btn-sm">Edit Todos</button>
                  <button  className="btn btn-danger btn-sm">Delete Todo</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;