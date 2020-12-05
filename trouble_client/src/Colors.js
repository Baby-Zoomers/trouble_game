/** Colors used in the Trouble App */
export const TroubleColors = {
    yellow: "#F2C94C",
    yellowLight: "#fffc7d",
    yellowDark: "#bc9914",
    red: "#EB5757",
    redLight: "#ff8984",
    redDark: "#b3202e",
    green: "#27AE60",
    greenLight: "#64e18e",
    greenDark: "#007d34",
    blue: "#2f80ed",
    blueLight: "#73afff",
    blueDark: "#0055ba",
    ringHighlight: "#FF9800",
    blueGray: "#d0e0f2"
}

/** Alias for the player colors */
export const PlayerColors = {
    red: 'red',
    yellow: 'yellow',
    blue: 'blue',
    green: 'green',
}

/** Alias for the pawn/piece colors */
export const PawnColors = {
    red: TroubleColors.redLight,
    yellow: TroubleColors.yellowLight,
    blue: TroubleColors.blueLight,
    green: TroubleColors.greenLight,
}

/**
 * Return the dark variant of a player color
 * @param {string} one of [PlayerColors.red, PlayerColors.blue, PlayerColors.green, PlayerColors.yellow] 
 */
export function getPlayerColorDark(color){
    switch(color){
        case PlayerColors.red: return TroubleColors.redDark;
        case PlayerColors.yellow: return TroubleColors.yellowDark;
        case PlayerColors.blue: return TroubleColors.blueDark;
        case PlayerColors.green: return TroubleColors.greenDark;
        default: return '#FFFFFF';
    }
}

/**
 * Return the midtone variant of a player color
 * @param {string} one of [PlayerColors.red, PlayerColors.blue, PlayerColors.green, PlayerColors.yellow] 
 */
export function getPlayerColorMidtone(color){
    switch(color){
        case PlayerColors.red: return TroubleColors.red;
        case PlayerColors.yellow: return TroubleColors.yellow;
        case PlayerColors.blue: return TroubleColors.blue;
        case PlayerColors.green: return TroubleColors.green;
        default: return '#FFFFFF';
    }
}

/**
 * Return the light variant of a player color
 * @param {string} one of [PlayerColors.red, PlayerColors.blue, PlayerColors.green, PlayerColors.yellow] 
 */
export function getPlayerColorLight(color){
    switch(color){
        case PlayerColors.red: return TroubleColors.redLight;
        case PlayerColors.yellow: return TroubleColors.yellowLight;
        case PlayerColors.blue: return TroubleColors.blueLight;
        case PlayerColors.green: return TroubleColors.greenLight;
        default: return '#FFFFFF';
    }
}

/**
 * Return the correct pawn color for the player
 * @param {Player} a Player object
 */
export function getPawnColor(player){
    return PawnColors[player.color];
}
