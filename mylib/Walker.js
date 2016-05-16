function Walker(pos){
  //don't copy the pos, but use an pointer to the location of an object.
  this.location = pos;
  this.velocity = createVector(0,0) //snelheid
  this.acceleration = createVector(0,0)//versnelling
  this.direction = createVector(0,0)//direction
  this.speed = 0;

}
Walker.prototype.randomWalk = function(speed, size){
  var newlocation = this.location.copy();
  this.speed = speed;
  this.direction = createVector(random(-speed, speed), random(-speed, speed));
  this.direction.normalize();
  this.acceleration = this.direction.copy();
  this.acceleration.mult(this.speed);
  this.velocity.add(this.acceleration);
  newlocation.add(this.velocity);
  this.checkLocation(newlocation, size);
}

Walker.prototype.moveDir = function(dir, speed, size){
  var newlocation = this.location.copy();
  this.speed = speed;
  this.direction = dir.copy();
  this.direction.normalize();
  this.acceleration = this.direction.copy();
  this.acceleration.mult(this.speed);
  this.velocity.add(this.acceleration);
  newlocation.add(this.velocity);
  this.checkLocation(newlocation, size);
}
Walker.prototype.moveTo = function(pos, speed, size){
  //vector def: magnitude * direction
  var newlocation = this.location.copy();
  this.speed = speed;

  this.direction = pos.copy();
  this.direction.sub(this.location);
  this.direction.normalize();

  this.acceleration = this.direction.copy();
  this.acceleration.mult(this.speed);
  this.velocity.add(this.acceleration);
  newlocation.add(this.velocity);
  this.checkLocation(newlocation, size);
}
Walker.prototype.checkLocation = function(newlocation, size){
  if(app.posInRect(newlocation, size/2,size/2, width - size, height - size)){
    //don't copy newlocation to this.location, because then the pointer to pos of the object is lost.
    this.location.x = newlocation.x;
    this.location.y = newlocation.y;
  }
  else{
    this.velocity = createVector(0,0);
    this.direction.x = - this.direction.x;
    this.direction.y = - this.direction.y;
  }
}
