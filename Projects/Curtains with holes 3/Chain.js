function Chain(pos, difx, dify, plength){
  this.difx = difx;
  this.dify = dify;
  this.length = plength;
  this.p = [];
  append(this.p,pos);
  for(var i = 1; i < this.length; i++){
    append(this.p, createVector(this.p[i-1].x + random(-difx, difx), this.p[i-1].y + dify));
  }
}
Chain.prototype.addForce = function(force){
    if(force.force > 0 && force.radius > 0){
      for(var pos in this.p){
        if(dist(this.p[pos].x, this.p[pos].y, force.pos.x, force.pos.y) < force.radius){
          var psub = p5.Vector.sub(this.p[pos], force.pos);
          psub.normalize();
          psub.mult(force.force);
          this.p[pos].add(psub);
        }
      }
    }
  }
Chain.prototype.draw = function(){
  fill(0,100,0,10);
  stroke(0);
  rectMode(CORNERS);
 for(var i = 0; i < this.p.length -1; i++){
    rect(this.p[i].x, this.p[i].y,
         this.p[i+1].x, this.p[i+1].y);
  }
}
