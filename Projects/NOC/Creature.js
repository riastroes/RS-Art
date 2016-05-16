function Creature(){
  this.pos = createVector(random(width), random(height));
  this.walker = new Walker(this.pos);
  this.style(0);

}
Creature.prototype.style = function(nr){
  switch(nr){
    case 0:{
      //black and white
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[1];
      this.tickness = 1;
      break;
    }

  }
}
Creature.prototype.draw = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  ellipse(this.pos.x, this.pos.y, 30,30);
}
Creature.prototype.move = function(speed){
  this.walker.randommove(speed);
}
Creature.prototype.update = function(){
  this.walker.update();
}
