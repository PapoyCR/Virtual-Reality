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