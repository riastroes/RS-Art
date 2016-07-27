function Engine(){
  this.maxspeed = 0;
  this.direction = createVector(0,0);
  this.acceleration = createVector(0,0);
  this.velocity = createVector(0,0);
  this.position = createVector(0,0);
  this.maxforce = 0.05; // Maximum steering force
}
Engine.prototype.seek = function(target){

  var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired, this.velocity);
  steer.limit(this.maxforce); // Limit to maximum steering force
  return steer;
}
Engine.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}
Engine.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}
