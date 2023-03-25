import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        
          <Switch>
          <Route exact path="/">
              <Login setUser={setUser} />
            </Route>
            <Route  path="/home">
              <Home user={user} setUser={setUser} />
            </Route>
            
          </Switch>
       
      </main>
    </>
  );
}

export default App;
