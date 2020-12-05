import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navigation from './Components/Navigation/Navigation';
import LoginPage from './Components/LoginPage/LoginPage';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import MovieGrid from './Components/MovieGrid/MovieGrid';
import { BrowserRouter, Route, Router, Switch, useLocation } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { useState } from 'react';
import { createContext } from 'react';
import UserProfile from './Components/UserProfile/UserProfile';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import NotFound from './Components/NotFound/NotFound';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <>
      {/* <div id="preloader">
        <img class="logo" src="../images/logo1.png" alt="" width="119" height="58" />
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div> */}
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/movie-grid' component={MovieGrid} />
            <Route exact path='/movie-details/:Title' component={MovieDetails} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignUp} />
            <PrivateRoute exact path='/userprofile' component={UserProfile} />
            <Route exact path='/comingsoon' component={ComingSoon} />
            <Route path='*' component={NotFound} />
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
