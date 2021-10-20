import {Game} from "./game/game/game";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const SQUARE_WIDTH = 20;
const BOARD_WIDTH = 400;
const BOARD_HEIGHT = 400;

let game = new Game(ctx);

function loop()
{
    game.loop();
}

let interval = window.setInterval(loop,100);