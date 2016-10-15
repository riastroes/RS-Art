function Chain(start,distance, length,  min , max, margin){
  this.pos =[];
  this.start = start;
  this.pos[0] = start.copy();
  this.distance = distance;
  this.min = min;
  this.max = max;
  this.margin = margin;
  this.init(length);

}
Chain.prototype.init = function(length){
  this.pos =[];
  this.pos[0] = this.start.copy();
  for( var i = 0; i < length; i++){
    this.add(this.min,this.max, this.margin);
  }
}
Chain.prototype.add = function(){
  this.newpos;
  this.found = false;
  this.trycounter = 0;
  while(!this.found && this.trycounter <10){
    this.newpos= app.posOnPie(createVector(0,0),1,this.min, this.max,10, Math.random()*10);
    this.newpos.mult(this.distance);
    this.newpos.add(this.pos[this.pos.length-1]);
    if(this.checkMargin(this.newpos, this.margin)){
         this.found = true;
         break;
    }
    this.trycounter++;
  }
  if(this.found){
    append(this.pos,this.newpos);
  }
}
Chain.prototype.addForces = function(forces){
  var dis, len;
  for( var j = 0; j < this.pos.length; j++){
      for( var i = 0; i < forces.length; i++){
      dis = p5.Vector.sub(forces[i].pos, this.pos[j]);
      len = mag(dis.x, dis.y);
      if(len  < forces[i].radius && forces[i].radius >10){
        dis.normalize();
        dis.mult(len/forces[i].force);
        this.pos[j].add(dis);
        break;
      }
    }
  }
}
Chain.prototype.checkMargin = function(pos){
  this.isOk = false;
  if(  pos.x > this.margin && pos.x < width-this.margin &&
       pos.y > this.margin && pos.y < height-this.margin ){
    this.isOk = true;
  }
  return this.isOk;
}

Chain.prototype.show = function(){
  this.style(0);
  //ellipse(this.pos[0].x,this.pos[0].y,10,10);
  for(var i = 1; i < this.pos.length; i++){
    line(this.pos[i-1].x,this.pos[i-1].y,this.pos[i].x,this.pos[i].y);
    //ellipse(this.pos[i].x,this.pos[i].y,10,10);
  }
}
Chain.prototype.svg = function(){

  beginShape();
  for(var i = 0; i < this.pos.length; i++){
    if(this.checkCondition(1, this.pos[i])){
          vertex(this.pos[i].x, this.pos[i].y);
    }
  }
  endShape();
}
Chain.prototype.style = function(nr,a){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
