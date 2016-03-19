/**
 * Created by Ria Stroes on 16-3-2016.
 * Creating a flower with the Blobber class
 */
function Flower(pos, flowerwidth, flowerheight, lobs){
    this.width = flowerwidth;
    this.height = flowerheight;
    this.center = pos.copy();
    this.lobs = lobs;

}
Flower.prototype.live = function(pos){
    var b;
    this.center = pos.copy();
    if(app.isnot(this.blobbers)){
        this.blobbers = [];
        append(this.blobbers,new Blobber(this.width, this.height) );
        append(this.blobbers,new Blobber(this.width, this.height) );
        append(this.blobbers,new Blobber(50, 50) );

    }
    for(b = 0; b < this.blobbers.length -1; b++){
        this.blobbers[b].init(this.center, this.lobs, this.width, this.height);
    }
    this.blobbers[b].init(this.center, this.lobs, 50,50);
};
Flower.prototype.draw = function(){


    for(b = 1; b < this.blobbers.length - 1; b++){
        app.style.set(false, app.pal.tint(app.pal.randomImgColor(),20),1);
        this.blobbers[b].draw();
    }
    app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1],1);
    this.blobbers[b].draw();

};