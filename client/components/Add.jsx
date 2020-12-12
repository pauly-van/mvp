import React from 'react';

class Add extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        input: ''
      }
  }

  handleChange(event){
      this.setState({
        input: event.target.value
      });
  }

  grabSteam(){
      this.props.searchAPI(this.state.input);
  } 

  showGamesList(){
      this.props.getGamesList();
  }

  render(){
      return(
          <div>
              <button onClick={this.showGamesList.bind(this)}>Show Games</button>
              <h5>Add games to follow!</h5>
              Game ID:
                <input onChange={this.handleChange.bind(this)}></input>
                <button onClick={this.grabSteam.bind(this)}>ADD!</button>
          </div>
      )
  }
}

export default Add;