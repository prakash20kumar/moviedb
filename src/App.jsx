import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import  Home from "./components/home/Home";
import  MovieDetails  from "./components/movieDetails/MovieDetails";

 function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </main>
  );
}

export default App;
