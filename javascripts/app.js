// Rover Object Goes Here Iteration 1
let rover = {
  direction = "N"
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
}else if(rover.direction == "E")
  rover.direction = "N";
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

function moveForward(rover){
  if (rover.direction == "N"){
  rover.direction = "S"
  console.log("Direction is S");
}else if(rover.direction == "S"){
  rover.direction = "N"
  console.log("Direction is N");
}else if(rover.direction == "W"){
  rover.direction = "E"
  console.log("Direction is E");
}else if(rover.direction == "E"){
  rover.direction = "W"
  console.log("Direction is W");
}

// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
