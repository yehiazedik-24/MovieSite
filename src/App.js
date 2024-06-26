import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Companents/Header/Header.jsx';
import View from './Companents/View/View.jsx';
import ShowRest from './Companents/ShowRest/ShowRest.jsx';
import TVShowsList from './Companents/TVShowsList/TVShowsList.jsx';
import TVShowsLists from './Companents/TVShowsLists/TVShowsLists.jsx';
import Products from './Companents/Products/Products.jsx';
import Viewone from './Companents/Products/Viewone.jsx';
import MovieDetails from './Companents/MovieDetails/MovieDetails.jsx';
import TVShowDetails from './Companents/TVShowDetails/TVShowDetails.jsx';
import Wellcome from './Companents/Wellcome/Wellcome.jsx';
import UserForm from './Companents/UserForm/UserForm.jsx';
import LoginForm from './Companents/LoginForm/LoginForm.jsx';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Wellcome />} />
            <Route path="/home" element={<><View /></>} />
           
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tv-shows" element={<TVShowsLists />} />
            <Route path="/tv/:id" element={<TVShowDetails />} />
            <Route path="/userfrom" element={<UserForm />} />
            <Route path="/login" element={<LoginForm />} />
           
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
