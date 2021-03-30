import React from "react";
import PopularMovieContex from "./contexts/PopularMovieContext";
import VideoContex from "./contexts/VideoContext";
import DetailsContext from "./contexts/DetailsCardContext";
import Layout from "./components/layouts/Layout";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Redirect,useLocation } from "react-router-dom";
import PageNotFound from "./components/Movies/NotFound/PageNotFound";
import DetailsScreen from "./screens/DetailsScreen/DetailsScreen";

const App = () => {

  return (
    <Router>
      <PopularMovieContex>
        <VideoContex>
          <DetailsContext>
            <Layout>
              <Switch>
                <Route exact path='/'>
                  <HomeScreen/>
                </Route>
                <Route exact path="/movie-details/:id">
                  <DetailsScreen/>
                </Route> 
                <Route component={PageNotFound} />
              </Switch>
            </Layout>
          </DetailsContext>
        </VideoContex>
      </PopularMovieContex> 
    </Router>
  );
}

export default App

