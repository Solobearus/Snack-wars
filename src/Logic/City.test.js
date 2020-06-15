import City from './City';
import PremadeGrids from './PremadeGridsForTests'
const city = new City();

// const trueCity = [
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]]

// const clearedCity = [
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]]

// const predefinedCity = [
//     [false, true,  false, false, true,  true,  false, false, true,  true,  false, false, true,  false, false, true,  true,  false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, true,  false, false, false, false, false, false, false, false, false, false, true, ],
//     [true,  true,  false, false, true,  true,  false, false, true,  true,  false, false, true,  false, false, false, true,  false, false, false, ],
//     [false, true,  false, false, true,  true,  false, false, true,  true,  false, false, true,  false, false, true,  true,  false, false, true, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, true,  false, false, false, false, false, false, false, false, false, false, false, ],
//     [true,  true,  false, false, true,  true,  false, false, true,  true,  false, false, true,  false, false, false, true,  false, false, false, ]]
 
// const predefinedCityNextTurn = [
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, true,  true,  false, false, false, false, false, false, false, false, false, false, ],
//     [true,  true,  false, false, true,  true,  false, true,  false, false, false, false, false, false, false, true,  true,  false, false, false, ],
//     [true,  true,  false, false, true,  true,  false, false, true,  true,  false, false, false, false, false, true,  true,  false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, true,  true,  false, false, false, false, false, false, false, false, false, false, ],
//     [false, false, false, false, false, false, false, false, true,  true,  false, false, false, false, false, false, false, false, false, false, ]]

    
// const undefinedCity = [
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]]
 
//initializeCityGrid
test('Initialized empty city grid', () => {
    // expect(city.cityGrid).toEqual(undefinedCity);
    city.cityGrid = city.initializeCityGrid();
    expect(city.cityGrid).toEqual(PremadeGrids.undefinedCity);
});

//clearCity
test('All city equals to false', () => {
    city.setCityGrid(PremadeGrids.predefinedCity);
    city.clearCity();
    // city.logCityGrid();

    expect(city.cityGrid).toEqual(PremadeGrids.clearedCity);
});

//randCity think of a better test
test('Applied random values to city grid cells', () => {
    
    city.setCityGrid(PremadeGrids.predefinedCity);
    city.randCity();

    expect(city.cityGrid).toBeDefined;
    expect(city.cityGrid).not.toEqual(PremadeGrids.clearedCity);
    expect(city.cityGrid).not.toEqual(PremadeGrids.trueCity);
    expect(city.cityGrid).not.toEqual(PremadeGrids.predefinedCity);
});

//cellInteraction
test('run one iteration on a single cell of the grid', () => {
    city.setCityGrid(PremadeGrids.predefinedCity)

    // without Wrapping 
    // open with 2 open near (10,0)
    expect(city.cellInteraction(10,0,false)).toBe(true);
    
    // open with 3 open near (10,4)
    expect(city.cellInteraction(10,4,false)).toBe(true);

    // open with more than 3 open near (10,8)
    expect(city.cellInteraction(10,8,false)).toBe(false);

    // open with less than 2 open near (10,12)
    expect(city.cellInteraction(10,12,false)).toBe(false);

    // closed with 3 open near (10,15)
    expect(city.cellInteraction(10,15,false)).toBe(true);

    // closed with not 3 open near (10,19)
    expect(city.cellInteraction(10,19,false)).toBe(false);


    // without Wrapping 
    // open with 2 open near (19,0)
    expect(city.cellInteraction(19,0,false)).toBe(false);

    // open with 3 open near (19,4)
    expect(city.cellInteraction(19,4,false)).toBe(false);

    // open with more than 3 open near (19,8)
    expect(city.cellInteraction(19,8,false)).toBe(true);

    // open with less than 2 open near (19,12)
    expect(city.cellInteraction(19,12,false)).toBe(false);

    // closed with 3 open near (19,15)
    expect(city.cellInteraction(19,15,false)).toBe(false);

    // closed with not 3 open near (19,19)
    expect(city.cellInteraction(19,19,false)).toBe(false);


    // with Wrapping 
    // open with 2 open near (10,0) this time its false because it wraps and recieves another 2 opens
    expect(city.cellInteraction(10,0,true)).toBe(false);

    // open with 3 open near (10,4)
    expect(city.cellInteraction(10,4,true)).toBe(true);

    // open with more than 3 open near (10,8)
    expect(city.cellInteraction(10,8,true)).toBe(false);

    // open with less than 2 open near (10,12)
    expect(city.cellInteraction(10,12,true)).toBe(false);

    // closed with 3 open near (10,15)
    expect(city.cellInteraction(10,15,true)).toBe(true);

    // closed with not 3 open near (10,19) , this time its true because it wraps and recieve a third open
    expect(city.cellInteraction(10,19,true)).toBe(true);

    
    // with Wrapping 
    // open with 2 open near (19,0)
    expect(city.cellInteraction(19,0,true)).toBe(true);

    // open with 3 open near (19,4)
    expect(city.cellInteraction(19,4,true)).toBe(true);

    // open with more than 3 open near (19,8)
    expect(city.cellInteraction(19,8,true)).toBe(false);

    // open with less than 2 open near (19,12)
    expect(city.cellInteraction(19,12,true)).toBe(false);

    // closed with 3 open near (19,15)
    expect(city.cellInteraction(19,15,true)).toBe(true);

    // closed with not 3 open near (19,19)
    expect(city.cellInteraction(19,19,true)).toBe(false);
});

//runInteractions
test('run one iteration on all the cells of the grid', () => {
    city.setCityGrid(PremadeGrids.predefinedCity);
    city.runInteractions();
    expect(city.getCityGrid()).toEqual(PremadeGrids.predefinedCityNextTurn);
});

//toggleCell
test('toggleCell return opposite of the given cell', () => {
    const temp = city.cityGrid[1][1];
    city.toggleCell(1,1);

    // expect(city.cityGrid[1][1]).toBe(temp); 
    expect(city.cityGrid[1][1]).toBeDefined(); 
    expect(city.cityGrid[1][1]).toBe(!temp); 
});

//setCell
test('setCell sets the given cell to the given value', () => {
    city.setCell(1,1,false);

    // expect(city.cityGrid[1][1]).toBe(true); 
    expect(city.cityGrid[1][1]).toBe(false); 

    city.setCell(1,1,true);
    expect(city.cityGrid[1][1]).toBe(true); 

});

//getCityGrid
test('getCityGrid return getCityGrid', () => {
    // expect(city.getCityGrid()).not.toBeDefined(); 
    expect(city.getCityGrid()).toBeDefined(); 
});
