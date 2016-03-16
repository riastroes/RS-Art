/**
 * Created by Ria Stroes on 15-3-2016.
 * Inspired by the Frisian landscape
 * Fryslan landscapes are open and flat with houses, farmhouses ,little churches and bushes on the horizon
 * White sails of sailingboots are passing by through the land.
 * I will try to make several horizons on the edge of big circles, that slowly move around. You only can see the top
 * of the circles.
 */
function Horizon(){
    this.planets = [];
    this.center = createVector(width/2, ((height*3) + 400));
    this.size = (height*3);
    this.bgcolor = 0;


}
Horizon.prototype.init = function(){
    if(app.currentpalettename != "blues"){
        app.imgPalette(app.images[1], 5, "blues");
    }
    this.bgcolor = app.pal.imgcolors[0];
    append(this.planets, new Planet("world", this.center,this.size, 0));
    append(this.planets, new Planet("houses", this.center,this.size, 0));
    append(this.planets, new Planet("farmhouses", this.center, this.size, 0));
    append(this.planets, new Planet("churches", this.center, this.size + 100, 0.5));
    append(this.planets, new Planet("bushes", this.center, this.size, 2.0));
    append(this.planets, new Planet("sailingboots", this.center, this.size, 0));
};
Horizon.prototype.draw = function(){
    var index;

    for( index in this.planets){
        if(this.planets.hasOwnProperty(index)){
            if(frameCount % this.planets.length == index){
            this.planets[index].draw();
            }
        }
    }
};