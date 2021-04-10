import React,{ Suspense, lazy } from "react";
import PopularMovieContex from "./contexts/PopularMovieContext";
import VideoContex from "./contexts/VideoContext";
import DetailsContext from "./contexts/DetailsCardContext";
import Layout from "./components/layouts/Layout";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import PageNotFound from "./components/Movies/NotFound/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const DetailsScreen =lazy(() => import ('./screens/DetailsScreen/DetailsScreen'));

const App = () => {

  return (
    <Router>
      <PopularMovieContex>
        <VideoContex>
          <DetailsContext>
            <Layout>
              <Switch>
                <Suspense fallback={
                    <h1>Loading</h1>
                  }>
                  <Route exact path='/'>
                    <HomeScreen/>
                  </Route> 
                  <Route exact path="/movie-details/:id">
                    <DetailsScreen/>
                  </Route>
                </Suspense>   
                <Route path=""component={PageNotFound} />
              </Switch>
            </Layout>
          </DetailsContext>
        </VideoContex>
    </PopularMovieContex> 
    </Router>
  );
}

export default App

