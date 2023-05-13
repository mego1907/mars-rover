// F -> Move forward on current heading
// B -> Move backwards on current heading
// L -> Rotate left by 90 degrees
// R -> Rotate right by 90 degrees

// Ex =>  FLFFFRFLB



class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  };

  moveForward() {
    switch(this.direction) {
      case "NORTH":
        this.y++;
        break;
      
      case "SOUTH":
        this.y--;
        break;

      case "EAST":
        this.x++;
        break;

      case "WEST":
        this.x--;
        break;
    }
  }

  moveBackwards() {
    switch (this.direction) {
      case "NORTH":
        this.y--;
        break;

      case "SOUTH":
        this.y++;
        break;

      case "EAST":
        this.x--;
        break;

      case "WEST":
        this.x++;
        break;
    }
  }

  rotateLeft() {
    switch (this.direction) {
      case "NORTH":     
        this.direction = "WEST";
        break;

      case "SOUTH":   
        this.direction = "EAST";
        break;

      case "EAST":    
        this.direction = "NORTH"
        break;

      case "WEST":   
        this.direction = "SOUTH"
        break;
    }
  }

  rotateRight() {
    switch(this.direction) {
      case "NORTH":     
        this.direction = "EAST";
        break;

      case "SOUTH":   
        this.direction = "WEST";
        break;

      case "EAST":    
        this.direction = "SOUTH"
        break;

      case "WEST":   
        this.direction = "NORTH"
        break;
    }
  }

  // => move the Rover 
  moveTheRover(command) {
    switch(command) {
      case "F":
        this.moveForward();
        break;

      case "B":
        this.moveBackwards();
        break;

      case "L":
        this.rotateLeft();
        break;

      case "R":
        this.rotateRight();
        break;
    }
  }

  // => loop over the commands and moveTheRover
  commands(commands) {
    for(let i = 0; i < commands.length; i++) {
      this.moveTheRover(commands[i])
    }

    console.log(`${this.x}, ${this.y} ${this.direction}`)
  } 

}
const obstacles = [[1, 4], [3, 5], [7, 4]];

const rover = new Rover(4, 2, "EAST", obstacles);  // => 6, 4 NORTH

rover.commands("FLFFFRFLB")
















// const dirs = {
//   NORTH: "NORTH",
//   SOUTH: "SOUTH",
//   EAST: "EAST",
//   WEST: "WEST"
// }


// class Rover {
//   constructor(x, y, direction) {
//     this.x = x;
//     this.y = y;
//     this.direction = direction;
//   }

//   moveForward() {
//     switch (this.direction) {
//       case dirs.NORTH:
//         this.y++;
//         break;

//       case dirs.SOUTH:
//         this.y--;
//         break;

//       case dirs.EAST:
//         this.x++;
//         break;

//       case dirs.WEST:
//         this.x--;
//         break;
//     }
//   }

//   moveBackward() {
//     switch (this.direction) {
//       case dirs.NORTH:
//         this.y--;
//         break;
      
//       case dirs.SOUTH:
//         this.y++;
//         break;
      
//       case dirs.EAST:
//         this.x--;
//         break;

//       case dirs.WEST:
//         this.x++;
//         break;
//     }
//   }

//   rotateLeft() {
//     switch (this.direction) {
//       case dirs.NORTH:
//         this.direction = "WEST"
//         break;

//       case dirs.SOUTH:
//         this.direction = "EAST";
//         break;

//       case dirs.EAST:
//         this.direction = "NORTH";
//         break;

//       case dirs.WEST:
//         this.direction = "SOUTH";
//         break;
//     }
//   }

//   rotateRight() {
//     switch (this.direction) {
//       case dirs.NORTH:
//         this.direction = "EAST"
//         break;

//       case dirs.SOUTH:
//         this.direction = "WEST";
//         break;

//       case dirs.EAST:
//         this.direction = "SOUTH";
//         break;

//       case dirs.WEST:
//         this.direction = "NORTH";
//         break;
//     }
//   }

//   executeCommand(command) {
//     switch(command) {
//       case "F":
//         this.moveForward();
//         break;

//       case "B":
//         this.moveBackward();
//         break;

//       case "L":
//         this.rotateLeft();
//         break;

//       case "R":
//         this.rotateRight();
//         break;
//     }
//   }

//   executeCommands (commands) {
//     for(let i = 0; i < commands.length; i++) {
//       this.executeCommand(commands[i])
//     }

//     console.log(`${this.x}, ${this.y}, ${this.direction}`)
//   }
// }


// const rover = new Rover(0, 0, "NORTH");

// rover.executeCommands("FLFFFRFLB");

