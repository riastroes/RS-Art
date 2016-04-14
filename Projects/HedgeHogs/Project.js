/**
 * Created by Ria Stroes on 15-3-2016.
 * Inspired by photo's of the hedgehog

 */
function Project(){
 //cols, rows, lmarge, tmarge, rmarge, bmarge
  this.grid = new Grid(5,5,(width-height)/2,10,(width-height)/2,10);
  this.pg = createGraphics(this.grid.cellwidth, this.grid.cellheight);
  this.img = new RImage(app.images[0]);
  this.img.resize(this.grid.cellwidth, this.grid.cellheight);


  this.pg.background(this.img.get());


}
Project.prototype.bg = function(){
  var i, pos;
  for(i=0; i< this.grid.maxi; i++){
    pos = this.grid.get(i);
    imageMode(CENTER);
    image(this.pg, pos.x, pos.y);
  }
};
Project.prototype.change = function(){
  var i;
  var v = createVector(0,-this.pg.height/2);
  this.img.shiftPixels(v);
  this.pg.background(this.img.get());

}
Project.prototype.showHedgeHog = function(){
  var i;
  var v = createVector(0,44);
  this.pg.background(this.img.get());
  this.bg();
  this.pg.background(this.img.source);
  var pos =  this.grid.get(app.randomInt(this.grid.maxi-1));
  imageMode(CENTER);
  image(this.pg, pos.x, pos.y);
}
