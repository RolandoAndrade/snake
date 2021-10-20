import {Game} from "./game/game";


const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const game = new Game(ctx);
function loop()
{
    game.loop();
}

let interval = window.setInterval(loop,100);