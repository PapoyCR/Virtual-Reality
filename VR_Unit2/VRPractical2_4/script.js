let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 


  loop();
})

function loop(){  
  for(let rocket of rockets){
    rocket.launch();
  }
  
  window.requestAnimationFrame( loop );
}
