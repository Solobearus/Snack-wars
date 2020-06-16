# Snack-wars 


## About the development 

This is one of the first project I have made in React long time ago.

After developing for some time, I have decided to clean the dust of this project, fix some bugs and finally upload it to github for the world to see.

This project was written before hooks were popular and before I learned about state managment, So you can see that this project follows the Container Component pattern using drill down technique to pass props.

## About the game

There are no goal in this game, this is a visual game made to generate intersting shapes according to the rules below

### Every turn the grid will change according to the following rules:

- Any live cell with fewer than two live neighbours dies (underpopulation).
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies (overcrowding).
- Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
