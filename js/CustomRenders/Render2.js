import { CanvasRender } from "../canvasRender";
import { Direction } from '../direction.js';

export class Render2 extends CanvasRender {
    constructor(game, options) {
        super(game, options);
    }

    initInputs() {
        window.addEventListener('click', evt => {
            evt = evt || window.event;

            if (!this.options.run) {
                this.options.run = true;
                this.cicle()
            }
            this.onClick();
        });
    }

    onClick() {
        let direction = this.game.direction;

        if (direction.equals(Direction.up)) {
            var newDirection = Direction.right;
        }
        if (direction.equals(Direction.right)) {
            var newDirection = Direction.down;
        }
        if (direction.equals(Direction.down)) {
            var newDirection = Direction.left;
        }

        if (direction.equals(Direction.left)) {
            var newDirection = Direction.up;
        }

        this.newDirection = newDirection;
    }

}