/** Simple class for representing the state of a board space. 
 * Used primarily by Board.js
 */
class SpaceState {
    /**
     * 
     * @param {boolean} occupied True if space is occupied by a piece
     * @param {string} color Color to render the occupied space
     * @param {boolean} highlighted if the space is highlighted 
     */
    constructor(occupied, color, highlighted){
        this.occupied = occupied;
        this.color = color;
        this.highlighted = highlighted;
    }   
}

export default SpaceState;