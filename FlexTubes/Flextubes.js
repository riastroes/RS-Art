/**
 * Created by Ria on 15-3-2016.
 * Building a flexible tower with blobbers.
 */
function Flextube(space, floors, corners ) {


    this.space = space;
    this.firstscene = 0;
    this.testgrid = undefined;
    this.bgcolor  = undefined;
    this.blobbers = [];
    this.floors = floors;
    this.pos = [];
    this.corners = corners;



}
Flextube.prototype.init = function(){
    var  x,y;
    var f, p;

    for(f = 0 ; f < this.floors; f++ ){
        append(this.blobbers, new Blobber() );
        x = this.space.center.x;
        //y = f * ((this.space.height) / this.floors) ;
        y = f * (height/this.floors);
        y -=50;
        this.pos[f] = createVector(x,y);
        this.blobbers[f].init(this.pos[f], this.corners, this.space.width/2, this.space.width, (this.space.height / this.floors)/2, this.space.height / this.floors);
        this.blobbers[f].createMorePoints(6);
    }


};
Flextube.prototype.showMorePoints = function(blobber, max){
    var i,  t, x,y;
    if(app.is(max)){
        if(max <= blobber.morepos.length) {
            app.max =(blobber.morepos.length/2) -5;
        }
        else{
            app.max = blobber.morepos.length;
        }
    }

    else{
        app.max = blobber.morepos.length;
    }

    for(i = 0; i < app.max; i++){
        ellipse(blobber.morepos[i].x, blobber.morepos[i].y, 5, 5);
    }
    app.style.set(app.pal.colors[1], app.pal.colors[1],1);
    for(i = blobber.morepos.length - 5; i < blobber.morepos.length; i++){
        ellipse(blobber.morepos[i].x, blobber.morepos[i].y, 5, 5);
    }
};
Flextube.prototype.draw = function(){
    var f,c, ig, w, h;
    //draw lines between the floors

    for(f=0; f<this.floors-1;f++){
        c = f % app.pal.imgcolors.length;
        app.style.set(app.pal.colors[1],false,1);
        strokeCap(SQUARE);
        for(p =0; p <(this.blobbers[f].morepos.length); p++){
            if((f == 5)){

                ig = 3 + int(this.blobbers[f].center.x /(width/5));
                w = this.space.lefttop.x;
                h = this.space.center.y;

                if(ig>8){ig = 8;}

                app.style.image(CORNER, DARKEST);
                push();
                translate(w,h);
                scale((this.space.width - 20)/app.images[ig].width);
                image(app.images[ig],0,this.blobbers[f].center.y/3);
                pop();
            }
            app.style.image(CENTER, BLEND);
            line(this.blobbers[f].morepos[p].x,this.blobbers[f].morepos[p].y,this.blobbers[f+1].morepos[p].x,this.blobbers[f+1].morepos[p].y);
            
        }
        strokeCap(ROUND); // back to default
    }
    if(f == (this.floors - 1)){
        this.showMorePoints(this.blobbers[f],12);
    }

    app.info.add("morepoints: "+ this.blobbers[f].morepos.length);
    app.info.add("pos: "+ this.blobbers[f].pos.length);


};