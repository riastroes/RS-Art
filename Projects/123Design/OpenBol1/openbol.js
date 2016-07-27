function OpenBol(size){
  this.nr = 0;
  this.size = size;
  this.style(1);

}
OpenBol.prototype.style = function(nr){
  switch(nr){
    case 0:{
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[2];
    this.thickness = 1;
    break;
    }
    case 1:{
    this.fillcolor = app.pal.randomImgColor();
    this.strokecolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
    }
    case 2:{
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[3];
    this.thickness = 1;
    break;
    }
    case 3:{
    this.fillcolor = app.pal.colors[1];
    this.strokecolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    }
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}
OpenBol.prototype.drawSphere = function(pos,nr){


  switch(nr){
    case 0:{
    push();
      this.style(0);
      translate(pos.x,pos.y,pos.z);
      sphere(150);
      sphere(100);
    pop();

    break;
    }
  }
}
OpenBol.prototype.drawCone = function(pos, nr){

  switch(nr){
    case 0:{
    push();
      this.style(2);
      translate(pos.x,pos.y,pos.z);
      cone(100,200);
    pop();

    break;
    }
  }
}
