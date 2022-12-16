import { Position } from "./position";

export class CanvasRender {
    constructor(
        game,
        options
    ) {
        this.game = game;
        this.options = options;

        this.initCanvas();
        this.initPoints();
        this.initInputs();

        this.game.onPointsIncrements(points => this.drawPoints(points));
        this.game.onGameEnd(points => this.drawGameEnd(points));

        if (this.options.run) {
            this.cicle();
        }
    }

    initCanvas() {
        this.canvas = document.getElementById(this.options.canvasId);
        this.ctx = this.canvas.getContext('2d');

        this.draw();
    }

    initPoints() {
        this.pointsContainer = document.getElementById(this.options.pointsContainerId);
        this.drawPoints(0);
    }

    cicle() {
        if(this.newDirection !== undefined) {
            this.game.direction = this.newDirection;
        }
        this.game.step();
        this.draw();

        if (!this.game.gameEnd && this.options.run) {
            var render = this;
            setTimeout(function() {
                render.cicle();
            }, 100);
        }
    }

    draw() {
        for (var x = 0; x < this.game.map.size; x++) {
            for (var y = 0; y < this.game.map.size; y++) {
                var currentPosition = new Position(x, y);

                if (this.game.map.isApple(currentPosition)) {
                    this.drawApple(currentPosition);
                }

                if (this.game.map.isSnake(currentPosition)) {
                    this.drawSnake(currentPosition);
                }

                if (this.game.map.isEmpty(currentPosition)) {
                    this.drawEmpty(currentPosition);
                }
            }
        }
    }

    drawPoints(points) {
        this.pointsContainer.innerHTML = "Points: " + points;
    }

    drawGameEnd(points) {
        this.pointsContainer.innerHTML = "Game end: " + points;
    }

    drawApple(position) {
        this.drawSquare(position, this.options.appleColor);
    }

    drawSnake(position) {
        this.drawSquare(position, this.options.snakeColor);
    }

    drawEmpty(position) {
        this.drawSquare(position, this.options.emptyColor);
    }

    drawSquare(position, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            position.x * this.options.cellSize,
            position.y * this.options.cellSize,
            this.options.cellSize,
            this.options.cellSize
        );
    }
}