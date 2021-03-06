import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import Compose from "./views/Compose";
import Details from "./views/Details";
import Admin from "./views/Admin";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Register from "./views/Register";

const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/newblog">
        <Compose />
        </Route>
        <Route exact path="/:id/blogdetails">
          <Details />
          </Route>
          <Route exact path="/:id/blogadmin">
          <Admin />
          </Route>
          <Route exact path="/login">
          <Login />
          </Route>
          <Route exact path="/profile">
          <Profile />
          </Route>
          <Route exact path="/register">
          <Register />
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
