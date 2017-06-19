import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Home from './Home.jsx';
import About from './About.jsx';
import Error404 from './Error404.jsx';
import Profile from './Profile.jsx';
import Header from '../../shared/components/Header.jsx'

function Pages() {
  return (
    <main role="application">
      <Header/>

      <Match
        pattern="/"
        exactly
        component={Home}
      />

      <Match
        pattern="/user/:id"
        exactly
        component={Profile}
      />

      <Miss
        component={Error404}
      />

    </main>
  );

}

export default Pages;
