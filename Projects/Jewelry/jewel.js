function Jewel(nr,size){
  this.nr = nr;
  this.size = size;
  this.style(0);

}
Jewel.prototype.style = function(nr){
  switch(nr){
    case 0:{
    this.fillcolor = app.pal.colors[0];
    this.strokecolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    }
    case 1:{
    this.fillcolor = app.pal.randomImgColor();
    this.strokecolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    }
  }
}
Jewel.prototype.draw = function(nr){
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
  switch(nr){
    case 0:{
    background(255);
    //texture(app.images[1]);

    rotateY(frameCount * 0.01);
    torus(this.size, 30);
    push();
    rotateZ(frameCount *0.01);
    rotateX(frameCount *0.01);
    translate(this.size,0);
    sphere(80);
    torus(140,10);
    pop();
    push();
    rotateZ(frameCount *0.01);
    rotateX(frameCount *0.01);
    translate(-this.size,0);
    sphere(80);
    torus(140,10);
    pop();
    push();
    rotateZ(frameCount *0.01);
    rotateY(frameCount *0.01);
    translate(0,this.size);
    sphere(80);
    torus(140,10);
    pop();
    this.style(1);
    app.style.set(this.strokecolor, this.fillcolor, this.thickness);
    //
    push();
    rotateZ(frameCount *0.01);
    rotateY(frameCount *0.01);
    translate(0,-this.size);
    sphere(80);
    torus(140,10);
    pop();


    //pop();

    break;
    }
  }
}
