function Style(){

}
Style.prototype.reset = function(){
  stroke(app.pal.colors[0]);
  fill(app.pal.colors[1]);
  strokeWeight(1);
  rectMode(CORNER);
  blendMode(BLEND);
};
Style.prototype.text = function( size, align, acolor){
  textSize(size);
  textAlign(align);
  fill(acolor);
  noStroke();

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
Style.prototype.set = function(  strokecolor, fillcolor, strokeweight, rectmode, blendmode) {
  if (strokecolor == "" || strokecolor == null || strokecolor == false) {
    noStroke();
  }
  else {
    stroke(strokecolor);
  }
  if (fillcolor == "" || fillcolor == null || fillcolor == false) {
    noFill();
  }
  else {
    fill(fillcolor);
  }
  strokeWeight(strokeweight);
  if (typeof(rectmode) !== "undefined") {
    rectMode(rectmode);
  }
  if (typeof(blendmode) !== "undefined") {
    blendMode(blendmode);
  }
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
};
