import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Home({ user }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  
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
      <li className="pt-3 l1">Create an API</li>
      <li className="pt-3 l1">Create an API</li>
      <li className="pt-3 l1">Create an API</li>
      <li className="pt-3 l1">Create an API</li>
      <li className="pt-3 l1">Create an API</li>
      <li className="pt-3 l1">Create an API</li>
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
      <div className="card ms-1 mb-1" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 clclassNameass="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary btn-sm">Edit Todos</button>
    <button  className="btn btn-danger btn-sm">Delete Todo</button>
  </div>
</div>

<div className="pt-0">
      <div className="card ms-1 mb-1" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 clclassNameass="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary btn-sm">Edit Todos</button>
    <button  className="btn btn-danger btn-sm">Delete Todo</button>
  </div>
</div>
</div>

<div className="pt-2">
      <div className="card ms-1  mb-1" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 clclassNameass="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary btn-sm">Edit Todos</button>
    <button  className="btn btn-danger btn-sm">Delete Todo</button>
  </div>
</div>
</div>

<div className="pt-2">
      <div className="card ms-1  mb-1" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 clclassNameass="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary btn-sm">Edit Todos</button>
    <button  className="btn btn-danger btn-sm">Delete Todo</button>
  </div>
</div>
</div>

<div className="pt-2">
      <div className="card ms-1  mb-1" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 clclassNameass="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary btn-sm">Edit Todos</button>
    <button  className="btn btn-danger btn-sm">Delete Todo</button>
  </div>
</div>
</div>

<div className="pt-2">
      <div className="card ms-1  mb-1" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 clclassNameass="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary btn-sm">Edit Todos</button>
    <button  className="btn btn-danger btn-sm">Delete Todo</button>
  </div>
</div>
</div>
    
     
      </div>
   
       </div>
     </div>
     </div>
    )
  


   
  
}

export default Home;