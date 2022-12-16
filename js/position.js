export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(position) {
        return this.x === position.x && this.y === position.y;
    }

    getNextPosition(direction) {
        return new Position(this.x + direction.x, this.y + direction.y);
    }
}