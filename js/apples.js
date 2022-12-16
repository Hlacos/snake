export class Apples {
    constructor(positions) {
        this.positions = positions;

        this.newPositionDelegates = [];
        this.removePositionDelegates = [];
    }

    get size() {
        return this.positions.length;
    }

    addApple(position) {
        this.positions.push(position);

        this.triggerNewPositionEvent(position);
    }

    removeApple(position) {
        this.positions = this.positions.filter(applePosition => !applePosition.equals(position));

        this.triggerRemovePositionEvent(position);
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