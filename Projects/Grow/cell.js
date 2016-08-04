function Cell(){
  this.blob;
  this.enging;

}
Cell.prototype.init = function(pos){
  this.pos = pos;
  this.blob = new Blobber();
  //this.blob.init(pos, corners, minwidth, maxwidth, minheight, maxheight)
  this.blob.init(this.pos, 4,50,100,50,100);
  this.engine = new Engine();
  this.engine.position = this.pos;
  this.blob.position = this.pos;
  this.isconnected = false;
  this.connect = -1;
  this.style(1);

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
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}

Cell.prototype.update = function(cells){
  if(!this.isconnected){

    this.engine.go(3);
    this.engine.update();
  }
  else{
    this.follow(this.connect, cells);
    this.engine.update();
  }



}
Cell.prototype.follow = function(id, cells){
  this.pos = cells[id].blob.pos[0];
}
Cell.prototype.connectTo =function(id, cells){

  for(var i = 0; i < cells.length; i++){
    if(id != i){
      if(this.isconnected){break;}
      else{
        var d = this.pos.dist(cells[i].pos);
        if( d <10){
          cells[i].engine.direction = this.engine.direction;
          this.isconnected = true;
          this.connect = i;
          this.blob.showPoint(0);
          cells[i].blob.showPoint(0);
          break;
        }

      }
    }
  }
}

Cell.prototype.draw = function(){

  this.blob.draw();
  //this.blob.showPoints();

}
