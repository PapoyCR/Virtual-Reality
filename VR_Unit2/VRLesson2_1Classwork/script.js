window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
    let scene = document.querySelector("a-scene");
    let box = document.createElement("a-box");

    scene.append(box);
  //Challenge 2: Create a variable for <a-dodecahedron> and create it.

    let dh = document.createElement("a-dodecahedron");

    dh.setAttribute("position",{x: -2, y: 2, z: -1}, "color" ,{#008000});

    scene.append(dh);

  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color


  //Challenge 4: Add the <a-dodecahedron> to the scene


  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  
})