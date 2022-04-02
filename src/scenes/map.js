const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var dude;
var cursor;
var moveok;
var Xdegrees = 0;
var Ydegrees = 0;
var degrees = 0;
var angle = 0;
var timer = 0;
var Maxbullets = 100;
var Maxzombies = 10;//max amunition. there's still not a realoading system so keep this var with high number so we don't run out of ammo

var ground;
var world;
var isoY;
var isoX;

//set Score variables
var score = 0;
var scoreText;

var text;
var timerEvents = [];
var scoreMultiplicator = 1;


//create a group for the bullets
class BulletGroup extends Phaser.Physics.Arcade.Group {
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);

		// Initialize the group
		this.createMultiple({
			classType: Bullet,
			frameQuantity: Maxbullets, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'bullet'
		}) 
	}
    //will call the class bullet when triggered
    fireBullet(x, y, Yangle, Xangle) {
		// Get the first available sprite in the group
		const bullet = this.getFirstDead(false);
		if (bullet) {
			bullet.fire(x, y, Yangle, Xangle);
		}
	}
}

//bullet properties
class Bullet extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'bullet');

	}
    //fire bullets depending on the postion and angle (angle is calculate in the 'create' part of the scene)
    fire(x, y, Yangle, Xangle) {
		this.body.reset(x, y);
		this.setActive(true);
		this.setVisible(true);

		this.setVelocityY(Yangle*10);//multiplied by 3 so the bullets are faster
    this.setVelocityX(Xangle*10);//multiplied by 3 so the bullets are faster
	}

    preUpdate(time, delta) {
		super.preUpdate(time, delta);

		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
		}
	}


  //will call the class bullet when triggered
  fireBullet(x, y, Yangle, Xangle) {
    // Get the first available sprite in the group
    const bullet = this.getFirstDead(false);
    if (bullet) {
      bullet.fire(x, y, Yangle, Xangle);
    }
  }
}

class ZombiesGroup extends Phaser.Physics.Arcade.Group {
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);

		// Initialize the group
		this.createMultiple({
			classType: Zombies,
			frameQuantity: Maxzombies, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'zomb'
		}) 
	}
    //will call the class bullet when triggered
    ZombiesSpwan(x, y) {
		// Get the first available sprite in the group
		const zombie = this.getFirstDead(false);
		if (zombie) {
			zombie.Spawn(x, y);

		}
	}
}

class Zombies extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'zomb');
	}
    //fire bullets depending on the postion and angle (angle is calculate in the 'create' part of the scene)
    Spawn(x, y) {
		this.body.reset(x, y);
		this.setActive(true);
		this.setVisible(true);

		this.setVelocityY(30);//multiplied by 3 so the bullets are faster
    this.setVelocityX(30);//multiplied by 3 so the bullets are faster
	}

    preUpdate(time, delta) {
		super.preUpdate(time, delta);

		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
		}
	}

  //will call the class bullet when triggered
  ZombiesSpwan(x, y) {
    // Get the first available sprite in the group
    const zombie = this.getFirstDead(false);
    if (zombie) {
      zombie.Spawn(x, y);
    }
  }
}

class Dude extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'carac');
  }

  Move() {
    const UP = cursor.up.isDown;
    const DOWN = cursor.down.isDown;
    const LEFT = cursor.left.isDown;
    const RIGHT = cursor.right.isDown;

    if (UP) {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityY(-160)
    }
    else if (DOWN) {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityY(160)
    }
    else if (LEFT) {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityX(-160)
    }
    else if (RIGHT) {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityX(160)
    }
    else {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
    }
  }
}

class Map extends Phaser.Scene {
  constructor() {
    super({ key: "Map" });
    this.bulletGroup;
    this.ZombiesGroup;
  }
  //manage the click and trigger the shoot method
  addEvents() {
    this.input.on('pointerdown', pointer => {
      this.shootBullet();
    });
  }
  //trigger the shoot
  shootBullet() {
    this.bulletGroup.fireBullet(dude.x, dude.y, Ydegrees, Xdegrees);
    //screenShake
    this.input.on('pointerdown', function () {
      this.cameras.main.shake(100, 0.002);
    }, this);
    
  }

  updateCounter(){
    this.ZombiesGroup.ZombiesSpwan(Math.random() * 800, Math.random() * 500, Ydegrees, Xdegrees);
  }

  preload() {
    this.load.image('grass', 'src/assets/sprite/grass.png');
    this.load.image('gravel', 'src/assets/sprite/gravier.png');
    this.load.image('wall', 'src/assets/sprite/wall.png');
    this.load.image('carac', 'src/assets/sprite/cara.png');
    this.load.image('zomb', 'src/assets/sprite/zomb.png');
    this.load.image('bullet', 'src/assets/sprite/bullet.png');
    this.load.image('arche', 'src/assets/sprite/archeeliza.png');
    this.load.image('wheel', 'src/assets/sprite/wheel.png');
  }

  create () {
    this.cameras.main.setBounds(0, 0, 1080, 720);

    //dude = new Dude(this, sprite);
    //dude = this.physics.add.sprite(500, 500, new Dude(this, 500, 500));
    dude = this.physics.add.sprite(300, 300, 'carac');
    cursor = this.input.keyboard.createCursorKeys()
    dude.setDepth(1)
    this.bulletGroup = new BulletGroup(this);//create a bullet group
    this.ZombiesGroup = new ZombiesGroup(this);//create a bullet group
    this.ZombiesGroup.setDepth(1);
    this.bulletGroup.setDepth(1);

    //Camera settings
    this.cameras.main.startFollow(dude, true, 0.09, 0.09);
    this.cameras.main.setZoom(1.7);

    /*Print Score & Timer */
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    scoreText = this.add.text(16, 16, 'score: 0', style);
    scoreText.setDepth(2)

    text = this.add.text(32, 32);
    timerEvents.push(this.time.addEvent({ delay: Phaser.Math.Between(10000, 10000), loop: true }));
    text.setDepth(2);


    for (let i = 0; i < Maxzombies; i++) {
      this.updateCounter();
    }
    this.physics.add.collider(dude, this.ZombiesGroup, function () {

    }); 
 
    for (let r = 0; r < map.length; r++) {
      for (let c = 0; c < map[0].length; c++) {
        switch (map[r][c]) {
          case 0:
            ground = this.add.sprite(0, 0, 'gravel');
            break;
          case 1:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(600, 400, 'wheel');
            world.body.pushable = false;
            break;
          case 2:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(0, 0, 'arche');
            world.body.pushable = false;
            break;
          case 3:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(0, 0, 'arche');
            world.body.pushable = false;
            break;
          case 4:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(300,400, 'arche');
            world.body.pushable = false;
            break;
          case 5:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(0, 0, 'arche');
            world.body.pushable = false;
            break;
          case 6:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(0, 0, 'arche');
            world.body.pushable = false;
            break;
          default:
            break;
        }
        
        isoX = (550 + r * 20) - (0 + c * 20);
        isoY = ((-630 + r * 23) + (0 + c * 23)) / 2;

        this.physics.add.collider(dude, world, function () {
          moveok = false;
        });

        this.physics.add.overlap(this.ZombiesGroup, this.bulletGroup, function (ZombiesGroup, bulletGroup) {
          bulletGroup.destroy();
          ZombiesGroup.destroy();
          //update score
          score += 10*scoreMultiplicator;
          scoreText.setText('Score: ' + score);
        });
        // world = this.add.sprite(r * 50, c * 50, 'grass');
        Phaser.Display.Align.In.TopCenter(ground, this.add.zone(isoX, isoY, 0, 0));
      }
    }

		this.addEvents();//call the method to trigger the shoot

    //aiming
    this.input.on('pointermove', function (pointer) {
        angle = Phaser.Math.Angle.BetweenPoints(dude, pointer);//give an angle between the character and the pointer
        degrees = Phaser.Math.RadToDeg(angle);//change the angle in radians into degrees ( easier to work with )
        //calculate the angle of th X and Y axis. angle will be used for the shooting method so the bullet goes in the right direction

        if(degrees>0){
          Xdegrees = (-degrees)+90;
        }
        if(degrees<=0){
          Xdegrees= (degrees+90);
        }
        if(0<degrees && degrees<=90){
          Ydegrees = degrees;
        }
        if(90<degrees && degrees<=180){
          Ydegrees = -(degrees)+180;
        }
        if(0>degrees && degrees>-90){
          Ydegrees = degrees;
        }
        if(-90>degrees && degrees>=-180){
          Ydegrees = -(degrees+180);
        }
    }, this);
    world.setDepth(2)
  }


  update()
  {
    //dude.Move();
    if (cursor.up.isDown)
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityY(-160)
    }
    else if (cursor.down.isDown)
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityY(160)
    }
    else if (cursor.left.isDown)
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityX(-160)
    }
    else if (cursor.right.isDown)
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityX(160)
    }
    else 
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
    }

    /*zombs.forEach(function (zomb) {
      zomb.update()
    })*/
   
    this.ZombiesGroup.x += (dude.x - this.ZombiesGroup.x) * 0.01;
    this.ZombiesGroup.y += (dude.y - this.ZombiesGroup.y) * 0.01;

    //timer reinitialize
    var output = [];
    output.push('Event.progress: ' + timerEvents[0].getProgress().toString().substr(0, 4));
    if (timerEvents[0].getProgress().toString().substr(0, 4) == 0.9)  {
      console.log("+15 multiplicator");
      scoreMultiplicator += 1 ;
    }
    text.setText(output);
  }
}
