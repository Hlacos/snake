import { Cell } from './cell.js'
import { Position } from './position.js';

export class Map {
    constructor(
        size,
        snake,
        applePositions
    ) {
        this.size = size;
        this.snake = snake;
        this.applePositions = applePositions;

        this.map = new Array();

        this.initMap();

        this.snake.onNewPosition(position => this.setToSnake(position));
        this.snake.onRemovePosition(position => this.setToEmpty(position));

        this.applePositions.onNewPosition(position => this.setToApple(position));
        this.applePositions.onRemovePosition(position => this.setToEmpty(position));
    }

    initMap() {
        for (let x = 0; x < this.size; x++) {
            this.map.push(new Array());
            for (let y = 0; y < this.size; y++) {
                let position = new Position(x, y);
                this.setToEmpty(position);
            }
        }

        this.applePositions.positions.forEach(position => {
            this.setToApple(position);
        });

        this.snake.positions.forEach(position => {
            this.setToSnake(position);
        });
    }

    get snakeHeadPosition() {
        return this.snake.headPosition;
    }

    get emptyCellsCount() {
        return (this.size * this.size) - this.snake.size - this.applePositions.size;
    }

    removeApple(position) {
        this.applePositions.removeApple(position);
    }

    addSnakeHead(position) {
        this.snake.addNewHead(position);
    }

    snakeStepTo(position) {
        this.snake.stepTo(position);
    }

    addNewApple() {
        var random = Math.random() * this.emptyCellsCount;

        var i = 0;
        var x = 0;
        var y = 0;
        while (i < random) {
            var position = new Position(x, y);
            if (!this.isSnake(position) && !this.isApple(position)) {
                i++;
            }

            if (x == this.size - 1) {
                x = 0;
                y++;
            } else {
                x++;
            }
        }

        this.applePositions.addApple(position);
    }


    //Cell setters
    setToSnake(position) {
        this.map[position.x][position.y] = Cell.snake;
    }

    setToApple(position) {
        this.map[position.x][position.y] = Cell.apple;
    }

    setToEmpty(position) {
        this.map[position.x][position.y] = Cell.empty;
    }

    //Check cells
    isValidPosition(position) {
        return 0 <= position.x && position.x < this.size && 0 <= position.y && position.y < this.size;
    }

    isSnake(position) {
        return this.map[position.x][position.y] == Cell.snake;
    }

    isApple(position) {
        return this.map[position.x][position.y] == Cell.apple;
    }

    isEmpty(position) {
        return this.map[position.x][position.y] == Cell.empty;
    }
}