/**
 * Created by Ria Stroes on 15-3-2016.
 * Inspired by the Frisian landscape
 * Fryslan landscapes are open and flat with houses, farmhouses ,little churches and bushes on the horizon
 * White sails of sailingboots are passing by through the land.
 * I will try to make several horizons on the edge of big circles, that slowly move around. You only can see the top
 * of the circles.
 *
 * Thanks for the soundlandscape goes to:
 * http://www.freesound.org/people/klankbeeld/
 */
function Horizon(bg){
   
    this.center = createVector(width/2, ((height*3) + 400));
    this.bgcolor = 0;
    this.bg = bg;
    this.startx =0;
    this.x = 0;
    this.y = 0;
    this.noisey = 0;
    this.noisex = 0;
    this.horizony = 0;
    this.facey =0;
    this.housex = 0;
    this.bush = [];
    this.trees = [];


}
Horizon.prototype.init = function(){

    this.bg.loadPixels();

};
Horizon.prototype.detectHorizon = function(){
    var y,i;
    if(this.bg.pixels.length > 0){
        for(y=0;y < this.bg.height; y++){
            i = y * this.bg.width * 4;
           // println(y + ":" + this.bg.pixels[i] );
            if(this.bg.pixels[i] ==62){
                this.horizony = int(y * (height/this.bg.height));
                break;
            }
            this.bg.pixels[i] = 255;
        }
    }
    return this.horizony;
};
Horizon.prototype.drawBackground = function(){

    image(this.bg, this.startx,0,width,height);
    image(this.bg, this.startx + width,0,width,height);
    this.startx -= 1;
    if(this.startx == -width){
        this.startx =0;
    }

};
Horizon.prototype.drawBush = function(){
    var i;
    this.bush[this.x] = map(noise(this.noisey),0,1,2,10);



    for(i = 0; i <  this.bush.length; i++){
        strokeWeight(this.bush[i]);
        point(i,this.horizony);

    }
    this.noisey += 0.1;
    this.x +=1;

};
Horizon.prototype.drawTrees = function(){
    var i, a, pos, size, thickness;

    if((this.x % app.randomInt(100,800)) == 50){
        app.style.set(app.pal.imgcolors[2],app.pal.imgcolors[1],1);
        this.bush[this.x] = map(noise(this.noisey),0,1,1,4);
        pos = createVector(this.x, this.horizony);
        thickness = this.bush[this.x];
        size= app.randomInt(5,15);
        append(this.trees, new Tree(pos,thickness, size));

        this.noisey += 0.1;
    }
    for(i = 0; i < this.trees.length; i++){
       this.trees[i].draw();
    }

};
Horizon.prototype.drawChurch = function(){
    if(app.images[4].width != 50) {
        app.images[4].resize(90, 70);//church
    }
    if(app.isnot(this.churchx)){
        this.churchx = width;
    }
    //if(app.randomInt(100) == 20){
        image(app.images[4],this.churchx, this.horizony - app.images[4].height);
   // }
    this.churchx -=1;

};
Horizon.prototype.drawFarm = function(){
    if(app.images[6].width != 80) {
        app.images[6].resize(80, 30);//farm
    }
    if(app.isnot(this.farmx) && (frameCount %500 == 100)){
        this.farmx = width;
    }
    //if(app.randomInt(100) == 20){
    if(app.is(this.farmx)){
        image(app.images[6], this.farmx, this.horizony - app.images[6].height);

        this.farmx -= 2;
    }
    if(this.farmx <0){
        this.farmx = width;
    }
};
Horizon.prototype.drawHouse = function(){
    if(app.images[9].width != 80) {
        app.images[9].resize(80, 30);//house
    }
    if(app.isnot(this.housex) && (frameCount %500 == 400)){
        this.housex = width;
    }
    //if(app.randomInt(100) == 20){
    if(app.is(this.farmx)){
        image(app.images[9], this.housex, this.horizony - app.images[9].height);

        this.housex += 2;
    }
    if(this.housex <0){
        this.housex = 0;
    }
};
Horizon.prototype.drawFace = function(){
    var w;
    if(app.images[7].height != height) {
        app.images[7].resize(0, height);//farm
        this.dir = 1;

    }
    if(app.isnot(this.facey)){
        this.facey = 0;
    }
    w = app.images[7].width;
    image(app.images[7],0,0,w, this.facey, (width/2)-(w/2),this.horizony - this.facey,w, this.facey );
    this.facey  += this.dir;
    if(this.facey > app.images[7].height/4*3 || this.facey == 0){
        this.dir = 0;
     }

};
//tree
function Tree(pos, thickness, size){
    this.pos = pos;
    this.thickness = thickness;
    this.size = size;

}
Tree.prototype.draw = function(){
    //stam
    var wind,i, t,pos,tos,s;
    wind = app.randomInt(5);
    pos = createVector(this.pos.x + wind,this.pos.y - this.size);
    app.style.set(app.pal.imgcolors[6],false,this.thickness);
    line(this.pos.x, this.pos.y, pos.x, pos.y );
    for(i = this.thickness*2; i>0; i-=1)
    {
        pos = createVector(this.pos.x + wind,this.pos.y - this.size);
        for (t = this.thickness; t > 0; t -= 1) {
            s = this.size / (this.thickness + 1 - t);
            tos = app.posOnPie(pos, random(s), ((PI/3) * 4), ((PI/3) * 5),this.thickness, t);
            app.style.set(app.pal.imgcolors[6], false, t/2);
            line(pos.x, pos.y, tos.x, tos.y);
            pos = tos.copy();
        }
        app.style.set(false,app.pal.tint(app.pal.imgcolors[4],40), t/2);
        ellipse(tos.x, tos.y, this.size,this.size);
    }
};