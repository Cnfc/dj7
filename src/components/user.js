import React, {Component} from 'react';
import UserTemplate from './user_template';

import PropTypes from 'prop-types'

class User extends Component {

  state = {
    name:'Grancis',
    lastname: 'Jones',
    age: 25,
    hobbies: ['run', 'jump']
  }

  render() {
    return (
      <div>
        <UserTemplate {...this.state}/>
      </div>
    );
  }
}

export default User;
