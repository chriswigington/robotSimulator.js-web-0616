'use strict';
const directions = ["north", "south", "east", "west"];

class Robot {
  constructor() {
    this.bearing = "north";
    this.coordinates = [0, 0];
  }

  orient(direction) {
    if (directions.includes(direction)) {
      this.bearing = direction;
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1] += 1;
    } else if (this.bearing === "south") {
      this.coordinates[1] -= 1;
    } else if (this.bearing === "east") {
      this.coordinates[0] += 1;
    } else if (this.bearing === "west") {
      this.coordinates[0] -= 1;
    }
  }

  place(object) {
    this.coordinates = [object.x, object.y];
    this.bearing = object.direction;
  }

  evaluate(commands) {
    let list = this.instructions(commands);
    for (let i = 0; i < list.length; i++) {
      if (list[i] === "turnLeft") {
        this.turnLeft();
      } else if (list[i] === "turnRight") {
        this.turnRight();
      } else if (list[i] === "advance") {
        this.advance();
      }
    }
  }

  instructions(commands) {
    commands = commands.split("");
    for (let i = 0; i < commands.length; i++) {
      if (commands[i] === "L") {
        commands[i] = "turnLeft"
      } else if (commands[i] === "R") {
        commands[i] = "turnRight"
      } else if (commands[i] === "A") {
        commands[i] = "advance"
      }
    }
    return commands
  }

  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east";
    } else if (this.bearing === "east") {
      this.bearing = "south";
    } else if (this.bearing === "south") {
      this.bearing = "west";
    } else if (this.bearing === "west") {
      this.bearing = "north";
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west";
    } else if (this.bearing === "west") {
      this.bearing = "south";
    } else if (this.bearing === "south") {
      this.bearing = "east";
    } else if (this.bearing === "east") {
      this.bearing = "north";
    }
  }
}