import React, {Component} from 'react';

import '../css/styles.css';


class Header extends Component {

  state = {
    active: 'active',
    keywords: ''
  }

  inputChangeHandler(event){
    const value = event.target.value === '' ? 'active' : 'non-active';
    this.setState({
      active: value,
      keywords: event.target.value
    })
  }

  render() {

    const style = {
      background:"blue"
    }


    return (
      <header className={this.state.active} >
        <div className="logo">Logo</div>
          <input type="text" onChange={this.inputChangeHandler}/>
      </header>
    )

  }

}

export default Header;
