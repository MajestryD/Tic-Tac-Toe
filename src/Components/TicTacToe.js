import React, {Component} from 'react';
import Square from './Square';
import './tictactoe.css';

const Circle = "Circle";
const Cross = "Cross";
const Empty = "Empty";


class TicTacToe extends Component{

  constructor(props){
    super(props);
    this.takeTurn = this.takeTurn.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.state = {
      grid: [
        Empty,Empty,Empty,
        Empty,Empty,Empty,
        Empty,Empty,Empty
      ],
      player: Cross,
      winner:Empty
    }
  }

  checkWin = (grid) =>{
    if(grid[0] == Cross && grid[1] == Cross && grid[2] == Cross) return Cross;
    if(grid[3] == Cross && grid[4] == Cross && grid[5] == Cross) return Cross;
    if(grid[6] == Cross && grid[7] == Cross && grid[8] == Cross) return Cross;
    if(grid[0] == Cross && grid[3] == Cross && grid[6] == Cross) return Cross;
    if(grid[1] == Cross && grid[4] == Cross && grid[7] == Cross) return Cross;
    if(grid[2] == Cross && grid[5] == Cross && grid[8] == Cross) return Cross;
    if(grid[0] == Cross && grid[4] == Cross && grid[8] == Cross) return Cross;
    if(grid[2] == Cross && grid[4] == Cross && grid[6] == Cross) return Cross;

    if(grid[0] == Circle && grid[1] == Circle && grid[2] == Circle) return Circle;
    if(grid[3] == Circle && grid[4] == Circle && grid[5] == Circle) return Circle;
    if(grid[6] == Circle && grid[7] == Circle && grid[8] == Circle) return Circle;
    if(grid[0] == Circle && grid[3] == Circle && grid[6] == Circle) return Circle;
    if(grid[1] == Circle && grid[4] == Circle && grid[7] == Circle) return Circle;
    if(grid[2] == Circle && grid[5] == Circle && grid[8] == Circle) return Circle;
    if(grid[0] == Circle && grid[4] == Circle && grid[8] == Circle) return Circle;
    if(grid[2] == Circle && grid[4] == Circle && grid[6] == Circle) return Circle;

    if(grid.every(p => p != Empty)) return "It's a tie";
    return Empty;
  }

  takeTurn = (position) => {
    if(this.state.winner == Empty){
      const positions = [...this.state.grid];
      positions[position] = this.state.player;
      const winner = this.checkWin(positions);



      this.setState({
        player: this.state.player == Circle ? Cross : Circle,
        positions,
        grid: positions,
        winner: winner

      })
    }
   }




  render(){
    return(
      <div className = "main">
        <div className = "grid">
          <Square position = {0} value = {this.state.grid[0]} takeTurn = {this.takeTurn}/>
          <Square position = {1} value = {this.state.grid[1]} takeTurn = {this.takeTurn}/>
          <Square position = {2} value = {this.state.grid[2]} takeTurn = {this.takeTurn}/>
          <Square position = {3} value = {this.state.grid[3]} takeTurn = {this.takeTurn}/>
          <Square position = {4} value = {this.state.grid[4]} takeTurn = {this.takeTurn}/>
          <Square position = {5} value = {this.state.grid[5]} takeTurn = {this.takeTurn}/>
          <Square position = {6} value = {this.state.grid[6]} takeTurn = {this.takeTurn}/>
          <Square position = {7} value = {this.state.grid[7]} takeTurn = {this.takeTurn}/>
          <Square position = {8} value = {this.state.grid[8]} takeTurn = {this.takeTurn}/>
        </div>
        <div> The winner is {this.state.winner} </div>
      </div>
    )
  }
}

export default TicTacToe;
