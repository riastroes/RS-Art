/**
 * Created by Ria Stroes on 30-3-2016.
 * trying to make textures in a blob
 */


function BigBlobber(mask){
    //this.grid = new Grid(10,10,(width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
    this.grid  = undefined;
    this.mask = mask;
    this.center = createVector(width/2, height/2);
    this.newblobbers = [];
    this.blobbers = [];
    for(i =0; i < this.mask.length; i++){
        this.blobbers[i] = new Blobber();
        this.blobbers[i].init(this.mask[i],30,100,300,100,300);
        
    }

}
BigBlobber.prototype.live = function() {
    var i, ok = false ;

    for(i=0; i < this.blobbers.length; i++) {

        ok =this.blobbers[i].splitting();
        if(ok){
            try {
            this.blobbers[i].split(this.newblobbers);
            }
            catch(err){
                println ("live" + i );
                println(this.blobbers[i]);
            }
        }
    }
    if(this.newblobbers.length > 0){
        for(i = 0 ; i < this.newblobbers.length; i++) {
         //   append(this.blobbers, this.newblobbers[i]);
        }
        this.newblobbers = [];
    }

};
BigBlobber.prototype.draw = function(){
    var i;

    for(i=0; i < this.blobbers.length; i++) {
        //this.blobbers[0].createMorePoints(7);
        app.style.set( app.pal.colors[3],app.pal.tint(app.pal.colors[3],10),1);
       // this.blobbers[i].showPoints();
        try {
            this.blobbers[i].draw();
        }
        catch(err){
            println ("draw "+ i );
            println(this.blobbers[i]);
        }
       // app.style.text(12, CENTER, app.pal.colors[0]);
       // text(i +":"+ this.blobbers[i].pos.length, this.blobbers[i].position.x, this.blobbers[i].position.y-10);
    }
};
BigBlobber.prototype.lines = function(morepoints) {
    var i,max, half;
    app.style.set(app.pal.colors[2], app.pal.colors[3],1);
    for(i=0; i < this.blobbers.length; i++) {
        this.blobbers[i].createMorePoints(morepoints);
        max = this.blobbers[i].morepos.length;
        half = floor(this.blobbers[i].morepos.length / 2);
        this.blobbers[i].linesToCenter();
    }
};
BigBlobber.prototype.split = function(){

    var i, newblobber;

    for(i=0; i < this.blobbers.length; i++) {
       this.blobbers[i].split(this.newblobbers, i);

    }
    for(i =0; i < this.newblobbers.length; i++){
        append( this.blobbers, this.newblobbers[i]);

    }
    this.newblobbers = [];



};
BigBlobber.prototype.grow = function(){
   var i;
   for(i=0; i < this.blobbers.length; i++) {
       this.blobbers[i].grow(0.1);

   }
    
};