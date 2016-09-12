function Cell(minsize, maxsize){
  this.blob;
  this.enging;
  this.minsize = minsize;
  this.maxsize = maxsize;
  this.attacking = false;

}
Cell.prototype.init = function(pos){
  this.pos = pos;
  this.blob = new Blobber();
  //this.blob.init(pos, corners, minwidth, maxwidth, minheight, maxheight)
  this.blob.init(this.pos, 4,this.minsize,this.maxsize,this.minsize,this.maxsize);
  this.engine = new Engine();
  this.engine.position = this.pos;
  this.blob.position = this.pos;
  if(this.attacking){
    this.style(2);
  }
  else{
    this.style(1);
  }


}
Cell.prototype.style = function(nr){
  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.tint( app.pal.colors[0],10);
    this.thickness = 0.1;
    this.blob.style(this.strokecolor, this.fillcolor, this.thickness);
    break;
    case 1:
    this.strokecolor = app.pal.randomImgColor();
    this.fillcolor = app.pal.tint(  app.pal.randomImgColor(),10);
    this.thickness = 0.1;
    this.blob.style(this.strokecolor, this.fillcolor, this.thickness);
    break;
    case 2:
    this.strokecolor = app.pal.randomImgColor();
    this.fillcolor = 0;
    this.thickness = 0.1;
    this.blob.style(this.strokecolor, this.fillcolor, this.thickness);
    break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}

Cell.prototype.update = function(attackers){
    this.engine.go(3);
    if(!this.attacking){
      this.engine.mindAttackers(attackers,1);
    }
    this.engine.update();

}
// Cell.prototype.follow = function(id, cells){
//   this.pos = cells[id].pos;
// }

Cell.prototype.draw = function(){

  this.blob.draw();

}
