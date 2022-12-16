import { Apples } from "../apples";
import { Direction } from "../direction";
import { Game } from "../game";
import { Position } from "../position";
import { Snake } from "../snake";
import { Map } from "../map.js";

export class Game2 extends Game {
    constructor() {
        let map = new Map(
            20,
            new Snake([new Position(0,0), new Position(1,0), new Position(2, 0), new Position(3,0)]),
            new Apples([])
        );
        super(
            map,
            Direction.right    
        );

        this.map.addNewApple();
        this.map.addNewApple();
    }
}