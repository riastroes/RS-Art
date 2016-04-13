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
  this.img.setTransparency(50);

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
  app.images[0].loadPixels();
    this.centerPixels(app.images[0].pixels);
  app.images[0].updatePixels();
  //change buffer;
  image(app.images[0],0,0);

}
Project.prototype.centerPixels = function(pixels){
  var x, y, center;
  center = createVector(this.pg.width/2, this.pg.height/2);
  for(i=0; i< pixels.length; i+=1){
    x = i % (this.pg.width);
    y = int(i/(this.pg.width*4));


    m = (y * this.pg.width*4) + (x*4);
    pixels[m] += 100;
    ellipse( x,y, 10,10);
  }

}
