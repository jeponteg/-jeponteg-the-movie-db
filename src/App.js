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

                <Suspense fallback={
                  <h1>Loading</h1>
                }>
                  <Switch>
                    
                      <Route exact path="/movie-details/:id">
                        <DetailsScreen/>
                      </Route>
                      <Route exact path='/'>
                        <HomeScreen/>
                      </Route> 
                      <Route path=""component={PageNotFound} />
                    
                  </Switch>
              </Suspense>
            </Layout>
          </DetailsContext>
        </VideoContex>
    </PopularMovieContex> 
    </Router>
  );
}

export default App

