import React, { useState, useEffect } from "react";
import SocketContext from "./context"
import { initSockets } from "./sockets"; 
//       ^ initSockets is shown later on
import SpaceState from "../../models/SpaceState";
import { PawnColors, PlayerColors } from "../../Colors";
import Player from "../../models/Player";

const SocketProvider = (props) => {
    const [value, setValue] = useState({
      rollResult: 4,
      myTurn: false,
      availableMoves: [],
      currentPlayer: new Player("Waiting for Connection", PlayerColors.red),
      completedPlayer: new Player("Taylor Swift", PlayerColors.green),
      boardState: {
        spaces: {
          0: new SpaceState(false, PawnColors.red, false),  // Space 0
          1: new SpaceState(false, PawnColors.red, false),  // Space 1
          2: new SpaceState(false, PawnColors.red, false),  // Space 2
          3: new SpaceState(false, PawnColors.red, false),  // Space 3
          4: new SpaceState(false, PawnColors.red, false),  // Space 4
          5: new SpaceState(false, PawnColors.red, false),  // Space 5
          6: new SpaceState(false, PawnColors.red, false),  // Space 6
          7: new SpaceState(false, PawnColors.red, false),  // Space 7
          8: new SpaceState(false, PawnColors.red, false),  // Space 8
          9: new SpaceState(false, PawnColors.red, false),  // Space 9
          10: new SpaceState(false, PawnColors.yellow, false),  // Space 10
          11: new SpaceState(false, PawnColors.yellow, false),  // Space 11
          12: new SpaceState(false, PawnColors.yellow, false),  // Space 12
          13: new SpaceState(false, PawnColors.yellow, false),  // Space 13
          14: new SpaceState(false, PawnColors.red, false),  // Space 14
          15: new SpaceState(false, PawnColors.red, false),  // Space 15
          16: new SpaceState(false, PawnColors.red, false),  // Space 16
          17: new SpaceState(false, PawnColors.red, false),  // Space 17
          18: new SpaceState(false, PawnColors.red, false),  // Space 18
          19: new SpaceState(false, PawnColors.red, false),  // Space 19
          20: new SpaceState(false, PawnColors.blue, false),  // Space 20
          21: new SpaceState(false, PawnColors.blue, false),  // Space 21
          22: new SpaceState(false, PawnColors.blue, false),  // Space 22
          23: new SpaceState(false, PawnColors.blue, false),  // Space 23
          24: new SpaceState(false, PawnColors.red, false),  // Space 24
          25: new SpaceState(false, PawnColors.red, false),  // Space 25
          26: new SpaceState(false, PawnColors.red, false),  // Space 26
          27: new SpaceState(false, PawnColors.red, false),  // Space 27
          28: new SpaceState(false, PawnColors.red, false),  // Space 28
          29: new SpaceState(false, PawnColors.red, false),  // Space 29
          30: new SpaceState(false, PawnColors.red, false),  // Space 30
          31: new SpaceState(false, PawnColors.red, false),  // Space 31
          32: new SpaceState(false, PawnColors.red, false),  // Space 32
          33: new SpaceState(false, PawnColors.red, false),  // Space 33
          34: new SpaceState(false, PawnColors.red, false),  // Space 34
          35: new SpaceState(false, PawnColors.red, false),  // Space 35
          36: new SpaceState(false, PawnColors.red, false),  // Space 36
          37: new SpaceState(false, PawnColors.red, false),  // Space 37
          38: new SpaceState(false, PawnColors.red, false),  // Space 38
          39: new SpaceState(false, PawnColors.red, false),  // Space 39
          40: new SpaceState(false, PawnColors.red, false),  // Space 40
          41: new SpaceState(false, PawnColors.red, false),  // Space 41
          42: new SpaceState(false, PawnColors.red, false),  // Space 42
          43: new SpaceState(false, PawnColors.red, false),  // Space 43
          44: new SpaceState(false, PawnColors.red, false),  // Space 44
          45: new SpaceState(false, PawnColors.red, false),  // Space 45
          46: new SpaceState(false, PawnColors.red, false),  // Space 46
          47: new SpaceState(false, PawnColors.red, false),  // Space 47
          48: new SpaceState(false, PawnColors.red, false),  // Space 48
          49: new SpaceState(false, PawnColors.red, false),  // Space 49
          50: new SpaceState(false, PawnColors.red, false),  // Space 50
          51: new SpaceState(false, PawnColors.red, false),  // Space 51
          52: new SpaceState(false, PawnColors.red, false),  // Space 52
          53: new SpaceState(false, PawnColors.red, false),  // Space 53
          54: new SpaceState(false, PawnColors.red, false),  // Space 54
          55: new SpaceState(false, PawnColors.red, false),  // Space 55
          56: new SpaceState(false, PawnColors.red, false),  // Space 56
          57: new SpaceState(false, PawnColors.red, false),  // Space 57
          58: new SpaceState(false, PawnColors.red, false),  // Space 58
          59: new SpaceState(false, PawnColors.red, false),  // Space 59
        }
      },
      gameOver: false,
    });

useEffect(() => initSockets({ setValue }), []);
// Note, we are passing setValue ^ to initSockets
return(
    <SocketContext.Provider value={ value }>
      { props.children }
    </SocketContext.Provider>
  )
};

export default SocketProvider;