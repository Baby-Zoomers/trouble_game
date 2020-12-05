import { PlayerColors } from "../Colors";

/** Represents a player in the game. */
class Player{
    /**
     * Returns a new player object
     * @param {string} Display name 
     * @param {string} Player's color. Should be one of Colors.PlayerColors
     */
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    /**
     * Create a player object from a Player DTO
     * @param {Object} playerDTO: Player DTO received from the server
     * @returns {Player} new Player object
     */
    static fromDTO(playerDTO) {
        return new Player(playerDTO.name, PlayerColors[playerDTO.color]);
    }
}

export default Player;