import { CanvasRender } from "../canvasRender";
import { Direction } from '../direction.js';

export class Render1 extends CanvasRender {
    constructor(game, options) {
        super(game, options);
    }

    initInputs() {
        window.addEventListener('keydown', evt => {
            evt = evt || window.event;

            let keycode = evt.code;
            this.onKeyPressed(keycode);
        });
    }

    onKeyPressed(keycode) {
        if (keycode == "Space") {
            if (this.options.run) {
                this.options.run = false;
            } else {
                this.options.run = true;
                this.cicle();
            }
        } else {
            let direction = this.game.direction;

            if(keycode == 'ArrowLeft' && !direction.equals(Direction.right)) { var newDirection = Direction.left; }
            else if(keycode == 'ArrowUp' && !direction.equals(Direction.down)) { var newDirection = Direction.up; }
            else if(keycode == 'ArrowRight' && !direction.equals(Direction.left)) { var newDirection = Direction.right; }
            else if(keycode == 'ArrowDown' && !direction.equals(Direction.up)) { var newDirection = Direction.down }

            this.newDirection = newDirection;
        }
    }
}