import { Position } from "./position";

export class Snake {
    constructor(positions) {
        this.positions = positions;

        this.newPositionDelegates = [];
        this.removePositionDelegates = [];
    }

    get size() {
        return this.positions.length;
    }

    get headPosition() {
        return this.positions[this.size - 1];
    }

    addNewHead(position) {
        this.positions.push(position);

        this.triggerNewPositionEvent(position);
    }

    stepTo(position) {
        this.addNewHead(position);
        this.removeLastTail();
    }

    removeLastTail() {
        let position = this.positions.shift();

        this.triggerRemovePositionEvent(position);
    }

    isCollide(position) {
        return this.positions.find(snakePosition => snakePosition.equals(position))
    }

    //event subscription
    onNewPosition(eventHandler) {
        this.newPositionDelegates.push(eventHandler);
    }

    onRemovePosition(eventHandler) {
        this.removePositionDelegates.push(eventHandler);
    }

    //event triggers
    triggerNewPositionEvent(position) {
        this.newPositionDelegates.forEach(eventHandler => eventHandler(position));
    }

    triggerRemovePositionEvent(position) {
        this.removePositionDelegates.forEach(eventHandler => eventHandler(position));
    }
}
