import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/PostItem';


// meawesomeapp.com/post

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink><br/>
          <NavLink
             to="Posts"
             activeStyle={{color:'red'}}
             activeClassName="selected"
             >Posts</NavLink><br/>
          <NavLink to={{
              pathname:'/profile',
            }}>Profile</NavLink><br/><hr/>
        </header>
        <Route path="/" component={Home}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/posts/:id/:username" component={PostItem}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
