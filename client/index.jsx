import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props),
        this.state = {

        }
    }
    render(){
        return(<div>
          <h1>Steam User Activity</h1>
          <UserList></UserList>
          <AddUser></AddUser>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

