import { Game1 } from './js/CustomGames/Game1.js';
import { Game2 } from './js/CustomGames/Game2.js';
import { Render1 } from './js/CustomRenders/Render1.js';
import { Render2 } from './js/CustomRenders/Render2.js';

var game = new Game1();

var options = {
    canvasId: "app",
    pointsContainerId: "points",
    cellSize: 15,
    appleColor: "#ff0000",
    snakeColor: "#00ff00",
    emptyColor: "#dddddd",
    run: false
};

new Render1(game, options);
