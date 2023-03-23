import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Home({ user }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  if (user) {
     return <div className="container">
     <div className="row">
       <div className="col-md-5 bg-dark pt-1">
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
          <li key={todo.id}>{todo.title}</li>
        ))}
      
       </div>
       </div>
       <div className="col-md-6 offset-md-1 bg-dark pt-1">
       <nav class="navbar pt-0 heads">
       <div className="container-fluid ">
         <h2>TODO DETAILS</h2>
         <div className="d-flex mb-2">
         <Link to="/login"><button className="btn btn-outline-info btn-sm" href="/addtodo" type="submit">Add Todo  ➕</button></Link> 
         </div>
         </div>
         </nav>
      
        <div className="list pt-2">
        {todos.map(todo => (
          <div key={todo.id}>
            Title:{todo.title}
            Description: {todo.description}
          </div>
        ))}
      </div>
   
       </div>
     </div>
     </div>
  
  } else {
    return  (
      <div className="container ">
    <div className="row">
    <div class="col-md-6 offset-md-3 bg-dark pt-1">
      <nav className="navbar heads pt-0 ">
      <div className="container-fluid pt-0 ">
        <h2>TODO LIST</h2>
        <div className="d-flex mb-2">
        <Link to="/login"><button className="btn btn-outline-info btn-sm" >Add Todo ➕</button></Link> 
        </div>
        </div>
        </nav>
        
      <div className="list pt-2">
      {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}

     
      </div>
      </div>
      </div>
      </div>
    )
   
  }
}

export default Home;