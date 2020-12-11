import React from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add.jsx';
import Follow from './components/Follow.jsx';
import $ from 'jquery';

class App extends React.Component{
    constructor(props){
        super(props),
        this.state = {
          titles: ['test1', 'test2']
        }
    }

    searchAPI(title){
      // have to figure out steam connection
      console.log(title);
    }

    render(){
        return (
        <div>
          <Follow titles={this.state.titles}></Follow>
          <Add searchAPI={this.searchAPI.bind(this)}></Add>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

