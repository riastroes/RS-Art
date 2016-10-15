function Force(pos, radius, force){
  this.pos = pos.copy();
  this.startradius = radius;
  this.radius = radius;
  this.startforce = force;
  this.force = force;
}
Force.prototype.change = function(change){
  this.radius -= change;
  this.force -= (this.force / this.radius) * change;

  if(this.radius <= 0){ //change position
    this.pos = createVector(random(width), random(height));
    this.radius = this.startradius;
    this.force = this.startforce;
  }

}
Force.prototype.show = function(){
  noFill();
  stroke(0);
  strokeWeight(this.force);
  ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
}
