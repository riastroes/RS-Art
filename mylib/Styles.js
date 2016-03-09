function Style(){


}

Style.prototype.text = function( size, align, acolor){
  textSize(size);
  textAlign(align);
  fill(acolor);
  //noStroke();
  //strokeWeight(0);
};
Style.prototype.image = function( alignmode , blendmode){ 
  imageMode(alignmode);
  if(blendmode == ""||blendmode == null || blendmode == false){
    blendMode(BLEND);
  }
  else{
    blendMode(blendmode);
  }
};
Style.prototype.set = function(  strokecolor, fillcolor, strokeweight){
  if(strokecolor == ""||strokecolor == null || strokecolor == false){
    noStroke();
  }
  else{
    stroke(strokecolor);
  }
  if(fillcolor == ""||fillcolor == null || fillcolor == false){
    noFill();
  }
  else{
    fill(fillcolor);
  }
  strokeWeight(strokeweight);
  rectMode(CORNER);
};
Style.prototype.pg = function(pg, strokecolor, fillcolor, strokeweight){
  this.set(strokecolor, fillcolor, strokeweight);
  if(strokecolor == ""||strokecolor == null || strokecolor == false){
    pg.noStroke();
  }
  else{
    pg.stroke(strokecolor);
  }
  if(fillcolor == ""||fillcolor == null || fillcolor == false){
    pg.noFill();
  }
  else{
    pg.fill(fillcolor);
  }
  pg.strokeWeight(strokeweight);
  pg.rectMode(CORNER);
  pg.imageMode(CORNER);
}
