import React from "react";
import PopularMovieContex from "./contexts/PopularMovieContext";
import VideoContex from "./contexts/VideoContext";
import DetailsContext from "./contexts/DetailsCardContext";
import Layout from "./components/layouts/Layout";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailsCard from "./components/Details-card/DetailsCard";

const App = () => {

  return (
    <Router>
      
      <PopularMovieContex>
        <VideoContex>
          <Layout>
            <Switch>
              <Route exact path='/'>
                <HomeScreen/>
              </Route>

              <DetailsContext>
                <Route exact path="/movie-details/:id">
                  <DetailsCard/>
                </Route>
              </DetailsContext>

            </Switch>
          </Layout>
        </VideoContex>
      </PopularMovieContex> 
      
    </Router>
  );
}

export default App


