// Rover Object Goes Here 
let rover = {
  direction = "N",
  x: 0,
  y: 0,
}

//Iteration 2

function turnLeft(rover){
  if (rover.direction == "N"){
  console.log("Direction is W");
} else if(rover.direction == "W"){
  rover.direction = "S";
  console.log("Direction is S");
}else if(rover.direction == "S"){
  rover.direction = "E";
}else if(rover.direction == "E"){
  rover.direction = "N";
  }
}
function turnRight(rover){
  if (rover.direction == "N"){
  rover.direction = "E"
  console.log("Direction is E");
}else if(rover.direction == "E"){
  rover.direction = "S"
  console.log("Direction is S");
}else if(rover.direction == "S"){
  rover.direction = "W"
  console.log("Direction is W");
}else if(rover.direction == "W"){
  rover.direction = "N"
  console.log("Direction is N");
  }
}

function moveForward(rover){
  if (rover.direction == "N"){
    rover.y--;
    console.log(`X ${rover.x}, Y: ${rover.y}`);
  }else if (rover.direction == "S"){
    rover.y++;
    console.log(`X ${rover.x}, Y: ${rover.y}`);
  }else if (rover.direction == "E"){
    rover.x++;
    console.log(`X ${rover.x}, Y: ${rover.y}`);
  }else if (rover.direction == "W"){
    rover.x--;
    console.log(`X ${rover.x}, Y; ${rover.y}`);
  }
}

  function commands(steps){
    // i = 0 -> l => turnLeft()
    // i = 1 -> l => turnLeft()
    // i = 2 -> f => moveForward()
    // i = 3 -> f => moveForward()
    // i = 4 -> r => moveRight()
    // i = 5 -> r => moveRight()
    for(let i = 0; i < steps.length; i++){
      console.log(steps.charAt(i));
      turnLeft(rover);
    }if(steps.charAt(i) == "r"){
      turnRight(rover);
    }else if(steps.charAt(i) == "l"){
      turnLeft(rover);
    }else if(steps.charAt(i) == "f"){
      turnForward(rover);
    }
    //Push to travel log
    rover.travelLog.push(steps.charAt(i));

  }
  console.log("Travel Log:" + rover.travelLog);


