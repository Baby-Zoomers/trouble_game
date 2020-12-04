
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
}

export default Player;