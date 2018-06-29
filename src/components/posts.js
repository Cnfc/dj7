import React from 'react';
import {Link} from 'react-router-dom';


const Posts = () => {

  return (
    <div>
      <Link to="/posts/1">Posts</Link><br/>
      <Link to="/posts/2">Posts</Link><br/>
      <Link to="/posts/3">Posts</Link>
    </div>
  )
}


export default Posts;
