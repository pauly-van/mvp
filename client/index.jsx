import React from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add.jsx';
import Follow from './components/Follow.jsx';
import $ from 'jquery';
import { set } from 'mongoose';

class App extends React.Component{
    constructor(props){
        super(props),
        this.state = {
          titles: []
        }
    }

    componentDidMount(){
      this.refreshGames();
    }

    searchAPI(title){
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/',
        data: title
      })
    }

    refreshGames(){
      $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/refresh',
      })
      .done((res, err)=>{
          let games = [];
          res.forEach(game=>{
            let singGame = [game.appId, game.title, game.news, game.date];
            games.push(singGame);
            this.setState({
              titles: games      
            })
          })
      })
    }

    getGamesList(){
      $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/gameList'
      })
      .done((res, err)=>{
        console.log(res);
      })
    }

    deleteItem(appId){
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/deleteItem',
        data: appId
      })
    }

    render(){
        return (
        <div>
          <Follow  deleteItem={this.deleteItem.bind(this)} titles={this.state.titles} refreshGames={this.refreshGames.bind(this)}></Follow>
          <Add searchAPI={this.searchAPI.bind(this)} getGamesList={this.getGamesList.bind(this)}></Add>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

