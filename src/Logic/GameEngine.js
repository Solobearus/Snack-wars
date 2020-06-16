import City from './City'
import PremadeGrids from './PremadeGrids.js'

class GameEngine {

    currentTurn;
    currentCity;
    cityTurnHistory;

    constructor() {
        this.initializeGame();
    }

    //Initialize Game
    initializeGame() {
        this.currentTurn = 0;
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
        this.currentTurn++;
    }

    //This is how we clear the city
    clearCity() {
        //We save the current grid to cityTurnHistory
        this.cityTurnHistory.push(this.currentCity.getCityGrid());
        //clearCity
        this.currentCity.clearCity();
        this.currentTurn++;
    }

    //This is how we randomize the city
    randCity() {
        // console.log(this.currentTurn);

        //We save the current grid to cityTurnHistory
        this.cityTurnHistory.push(this.currentCity.getCityGrid());
        //randCity
        this.currentCity.randCity();

        this.currentTurn++;
    }

    //This is how we toggleCell
    toggleCell(rowindexcell, columnindexcell) {
        //We save the current grid to cityTurnHistory
        const cityTurnToPush = this.currentCity.getCityGrid()

        this.cityTurnHistory.push([...cityTurnToPush]);
        //toggleCell
        this.currentCity.toggleCell(rowindexcell, columnindexcell);

        this.currentTurn++;
    }

    //this is the nextTurn logic
    previousTurn() {

        if (this.currentTurn > 0) {
            // console.log(this.currentTurn);
            //We save the current grid to cityTurnHistory
            this.currentCity.setCityGrid(this.cityTurnHistory.pop());
            //reset screen
            this.currentTurn--;
        }
    }

    goBackInTime(turns) {
        if (this.cityTurnHistory.length > 1) {
            let newCityTurnHistory = this.cityTurnHistory.slice(0, this.cityTurnHistory.length - turns);
            // console.log(newCityTurnHistory);

            this.cityTurnHistory = newCityTurnHistory;
            this.currentCity.setCityGrid(this.cityTurnHistory.pop());
            this.currentTurn -= turns;
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
        this.currentTurn++;
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
