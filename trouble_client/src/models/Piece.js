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

    /**
     * Create a piece object from a PiceDTO
     * @param {Object} pieceDTO: Piece DTO received from the server
     * @returns {Piece} new Piece object
     */
    static fromDTO(pieceDTO) {
        return new Piece(Player.fromDTO(pieceDTO.player), pieceDTO.space);
    }
}

export default Piece;