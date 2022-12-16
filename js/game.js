export class Game {
    constructor(map, direction) {
        this.map = map;
        this.direction = direction;
        this.points = 0;
        this.gameEnd = false;

        this.pointsIncrementsDelegates = [];
        this.gameEndDelegates = [];
    }

    step() {
        if (!this.gameEnd) {
            var position = this.map.snakeHeadPosition;
            var nextHead = position.getNextPosition(this.direction);

            if (this.map.isValidPosition(nextHead)) {
                if (this.map.isSnake(nextHead)) {
                    this.gameEnd = true;
                    this.triggerGameEndEvent();
                } else {
                    if (this.map.isApple(nextHead)) {
                        this.incrementPoints();
                        this.map.removeApple(nextHead);
                        this.map.addSnakeHead(nextHead);

                        if (this.map.emptyCellsCount == 0) {
                            this.gameEnd = true;
                            this.triggerGameEndEvent();
                        } else {
                            this.map.addNewApple();
                        }
                    } else {
                        this.map.snakeStepTo(nextHead);
                    }
                }
            } else {
                this.gameEnd = true;
                this.triggerGameEndEvent();
            }
        }
    }

    incrementPoints() {
        this.points += 1;

        this.triggerPointsIncrementsEvent();
    }

    //event subscription
    onPointsIncrements(eventHandler) {
        this.pointsIncrementsDelegates.push(eventHandler);
    }

    onGameEnd(eventHandler) {
        this.gameEndDelegates.push(eventHandler);
    }

    //event triggers
    triggerPointsIncrementsEvent() {
        this.pointsIncrementsDelegates.forEach(eventHandler => {
            eventHandler(this.points);
        })
    }

    triggerGameEndEvent() {
        this.gameEndDelegates.forEach(eventHandler => {
            eventHandler(this.points);
        })
    }
}