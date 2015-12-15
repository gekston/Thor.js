var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]);
var lightY = parseInt(inputs[1]);
var initialTX = parseInt(inputs[2]);
var initialTY = parseInt(inputs[3]);
var thorY, thorX;
// game loop
while (true) {
    var remainingTurns = parseInt(readline());
if (thorY = lightY) {
        if (thorX < lightX) {
            print('E');
            thorX = +1; 
        } else { 
            print('W') 
            thorX = -1;
        }
    } else if (thorY > lightY) {
        if (thorX == lightX) {
            print('N');
            thorY = -1;
        } else if (thorX > lightX) {
            print('NW');
            thorX = -1;
            thorY = -1;
        } else {
            print('NE');
            thorX = +1;
            thorY = -1;
        }
    } else if (thorY < lightY) {
        if (thorX == lightX) {
            print('S');
            thorY = +1;
        } else if (thorX > lightX) {
            print('SW');
            thorX = -1;
            thorY = +1;
        } else {
            print('SE');
            thorX = +1;
            thorY = +1;
        }
    }
  }
