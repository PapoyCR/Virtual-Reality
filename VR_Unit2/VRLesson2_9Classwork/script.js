let maze = [
  "xxxxxxxx-xxxxxxxxxxxxx",
  "x--------------T-----x",
  "x--------------T-----x",
  "x----ooooo-----T-----x",
  "x--------------T-----x",
  "x--------------------x",
  "xxxxxxxxxxxxxxx-xxxxxx",
  "x--------------------x",
  "x-xxxxxxxxxxxxx------x",
  "x-x--TTTTTTTT--------x",
  "x-x------------------x",
  "x-xxxxxxxxxxxxxooxxxxx",
  "x-xxxxxxxxxxxxxooxxxxx",
  "x-xxxxxxxxxxxxxooxxxxx",
  "x-xxxxxxxxxxxxxooxxxxx",
  "x-xxxxxxxxxxxxxooxxxxx",
  "x-xxxxxxxxxxxxxxxxxxxx",
  "x-xxxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})