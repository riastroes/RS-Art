function Group(max){
  this.creatures = [];
  this.max = max;
  this.leader = -1;
  this.init();

}
Group.prototype.init  = function(){
  for(var i = 0; i < this.max; i++){
    append(this.creatures, new Creature());
  }
  this.chooseLeader();
}

Group.prototype.chooseLeader = function(){
  //leader is the one that is closest to the center
  var center = createVector(width/2, height/2);
  var disttocenter = width;
  this.leader = -1;
  for(var i = 0; i < this.creatures.length; i++){
    var mydist =   p5.Vector.dist(center, this.creatures[i].pos)
    if(mydist < disttocenter){
      disttocenter = mydist;
      this.leader = i;
    }
  }
  if(this.leader>=0){
    for(var i = 0; i < this.creatures.length; i++){
      if(this.leader === i){
        this.creatures[i].leader = true;
      }
      else{
        this.creatures[i].leader = this.creatures[this.leader];
      }
    }
  }
}
Group.prototype.chooseAdventurestLeader = function(){
  //leader is the one farest away from the others
  var totdistance = [];
  this.leader = -1;

  for(var i = 0; i < this.creatures.length; i++){
    totdistance[i] = 0;
    for(var j = 0; j < this.creatures.length; j++){
      totdistance[i] += p5.Vector.dist(this.creatures[i].pos,this.creatures[j].pos);
    }
  }
  var maxdistance =0;
  for(var i = 0; i < totdistance.length; i++){
    if(totdistance[i] > maxdistance){
      this.leader = i;
      maxdistance = totdistance[i];
    }
  }
  if(this.leader>=0){
    for(var i = 0; i < this.creatures.length; i++){
      if(this.leader === i){
        this.creatures[i].leader = true;
      }
      else{
        this.creatures[i].leader = this.creatures[this.leader];
      }
    }
  }
}
Group.prototype.getLeader = function(){
  return this.creatures[this.leader];
}
Group.prototype.update = function(speed){
  this.getLeader().moveRandom(speed);
  for(var i = 0; i < this.creatures.length; i++){
      this.creatures[i].update( speed);
  }
}
Group.prototype.createBodyVectors = function(){
  var center = this.getLeader().pos;
  var body = [];

  for(var i = 0; i < this.creatures.length; i++){

      var pos = this.creatures[i].pos.copy();
      pos.sub(center);
      append(body, pos);
  }
  return body;
}
Group.prototype.shrink = function(){
  for(var i = 0; i < this.creatures.length; i++){
    if(this.creatures[i].leader != true){
      var heading = p5.Vector.sub(this.creatures[i].leader.pos,this.creatures[i].pos);
      heading.mult(0.03);
      this.creatures[i].pos.add(heading);
    }
  }
}
Group.prototype.constrainVelocity = function(){
  for(var i = 0; i < this.creatures.length; i++){
    if(this.creatures[i].leader != true){
      this.creatures[i].walker.velocity.x = constrain(this.creatures[i].walker.velocity.x,0,0.2);
      this.creatures[i].walker.velocity.y = constrain(this.creatures[i].walker.velocity.y,0,0.2);
    }
  }
}
Group.prototype.style = function(nr){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].style(nr);
  }
}
Group.prototype.drawLines = function(){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].drawLines();
  }
}
Group.prototype.draw3 = function(){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].style(3);
    this.creatures[i].draw2();
  }
}
Group.prototype.draw4 = function(){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].style(2);
    this.creatures[i].draw2();
  }
}
Group.prototype.draw5 = function(shiftx){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].style(3);
    this.creatures[i].draw3(shiftx);
  }
}
Group.prototype.drawBlobber = function(){
  var leader = this.getLeader();
  var blobber = new Blobber();
  blobber.initWithVectors(leader.pos, this.createBodyVectors());
  blobber.style(leader.strokecolor,leader.fillcolor, leader.thickness);
  blobber.draw();

}
