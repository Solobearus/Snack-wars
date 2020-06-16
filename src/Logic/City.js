class City {

    cityGrid;
    WIDTH_OF_CITY = 20;
    HEIGHT_OF_CITY = 20;

    constructor() {
        this.cityGrid = this.initializeCityGrid();
        this.clearCity();
    }

    //This is how we initialize the city
    initializeCityGrid() {
        let cityGrid = new Array(this.HEIGHT_OF_CITY);

        for (let i = 0; i < cityGrid.length; i++) {
            cityGrid[i] = new Array(this.WIDTH_OF_CITY);
        }

        return cityGrid;
    }

    //This is how we clear the city
    clearCity() {
        let newCityGrid = this.initializeCityGrid();

        for (let i = 0; i < this.HEIGHT_OF_CITY; i++) {
            for (let j = 0; j < this.WIDTH_OF_CITY; j++) {
                //set the cell in {i,j} to be false
                newCityGrid[i][j] = false;
            }
        }
        this.cityGrid = newCityGrid;
    }

    //This is how we randomize the city
    randCity() {
        let newCityGrid = this.initializeCityGrid();

        for (let i = 0; i < this.HEIGHT_OF_CITY; i++) {
            for (let j = 0; j < this.WIDTH_OF_CITY; j++) {
                //random boolean
                let tmp = Math.random() >= 0.5;
                //set the cell in {i,j} to be tmp
                newCityGrid[i][j] = tmp;
            }
        }

        this.cityGrid = newCityGrid;
    }

    //Testing porpuses
    logCityGrid() {
        let stringGrid = "[";
        for (let i = 0; i < this.HEIGHT_OF_CITY; i++) {
            for (let j = 0; j < this.WIDTH_OF_CITY; j++) {
                stringGrid += this.cityGrid[i][j] + ", "
            }
            stringGrid += "],\n[";
        }

        console.log(stringGrid);
    }

    //run one iteration on all the cells of the grid
    runInteractions(allowWrapping) {
        let newCityGrid = this.initializeCityGrid();

        for (let i = 0; i < this.HEIGHT_OF_CITY; i++) {
            for (let j = 0; j < this.WIDTH_OF_CITY; j++) {
                newCityGrid[i][j] = this.cellInteraction(i, j, allowWrapping);
            }
        }

        this.cityGrid = newCityGrid;
    }

    //run one iteration on a single cell of the grid
    cellInteraction(row, column, allowWrapping) {

        let open = this.cityGrid[row][column];
        let result = open;
        let openRamensPlaces = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (!(i === 0 && j === 0)) {
                    if (allowWrapping) {
                        let offSetx = 0;
                        let offSety = 0;

                        if (row + i <= -1) {
                            offSetx += this.HEIGHT_OF_CITY;
                        } else if (row + i >= this.HEIGHT_OF_CITY) {
                            offSetx -= this.HEIGHT_OF_CITY;
                        }
                        if (column + j <= -1) {
                            offSety += this.WIDTH_OF_CITY;
                        } else if (column + j >= this.WIDTH_OF_CITY) {
                            offSety -= this.WIDTH_OF_CITY;
                        }

                        if (this.cityGrid[row + i + offSetx][column + j + offSety]) {
                            openRamensPlaces++;
                        }
                    } else {
                        if ((row + i > -1 && row + i < this.HEIGHT_OF_CITY) && (column + j > -1 && column + j < this.WIDTH_OF_CITY)) {
                            if (this.cityGrid[row + i][column + j]) {
                                openRamensPlaces++;
                            }
                        }
                    }
                }
            }
        }

        if (open) {
            if (openRamensPlaces === 2 || openRamensPlaces === 3) {
                result = true;
            } else {
                result = false;
            }
        } else if (openRamensPlaces === 3) {
            result = true;
        }

        return result;
    }

    //toggle the value of a given cell
    toggleCell(rowindexcell, columnindexcell) {
        let newCityGrid = this.setCityGrid(this.cityGrid);

        let tmp = newCityGrid[rowindexcell][columnindexcell];
        newCityGrid[rowindexcell][columnindexcell] = !tmp;

    }

    //sets single cell at {row, column} to the given value
    setCell(row, column, value) {
        this.cityGrid[row][column] = value;
    }

    //returns the cityGrid
    getCityGrid() {
        return this.cityGrid;
    }

    //returns the cityGrid
    getNewCityGrid() {
        let newCityGrid = this.initializeCityGrid();

        console.log(this.cityGrid[0][0])
        for (let i = 0; i < this.WIDTH_OF_CITY; i++) {
            for (let j = 0; j < this.HEIGHT_OF_CITY; j++) {
                newCityGrid[i][j] = this.cityGrid[i][j]
            }
        }

        return newCityGrid;
    }

    setCityGrid(cityGridToSet) {
        let newCityGrid = this.initializeCityGrid();

        for (let i = 0; i < this.WIDTH_OF_CITY; i++) {
            for (let j = 0; j < this.HEIGHT_OF_CITY; j++) {
                //set the cell in {i,j} to be false
                newCityGrid[i][j] = cityGridToSet[i][j];
            }
        }
        this.cityGrid = newCityGrid;

        return newCityGrid;
    }
}

export default City;

