import GameEngine from './GameEngine';
import PremadeGrids from './PremadeGridsForTests'

const engine = new GameEngine();

test('Cunstructor initializes currentCity', () => {
    // expect(engine.currentCity).not.toBeDefined();
    expect(engine.currentCity).toBeDefined();
});

test('Cunstructor initialize cityTurnHistory', () => {
    // expect(engine.cityTurnHistory[0]).toEqual(clearedCity);
    expect(engine.cityTurnHistory).toBeDefined();
});

test('toggleCell changes the given cells boolean value', () => {
    const cellValue = engine.currentCity.cityGrid[1][1];
    engine.toggleCell(1,1);
    // expect(engine.currentCity.cityGrid[1][1]).toBe(cellValue); 
    expect(engine.currentCity.cityGrid[1][1]).toBe(!cellValue); 
});

test('getCityGrid gives back the currentCity', () => {
    const cellValue = engine.currentCity.cityGrid[1][1];
    engine.toggleCell(1,1);
    // expect(engine.currentCity.cityGrid[1][1]).toBe(cellValue); 
    expect(engine.currentCity.cityGrid[1][1]).toBe(!cellValue);  
});

//getCityGrid 
test('getCityGrid return getCityGrid', () => {
    // expect(engine.currentCity.cityGrid[1][1]).toBe(cellValue); 
    expect(engine.currentCity).toBeDefined(); 
});
