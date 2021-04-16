import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
//import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    
      <>
       <Router> 
         <Navbar />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>
      </>
    
  );
}

export default App;