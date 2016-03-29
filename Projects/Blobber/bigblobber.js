/**
 * Created by Ria Stroes on 30-3-2016.
 * trying to make textures in a blob
 */
function BigBlobber(){
    //this.grid = new Grid(10,10,(width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
    this.grid  = undefined;
    this.center = createVector(width/2, height/2);
    this.blobber = new Blobber(this.center);
    this.blobber.init(this.center,13,height/3,height,height/3,height);
}

BigBlobber.prototype.draw = function(){
    var h =  height;
    app.style.set( app.pal.colors[3],false,1);

    this.blobber.createMorePoints(7);
    this.blobber.draw();
};
BigBlobber.prototype.lines = function(morepoints) {
    var i,max, half;
    app.style.set(app.pal.colors[2], app.pal.colors[3],1);
    this.blobber.createMorePoints(morepoints);
    max = app.big.blobber.morepos.length;
    half = floor(app.big.blobber.morepos.length / 2);
    
    for (i = 0; i < half; i++) {
        pos1 = app.big.blobber.morepos[i];
        pos2 = app.big.blobber.morepos[i + half];

        line(pos1.x, pos1.y, pos2.x, pos2.y);
    }
};
BigBlobber.prototype.split = function(){
    var a;
    app.style.set(app.pal.colors[2], app.pal.tint(app.pal.colors[2],30),3);
    this.blobber.draw();

    this.blobber.showPoints();
    a = this.blobber.split();
    if(app.is(a)) {
    app.style.set(app.pal.colors[3], false,2);
    this.blobber.draw();
    this.blobber.showPoints();
    app.style.set(app.pal.colors[0], false,1);

        a.draw();
        a.showPoints();
    }
       

};
BigBlobber.prototype.grow = function(){
   
    app.style.set(app.pal.colors[2], app.pal.tint(app.pal.colors[2],30),3);
    this.blobber.grow();
    this.blobber.draw();
    this.blobber.showPoints();
    
};