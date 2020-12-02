import Player from "./Player";

/** Represents a piece/pawn in the game. */
class Piece{
    /**
     * Returns a new piece object
     * @param {Player} player: player the piece belongs to
     * @param {int} space: Number of the space the piece is on
     */
    constructor(player, space){
        this.player = player;
        this.space = space;
    }
}

export default Piece;