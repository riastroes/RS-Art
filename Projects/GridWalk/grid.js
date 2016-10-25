function Grid(cellwidth, cellheight,minmarge){
  this.cellWidth = cellwidth;
  this.cellHeight = cellheight;
  this.marge = minmarge;
  this.pos = [];
  this.init();
}
Grid.prototype.init = function(){
  this.wmax = parseInt((width-(2*this.marge))/this.cellWidth);
  this.hmax = parseInt((height-(2*this.marge))/this.cellHeight);
  var wrest = (width-(2*this.marge)) - (this.wmax * this.cellWidth);
  var hrest = (height-(2*this.marge)) - (this.hmax * this.cellHeight);
  this.lmarge = this.marge + (wrest/2);
  this.rmarge = this.marge + (wrest/2);
  this.tmarge = this.marge + (hrest/2);
  this.bmarge = this.marge + (hrest/2);


  for(var h = 0; h < this.hmax; h++){
    for(var w = 0; w < this.wmax; w++){
    append(this.pos, createVector(this.lmarge + (this.cellWidth/2) + (w * (this.cellWidth)),
                           this.tmarge +  + (this.cellWidth/2) + (h * (this.cellHeight))));

    }
  }



}
Grid.prototype.applyForce = function(pos, force){
  if(force.force > 0 && force.radius > 0){

      if(dist(pos.x, pos.y, force.pos.x, force.pos.y) < force.radius){
        var psub = p5.Vector.sub(pos, force.pos);
        psub.normalize();
        psub.mult(force.force);
        pos.add(psub);
      }
    }
  }
  //
  // if(force.force > 0 && force.radius > 0){
  //   for(var p in this.pos){
  //     if(dist(this.pos[p].x, this.pos[p].y, force.pos.x, force.pos.y) < force.radius){
  //       var psub = p5.Vector.sub(this.pos[p], force.pos);
  //       psub.normalize();
  //       psub.mult(force.force);
  //       this.pos[p].add(psub);
  //     }
  //   }
  // }
//}
Grid.prototype.next = function(i){
  var j = i;
  var r = app.randomInt(0,3);
  switch(r){
    case 0:{
      //right
      j = i + 1;
      break;
    }
    case 1:{
      //left
      j = i - 1;
      break;
    }
    case 2:{
      //up
      j = i - this.wmax;
      break;
    }
    case 3:{
      //down
      j =  i + this.wmax;
      break;
    }
  }
  if(j < 0 || j >= (this.wmax * this.hmax)){
    j = i;
  };
  return j;

}
Grid.prototype.show = function(){
  for(var p in this.pos){
      fill( 45,45,190)
      ellipse(this.pos[p].x, this.pos[p].y, this.cellWidth, this.cellHeight);
  }
}
