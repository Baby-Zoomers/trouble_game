import io from "socket.io-client";
import { socketEvents } from "./events";
import { v4 as uuidv4 } from 'uuid';
// import { getGameBoard } from "./emit";
export const id = uuidv4();
export const socket = io(window.location, {query: {id}});

export const initSockets = ({ setValue }) => {
  socketEvents({ setValue });
  setValue(state => ({...state, id}));
  // setValue    ^ is passed on to be used by socketEvents
  // getGameBoard();
};
