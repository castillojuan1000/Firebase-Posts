import React from 'react';
import { render } from 'react-dom';
import './index.scss';

import Application from './components/Application';
import PostsProvider from './providers/PostsProvider'
import UsersProvider from './providers/UsersProvider'
import { BrowserRouter as Router } from 'react-router-dom'


render(
  <Router>

    <UsersProvider>
      <PostsProvider>
        <Application />
      </PostsProvider>
    </UsersProvider>
  </Router>
  , document.getElementById('root'));
