function Chain(start,distance, length,  min , max, margin){
  this.pos =[];
  this.pos[0] = start.copy();
  this.distance = distance;
  for( var i = 0; i < length; i++){
    this.add(min,max, margin);
  }

}
Chain.prototype.add = function(min,max, margin){
  var newpos;
  var found = false;
  var trycounter = 0;
  while(!found && trycounter <100){
    newpos= app.posOnPie(createVector(0,0),1,min, max,10, app.randomInt(10));
    newpos.mult(this.distance);
    newpos.add(this.pos[this.pos.length-1]);
    if(this.checkMargin(newpos, margin)){
         found = true;
         break;
    }
    trycounter++;
  }
  if(found){
    append(this.pos,newpos);
  }
}
Chain.prototype.checkMargin = function(pos, margin){
  var isOk = false;
  if(  pos.x > margin && pos.x < width-margin &&
       pos.y > margin && pos.y < height-margin ){
    isOk = true;
  }
  return isOk;
}

Chain.prototype.show = function(){


  for(var i = 1; i < this.pos.length; i++){

    line(this.pos[i-1].x,this.pos[i-1].y,this.pos[i].x,this.pos[i].y)
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
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;

    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = lerpColor(app.pal.colors[8],app.pal.colors[7], a);
    this.fillcolor = false;
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
