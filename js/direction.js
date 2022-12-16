import { Position } from "./position";

export class Direction {
    static get up() {
        return new Position(0, -1);
    }

    static get down() {
        return new Position(0, 1);
    }

    static get left() {
        return new Position(-1, 0);
    }

    static get right() {
        return new Position(1, 0);
    }
}