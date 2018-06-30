import React from 'react';
import userHoc from '../hoc/userHoc';

const User = () => {
  return (
    <div>
      user 1
    </div>
  )
}
const User2 = () => {
  return (
    <div>
      user 2
    </div>
  )
}

export default userHoc(User, User2, 'Hellll');
