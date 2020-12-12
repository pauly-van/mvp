import React from 'react';

const Follow = (props) => (
        <div>
            <table style={{border: '1px solid black'}}>
                <thead >
                  <tr>
                    <th>Title</th>
                    <th>Updates</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {props.titles.map((game)=>{
                      return (
                        <tr >
                         <td>{game[1]}</td>
                         <td>{game[2]}</td>
                         <td>{game[3]}</td>
                         <button onClick={props.deleteItem(game[0])}>DEL</button>
                       </tr>
                      )
                  })
                }
                </tbody>
            </table>
            <button onClick={props.refreshGames}>Refresh your favs!</button>
        </div>
    )

export default Follow;