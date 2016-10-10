function Chain(start,distance, length,  min , max, margin, conditionnr){
  this.pos =[];
  this.pos[0] = start.copy();
  this.distance = distance;
  this.margin = margin;
  for( var i = 0; i < length; i++){
    this.add(min,max, conditionnr);
  }

}
Chain.prototype.add = function(min,max, conditionnr){
  var newpos;
  var found = false;
  var trycounter = 0;
  while(!found && trycounter <100){
    newpos= app.posOnPie(createVector(0,0),1,min, max,10, app.randomInt(10));
    newpos.mult(this.distance);
    newpos.add(this.pos[this.pos.length-1]);
    if(newpos.x > this.margin && newpos.x < width-this.margin &&
       newpos.y > 0 && newpos.y < height-this.margin){
         found = true;
         break;
       }
    trycounter++;
  }
  if(found){
    append(this.pos,newpos);
  }
}
Chain.prototype.checkCondition = function(nr, pos){
  var isOk = true;
  switch(nr){
    case 0:{
      //distance to hole < radius
      this.center = createVector(width/2, height/2);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 20){
        isOk = false;
      }
      this.center = createVector(100, 100);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 70){
        isOk = false;
      }
      this.center = createVector(500, 150);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 50){
        isOk = false;
      }
      this.center = createVector(650, height-75);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 30){
        isOk = false;
      }
      this.center = createVector(850, 75);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 40){
        isOk = false;
      }
      this.center = createVector(1100, 600);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 100){
        isOk = false;
      }
      break;
    }
  }
  return isOk;
}
Chain.prototype.show = function(){

  ellipse(this.pos[0].x,this.pos[0],10,10);
  for(var i = 1; i < this.pos.length; i++){
    
    line(this.pos[i-1].x,this.pos[i-1].y,this.pos[i].x,this.pos[i].y)
    ellipse(this.pos[i].x,this.pos[i],10,10)
  }
}
