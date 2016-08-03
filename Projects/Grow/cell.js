function Cell(){


}
Cell.prototype.init = function(pos){
  this.pos = pos;
  this.blob = new Blobber();
  //this.blob.init(pos, corners, minwidth, maxwidth, minheight, maxheight)
  this.blob.init(this.pos, 4,50,100,50,100);
}
Cell.prototype.style = function(nr){
  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.tint( app.pal.colors[0],10);
    this.thickness = 0.1;
    this.blob.style(this.strokecolor, this.fillcolor, this.thickness);
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}

Cell.prototype.update = function(){
 this.pos.x += random(-10,10);
 this.pos.y += random(-10,10);
}

Cell.prototype.draw = function(){
  this.style(0);
  this.blob.draw();
}
