import City from './City'
import PremadeGrids from './PremadeGrids.js'

class GameEngine {

    currentCity;
    cityTurnHistory;

    constructor() {
        this.initializeGame();
    }

    //Initialize Game
    initializeGame() {
        this.currentCity = new City();
        this.cityTurnHistory = [];
    }

    //this is the nextTurn logic
    nextTurn(allowWrapping) {

        //We save the current grid to cityTurnHistory
        this.cityTurnHistory.push(this.currentCity.getCityGrid());
        //Check all neighboring cells of every cell and apply update if they close, open or remain at their state
        this.currentCity.runInteractions(allowWrapping);
        //reset screen
    }

    //This is how we clear the city
    clearCity() {
        //We save the current grid to cityTurnHistory
        this.cityTurnHistory.push(this.currentCity.getCityGrid());
        //clearCity
        this.currentCity.clearCity();
    }

    //This is how we randomize the city
    randCity() {

        //We save the current grid to cityTurnHistory
        this.cityTurnHistory.push(this.currentCity.getCityGrid());
        //randCity
        this.currentCity.randCity();
    }

    //This is how we toggleCell
    toggleCell(rowindexcell, columnindexcell) {
        //We save the current grid to cityTurnHistory
        const cityTurnToPush = this.currentCity.getCityGrid()

        this.cityTurnHistory.push([...cityTurnToPush]);
        //toggleCell
        this.currentCity.toggleCell(rowindexcell, columnindexcell);
    }

    //this is the nextTurn logic
    previousTurn() {

        if (this.cityTurnHistory.length > 0) {
            //We save the current grid to cityTurnHistory
            this.currentCity.setCityGrid(this.cityTurnHistory.pop());
            //reset screen
        }
    }

    goBackInTime(turns) {
        if (this.cityTurnHistory.length > 0) {
            let newCityTurnHistory = this.cityTurnHistory.slice(0, this.cityTurnHistory.length - turns);
            // console.log(newCityTurnHistory);

            this.cityTurnHistory = newCityTurnHistory;
            this.currentCity.setCityGrid(this.cityTurnHistory.pop());
        }
    }

    //get the currentCity grid
    getCurrentCityGrid() {
        return this.currentCity.getCityGrid();
    }

    setCurrentCityGridFromPremade(index) {

        //We save the current grid to cityTurnHistory
        this.cityTurnHistory.push(this.currentCity.getCityGrid());
        this.currentCity.setCityGrid(this.getCityPremadeGrids()[PremadeGrids.length - index - 1]);
    }

    getCurrentCity() {
        return this.currentCity;
    }

    getCityTurnHistory() {
        return this.cityTurnHistory;
    }

    getCityPremadeGrids() {
        return PremadeGrids;
    }
}

export default GameEngine;
