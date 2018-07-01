import React from 'react'
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
  console.log(props);

    return (
      <div>
        template
      </div>
    );
};

UserTemplate.propTypes = {
  name:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  lastname:PropTypes.string,
  age:PropTypes.number,
  hobbies:PropTypes.arrayOf(PropTypes.string),
}


export default UserTemplate;
