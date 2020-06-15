import React, { Component } from 'react';
import style from './App.module.css';
import MainMenu from '../Components/MainMenu/MainMenu.jsx'
import GameScreen from '../Components/GameScreen/GameScreen.jsx'
import GameEngine from '../Logic/GameEngine'

class App extends Component {

  playingInterval;
  isPlaying;

  constructor(props) {
    super(props);
    //TODO: remove this later
    window.app = this;
    const gameEngine = new GameEngine();

    this.state = {
      gameEngine: gameEngine,
      display: false,
      isPlaying : false,
      isWrapping: false,
      playStopValue:'Play',
      wrappingValue:'Wrap',
    };
  }

  startGame(){
    this.setState({display:true});
  }

  // ---   TOGGLES   ----
  togglePlay(){
    //TODO: Fix logic
    let isPlaying = !this.state.isPlaying;
    this.setState({isPlaying:isPlaying}) ;

    if(this.state.isPlaying){            
      clearInterval(this.playingInterval); 
      this.setState({playStopValue:'Play'});
    }else{
      this.playingInterval = setInterval(() => this.nextTurn(),700);
      this.setState({playStopValue:'Stop'});
    }    
  }

  toggleAllowWrapping(checked){
    let allowWrapping = !this.state.allowWrapping;
    this.setState({allowWrapping:allowWrapping});

    if(this.state.allowWrapping){         
      this.setState({wrappingValue:'Wrap'});
    }else{
      this.setState({wrappingValue:'Dont Wrap'});
    }
  }

  // ---   gameEngine METHODS   ----
  nextTurn = () => {
    this.state.gameEngine.nextTurn(this.state.allowWrapping);
    this.setState({gameEngine:this.state.gameEngine});
  }

  previousTurn = () => {
    this.state.gameEngine.previousTurn();
    this.setState({gameEngine:this.state.gameEngine});
  }

  randCity = () => {
    this.state.gameEngine.randCity();
    this.setState({gameEngine:this.state.gameEngine});
  }

  clearCity = () => {
    this.state.gameEngine.clearCity();
    this.setState({gameEngine:this.state.gameEngine});
  }

  toggleCell = (rowindexcell,columnindexcell) => {
    this.state.gameEngine.toggleCell(rowindexcell,columnindexcell);
    this.setState({gameEngine:this.state.gameEngine});
  }

  setCurrentCityGridFromPremade = (index) => {
    this.state.gameEngine.setCurrentCityGridFromPremade(index);
    this.setState({gameEngine:this.state.gameEngine});
  }

  goBackInTime = (turns) => {
    this.state.gameEngine.goBackInTime(turns);
    this.setState({gameEngine:this.state.gameEngine});
  }
  
  render() {
    let page = <MainMenu click={()=> {this.startGame()}}></MainMenu>;

    if(this.state.display){
      page = <GameScreen 
              gameEngine={this.state.gameEngine}
              goBackInTime={this.goBackInTime.bind(this)}
              setCurrentCityGridFromPremade={this.setCurrentCityGridFromPremade.bind(this)}
              previousTurn={this.previousTurn.bind(this)}
              nextTurn={this.nextTurn.bind(this)}
              randCity={this.randCity.bind(this)}
              clearCity={this.clearCity.bind(this)}
              togglePlay={this.togglePlay.bind(this)}
              playStopValue={this.state.playStopValue}
              toggleCell={this.toggleCell.bind(this)}
              wrappingValue={this.state.wrappingValue}
              toggleAllowWrapping={this.toggleAllowWrapping.bind(this)}>
            </GameScreen>
    }

    return (
      <div className={style.App}>
        {page}
      </div>
    );
  }
}

export default App;
