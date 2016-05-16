function Group(max){
  this.creatures = [];
  this.max = max;
  this.init();
  this.leader = -1;
}
Group.prototype.init  = function(){
  for(var i = 0; i < this.max; i++){
    append(this.creatures, new Creature());
  }
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
      if(i == this.leader){
        this.creatures[i].leader = true;
      }
      else{
        this.creatures[i].leader = false;
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
      if(i == this.leader){
        this.creatures[i].leader = true;
      }
      else{
        this.creatures[i].leader = false;
      }
    }
  }
}
Group.prototype.getLeader = function(){
  return this.creatures[this.leader];
}
Group.prototype.update = function(){
  this.getLeader().moveRandom(0.01);
  for(var i = 0; i < this.creatures.length; i++){

      this.creatures[i].update(this.getLeader(), 0.01);

  }

}
Group.prototype.createBodyVectors = function(){
  var center = this.creatures[this.leader].pos;
  var body = [];

  for(var i = 0; i < this.creatures.length; i++){
    if(!this.creatures[i].leader){
      var pos = this.creatures[i].pos.copy();
      pos.sub(center);
      append(body,pos);

    }
  }
  return body;
}
Group.prototype.draw = function(){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].draw();
  }
}
Group.prototype.draw2 = function(){
  var leader = this.creatures[this.leader];
  var blobber = new Blobber();
  blobber.initWithVectors(leader.pos, this.createBodyVectors());
  blobber.style(leader.strokecolor,leader.fillcolor, leader.thickness);
  blobber.draw();
  
}
