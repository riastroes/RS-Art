function Hanger(pos, size, rot){
  this.pos = pos.copy();
  this.pos.x += size/2;
  this.center = pos.copy();
  this.size = size;
  this.color = app.pal.randomImgColor();
  this.growing = true;
  this.rot = rot;
  this.top = pos.copy();
  this.gravity = createVector(0,0.02);

}
Hanger.prototype.checkStatus = function(){
  if(this.size > 100 ){
    this.growing = false;
  }
  if(this.size < 30 ){
    this.growing = true;
  }
}
Hanger.prototype.update = function(pos){
  this.pos.x = pos.x;
  this.pos.y = pos.y;
  this.checkStatus();
  if(this.growing){
    this.size += 1;
  }
  else{
    this.size -= 1;
  }
 this.mass =  PI*(this.size/2)*(this.size/2); //opp circle
 this.force = this.gravity.copy();
 this.force.mult(this.mass);
 this.top = this.pos.copy();
 this.pos.add(this.force);
}
Hanger.prototype.style = function(nr){
  switch (nr) {
    case 0:
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = false;
      this.thickness = 1;
      break;
    case 1:
      this.strokecolor = false;
      this.fillcolor = app.pal.tint(this.color, 50);
      this.thickness = 1;
      break;
    case 2:
      this.strokecolor = false;
      this.fillcolor = app.pal.tint(app.pal.imgcolors[0], 100 - this.mass);
      this.thickness = 1;
      break;
    case 3:
      this.strokecolor = app.pal.tint(this.color, 30);;
      this.fillcolor = false;
      this.thickness = 1;
      break;
    default:

  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
Hanger.prototype.draw = function(){

  this.style(0);
  line(this.pos.x, this.pos.y - (this.size/2),this.top.x, this.top.y);
  this.style(1);
  ellipse(this.pos.x, this.pos.y, this.size, this.size);


  this.style(3);
  app.style.pg(app.project.paper.pg, this.strokecolor, this.fillcolor, this.thickness);
  app.project.paper.pg.ellipse(this.pos.x, this.pos.y, this.size, this.size);


}
