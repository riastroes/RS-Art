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
        y = f * ((this.space.height) / this.floors) ;

        this.pos[f] = createVector(x,y);
        this.blobbers[f].init(this.pos[f], this.corners, this.space.width/2, this.space.width, (this.space.height / this.floors)/2, this.space.height / this.floors);
        this.blobbers[f].createMorePoints(6);
    }


};

Flextube.prototype.draw = function(){
    var f,c;


    //draw lines between the floors

    for(f=0; f<this.floors-1;f++){
        c = f % app.pal.imgcolors.length;
        app.style.set(app.pal.colors[1],false,1);
        strokeCap(SQUARE);
        for(p = (this.blobbers[f].morepos.length) -1; p >= 0; p--){
            if((f == this.floors-2)){

                var img = createImage(this.blobbers[f].wminradius *3, this.blobbers[f].center.y * 2);
                
                var ig = 2 + int(this.blobbers[f].center.x /300);
                if(ig>7){ig = 7;}
                img.copy(app.images[ig], 0,0,app.images[ig].width, app.images[ig].height, 0,0,img.width, img.height);

                image(img,this.blobbers[f].center.x, this.blobbers[f].center.y );
            }
            app.style.image(CENTER, BLEND);
            line(this.blobbers[f].morepos[p].x,this.blobbers[f].morepos[p].y,this.blobbers[f+1].morepos[p].x,this.blobbers[f+1].morepos[p].y);
        }
        strokeCap(ROUND); // back to default
    }


    for(f = 0 ; f < this.floors; f++ ){
        app.style.set(app.pal.imgcolors[1], false,1);
       // this.blobbers[f].draw();

        app.info.add("morepoints: "+ this.blobbers[f].morepos.length);
        app.info.add("pos: "+ this.blobbers[f].pos.length);

    }
}