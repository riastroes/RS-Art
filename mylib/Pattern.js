function Pattern(patternwidth, patternheight){
  this.details = [];
  this.width = patternwidth;
  this.height = patternheight;
}
Pattern.prototype.checkDetails = function(){
  var pos, size, radius, detail;
  for(var i =0; i < this.details.length; i++){
    if(this.details[i].hasOwnProperty("position")){
      pos = this.details[i].position.copy();
      if(this.details[i].hasOwnProperty("size")){
        size = this.details[i].size;
      }
      else if(this.details[i].hasOwnProperty("radius")){
        size = this.details[i].radius * 2;
      }
      if(size > 0){
        if(dist(pos.x,pos.y,  0, pos.y) < size/2){
          this.details[i].overlappedX = true;
        }
        if(dist(pos.x,pos.y,  this.width, pos.y) < size/2){
          this.details[i].overlappedW = true;
        }
        if(dist(pos.x,pos.y,  pos.x, 0) < size/2){
          this.details[i].overlappedY = true;
        }
        if(dist(pos.x,pos.y,  pos.x, this.height) < size/2){
          this.details[i].overlappedH = true;
        }
      }

    }
  }
}
Pattern.prototype.drawOverlappingDetails = function(){
  for(var i =0; i < this.details.length; i++){
    if(this.details[i].overlappedX){
       this.draw(this.width, 0, this.details[i]);
       delete this.details[i].overlappedX;
    }
    if(this.details[i].overlappedW){
       this.draw(-this.width, 0, this.details[i]);
       delete this.details[i].overlappedW;
    }
    if(this.details[i].overlappedY){
       this.draw(0, this.height, this.details[i]);
       delete this.details[i].overlappedY;
    }
    if(this.details[i].overlappedH){
       this.draw(0, -this.height, this.details[i]);
       delete this.details[i].overlappedH;
    }
  }
}
Pattern.prototype.draw = function(x,y, detail){
  push();
    translate(x,y);
    app.style.set(detail.strokecolor, detail.fillcolor, detail.thickness);
    detail.draw();
  pop();
}
