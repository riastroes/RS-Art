function Walker(pos){
  //don't copy the pos, but use an pointer to the location of an object.
  this.location = pos;
  this.velocity = createVector(0,0) //snelheid
  this.acceleration = createVector(0,0)//versnelling
  this.direction = createVector(0,0)//direction
  this.speed = 0;

}

Walker.prototype.update = function(speed){
  //vector def: magnitude * direction
  this.speed = speed;
  this.acceleration = createVector(random(-1,1),random(-1,1));
  this.acceleration.mult(this.speed);
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
}
