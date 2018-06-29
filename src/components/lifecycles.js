import React, {PureComponent} from 'react';

class Life extends PureComponent {

    state = {
      title: 'Life cycles'
    }
    // componentDidMount(){
    //   console.log('5 After render');
    //   document.querySelector('h3').style.color = "red"
    // }
    //
    // componentWillMount(){
    //   console.log('3 before render')
    // }
    // componentWillUpdate(){
    //   console.log('Before UPDATE');
    // }
    // componentDidUpdate(){
    //   console.log('AFTER UPDATE');
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //   if (nextState.title === this.state.title) {
    //     return false
    //   }
    //   return true;
    // }


    render(){
      console.log('RENDER');
      return (
        <div>
          <h3>{this.state.title}</h3>
          <div onClick={
            () => this.setState({title:'something else'})}>
            Click to Change
          </div>
        </div>
      )
    }


}


export default Life;
