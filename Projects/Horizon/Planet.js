/**
 * Created by Ria Stroes on 15-3-2016.
 */
function Planet(type, center, radius, rot){
    this.layer = createGraphics(radius*2, radius*2);
    this.type = type;
    this.worldcenter = center.copy();
    this.center = createVector(this.layer.width/2, this.layer.height/2);
    this.radius = radius;
    this.rotation =0;
    this.rot  = rot;
    this.pgimg = undefined;
    this.init();
}
Planet.prototype.init = function(){
    var churchpos = [];
    if(app.currentpalettename  != "greens"){
        app.imgPalette(app.images[0], 10, "greens");
    }

    switch(this.type){
        case "world":{
            app.style.pg(this.layer, false, app.pal.tint(app.pal.imgcolors[0], 1),0,CENTER,CENTER,BLEND);
            this.layer.ellipse(this.center.x, this.center.y, this.radius*2, this.radius*2);
            break;
        }
        case "houses":{
            //app.style.pg(this.pg, false, app.pal.imgcolors[0],0,CENTER,CENTER,BLEND);
            //this.pg.ellipse(this.center.x, this.center.y, this.radius*2, this.radius*2);
            break;
        }
        case "farmhouses":{
            break;
        }
        case "bushes":{
            this.blobber = new Blob();

            break;

        }
        case "churches":{
            //this.pgimg = new PgImg("church.png", 80,40);
           // this.pgimg.init();

                this.rotation = -this.rotation;
                app.style.pg(this.layer, app.pal.imgcolors[3], app.pal.imgcolors[4],0,CENTER,CENTER,BLEND);
                this.layer.image(app.images[2], this.layer.width/2, 0);

            //app.style.pg(this.layer, app.pal.imgcolors[3], app.pal.imgcolors[4],0,CENTER,CENTER,BLEND);
            //push();
            //translate(this.center.x, this.center.y);
            //rotate(-this.rot);
            //    for(i = 0; i < 10; i++){
            //        churchpos[i] = posOnCircle(this.center, this.radius +80,10,i);
            //        this.pgimg.rotate(this.rot);
            //        this.layer.image(this.pgimg.pg, churchpos[i].x, churchpos[i].y);
            //    }
            //pop();
            break;
        }
        case "sailboots":{
            break;
        }
    }
};
Planet.prototype.draw = function(){
    if(this.type == "bushes"){
        this.blobber.create(this.center, 8, this.layer.width, this.layer.height);
        this.blendmode = MULTIPLY;
        app.style.pg(this.layer, app.pal.imgcolors[3], app.pal.tint(app.pal.randomImgColor(),10),0,CENTER,CENTER,BURN);
        this.blobber.draw(this.layer);
    }

        push();
            translate(this.worldcenter.x, this.worldcenter.y);
            if(this.rot > 0) {
                rotate(this.rotation);
                this.rotation += this.rot;
            }
            app.style.image(CENTER,this.blendmode);
            image(this.layer, 0,0);
        pop();


}