function Chain(pos, difx, dify, plength){
  this.difx = difx;
  this.dify = dify;
  this.length = plength;
  this.p = [];
  append(this.p,pos);
  for(var i = 1; i < this.length; i++){
    append(this.p, createVector(this.p[i-1].x  + difx , this.p[i-1].y +  random(-dify, dify)));
  }

}
Chain.prototype.addForce = function(force, margin){
    if(force.force > 0 && force.radius > 0){
      for(var pos in this.p){
        if(dist(this.p[pos].x, this.p[pos].y, force.pos.x, force.pos.y) < force.radius){
          var psub = p5.Vector.sub(this.p[pos], force.pos);
          psub.normalize();
          psub.mult(force.force);
          if(this.checkBorders(this.p[pos], psub, margin)){
            this.p[pos].add(psub);
          }

        }
      }
    }
  }
Chain.prototype.checkBorders = function(pos, psub, margin){
  var ok = false;
  var p = pos.copy();
  p.add(psub);
  if(p.x > margin && p.x < width-margin && p.y > margin && p.y < height-margin){
    ok = true;
  }
  return ok;
}
Chain.prototype.draw = function(){


 for(var i = 0; i < this.p.length -1; i++){
    rect(this.p[i].x, this.p[i].y,
         this.p[i+1].x, this.p[i+1].y);
  }
}
Chain.prototype.draw2 = function(){

  beginShape();
 for(var i = 0; i < this.p.length; i++){
    curveVertex(this.p[i].x, this.p[i].y);
  }
  endShape();
}
