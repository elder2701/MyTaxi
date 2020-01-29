import React from "react";
import Header from "../Header";
import Login from "../Login";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

const Map = () => <p>Map</p>;
const Profile = () => <p>Profile</p>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Header />
        <Switch>
          <Redirect exact path="/" to="/map" />
          <Route exact path="/login" component={Login} />
          <Route path="/map" component={Map} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
