function SpaceCollection(){
  this.spaces = [];


}
SpaceCollection.prototype.addSpace = function(){
  append(this.spaces, new Space());
}

SpaceCollection.prototype.draw = function(){

  for(var i = 0; i < this.spaces.length; i++){
    this.spaces[i].draw();
  }

}

/**************************  SPACE  ****************/
function Space(){
  this.space = [];

}
Space.prototype.add = function(i, x,y){
  this.space[i] = createVector(x,y);

}
Space.prototype.change = function(i,x,y){
  this.space[i].add(x,y);
}
Space.prototype.style = function(nr){

  switch(nr){
    case 0:
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.imgcolors[0];
      this.thickness = 1;
      break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
};

Space.prototype.draw = function(){
  beginShape();
  for(var i = 0; i < this.space.length; i++){
    vertex(this.space[i].x, this.space[i].y);
  }
  endShape();
}
