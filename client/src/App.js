import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//react/react router imports, ans well as all the component imports


//main body of the react app (gets rendered in index)
function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* this handles our routing, sends the right page based off path */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
