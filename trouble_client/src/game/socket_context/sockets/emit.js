import { getSocket } from "./index";

/**
 * @summary methods that can be imported and used in any component
 */

export const sendRollDice = () => {
  getSocket().emit('rollDice');
    // socket.
};

export const movePiece = (piece) => {
  getSocket().emit('movePiece', piece);
};
