/**
 * Created by Ria Stroes on 15-3-2016.
 * Inspired by the Frisian landscape
 * Fryslan landscapes are open and flat with houses, farmhouses ,little churches and bushes on the horizon
 * White sails of sailingboots are passing by through the land.
 * I will try to make several horizons on the edge of big circles, that slowly move around. You only can see the top
 * of the circles.
 */
function Horizon(bg){
   
    this.center = createVector(width/2, ((height*3) + 400));
    this.bgcolor = 0;
    this.bg = bg;


}
Horizon.prototype.init = function(){
   
};
Horizon.prototype.drawBackground = function(){
    var i,p;
    this.bg.pixels = [];
    this.bg.loadPixels() ;
    p = [];
    p[0] = this.bg.pixels[0];
    p[1] = this.bg.pixels[1];
    p[2] = this.bg.pixels[2];
    p[3] = this.bg.pixels[3];
    for(i = 0; i < this.bg.pixels.length - 4; i++){
        this.bg.pixels[i]= this.bg.pixels[i+4];
    }
    this.bg.pixels[i] = p[0];
    this.bg.pixels[i+1] = p[1];
    this.bg.pixels[i+2] = p[2];
    this.bg.pixels[i+3] = p[3];
    this.bg.updatePixels();
    background(this.bg);
};
Horizon.prototype.draw = function(){
    
};