const CELLS_WIDTH = 20;
const CELLS_HEIGHT = 20;

function grid(): { x: number; y: number }[] {
    const grid = [];
    for (let i = 0; i < CELLS_HEIGHT; i++) {
        for (let j = 0; j < CELLS_WIDTH; j++) {
            grid.push({ x: j, y: i });
        }
    }
    return grid;
}

export const GameConstants = {
    SQUARE_WIDTH: 20,
    BOARD_WIDTH: 20 * CELLS_WIDTH,
    BOARD_HEIGHT: 20 * CELLS_HEIGHT,
    SNAKE_COLOR: "#71ebff",
    SNAKE_VELOCITY: 1,
    FOOD_COLOR: "#ff406e",
    CELLS_WIDTH: CELLS_WIDTH,
    CELLS_HEIGHT: CELLS_HEIGHT,
    GRID: grid(),
};
