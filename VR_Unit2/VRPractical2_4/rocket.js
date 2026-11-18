class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.1;

        this.obj = document.createElement("a-entity");
        this.obj.setAttribute("position", {x:x, y:y, z:z});

        let roof = document.createElement("a-cone");
        roof.setAttribute("position", {x:0, y:0, z:0});
        roof.setAttribute("radius-bottom", 0.5);
        roof.setAttribute("height", 1);
        roof.setAttribute("color", "red");
        this.obj.append(roof);

        let body = document.createElement("a-cylinder");
        body.setAttribute("position", {x:0, y:-1.5, z:0});
        body.setAttribute("radius", 0.5);
        body.setAttribute("height", 2);
        body.setAttribute("color", "grey");
        this.obj.append(body);

        let bottom = document.createElement("a-cone");
        bottom.setAttribute("position", {x:0, y:-3.5, z:0});
        bottom.setAttribute("radius-bottom", 0.25);
        bottom.setAttribute("height", 2);
        bottom.setAttribute("color", "orange");
        this.obj.append(bottom);
        
        scene.append(this.obj);
    }

    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
}