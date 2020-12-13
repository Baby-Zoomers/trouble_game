import io from "socket.io-client";
import { socketEvents } from "./events";
import { v4 as uuidv4 } from 'uuid';
// import { getGameBoard } from "./emit";
export const id = uuidv4();
// export const socket = io(window.location, {query: {id}});
let socket = null;

export const initSockets = ({ name, gameId, setValue }) => {
  console.log("initSockets", name, gameId)
  if (socket) {
    socket.close();
  }
  socket = io({query: {name, gameId}});
  socketEvents({ setValue, socket });
  setValue(state => ({...state, gameId}));
  // setValue    ^ is passed on to be used by socketEvents
  // getGameBoard();
};

export const getSocket = () => {
  return socket;
}

export const closeSocket = () => {
  socket.close();
  socket = null;
}