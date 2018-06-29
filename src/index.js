import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/PostItem';
import Life from './components/lifecycles';
import Conditional from './components/conditional';
import User from './components/user';


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
               pathname:'/profile'
             }}>Profile</NavLink><br/>
           <NavLink to="/Life">Life</NavLink><br/>
           <NavLink to="/conditional">conditional</NavLink><br/>
           <NavLink to="/user">User</NavLink><br/>
           <hr/>
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/life" component={Life}/>
          <Route path="/conditional" component={Conditional}/>
          <Route path="/user" component={User}/>
          <Route path="/" exact component={Home}/>
      </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
