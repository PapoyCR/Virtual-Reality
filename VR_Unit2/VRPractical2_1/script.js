let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
    createCloud(x,10,z);
    createHouse(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

function createCloud(x, y, z){
  let cloud = document.createElement("a-entity");
  
  let puffs = document.createElement("a-sphere");
  puffs.setAttribute("color","grey");
  puffs.setAttribute("position","0 0 0");
  puffs.setAttribute("height","2");
  cloud.append( puffs );

  let puffs2 = document.createElement("a-sphere");
  puffs2.setAttribute("color","grey");
  puffs2.setAttribute("position","1 0 0");
  puffs2.setAttribute("height","2");
  cloud.append( puffs2 );

  let puffs3 = document.createElement("a-sphere");
  puffs3.setAttribute("color","grey");
  puffs3.setAttribute("position","0 0 1");
  puffs3.setAttribute("height","2");
  cloud.append( puffs3 );


  cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append( cloud )
}



/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/

function createHouse(x, y, z){
  let house = document.createElement("a-entity");
  
  let walls = document.createElement("a-box");
  walls.setAttribute("color","beige");
  walls.setAttribute("position","2 0.5 2");
  walls.setAttribute("height","1");
  house.append( walls );

  let roof = document.createElement("a-cone");
  roof.setAttribute("color","black");
  roof.setAttribute("position","2 1.25 2");
  roof.setAttribute("height","0.5");
  roof.setAttribute("segments-Radial", "4");
  roof.setAttribute("rotation","0 45 0");
  house.append( roof );

  let base = document.createElement("a-box");
  base.setAttribute("color", "gray");
  base.setAttribute("height","0.2");
  base.setAttribute("width","1.2");
  base.setAttribute("depth","1.2");
  base.setAttribute("position","2 0.1 2");
  house.append(base);


  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append( house )
}



function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 1.5 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 0.5 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



