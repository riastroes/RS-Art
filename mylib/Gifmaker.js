/**
 * Created by Ria Stroes on 23-3-2016.
 */
function Gifmaker(){
    this.width = 0;
    this.height = 0;
    this.speed = 0;
    this.skip = 0;
    this.frame = 0;
    this.maxframes = 0;
    this.oldframerate = 60;
    this.gif = undefined;
    this.do = false;
}
Gifmaker.prototype.init = function(width, height, speed, skip, maxframes, currentframerate){
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.skip = skip;
    this.frame = 0;
    this.maxframes = maxframes;
    this.oldframerate = currentframerate;
    this.gif = new GIF({
        workers: 2,
        quality: 40,
        workerScript: "../libraries/gif.worker.js",
        background:"#ffffff",
        width:this.width,
        height:this.height
    });
    this.gif.on('finished', function(blob) {
        window.open(URL.createObjectURL(blob));
    });
    this.do = true;
};
Gifmaker.prototype.check = function(skip, maxframes, show){
    if(this.do){
        if(app.is(skip)){
            this.skip = skip;
        }
        if(app.is(maxframes)){
            this.maxframes = maxframes;
        }
        if((frameCount % this.skip) == 0 && this.frame < this.maxframes) {
            var shot = new Shot(0);
            shot.click();
            shot.resize(this.width, this.height);


            if(show){
                image(shot.img,0,0);
                this.gif.addFrame(app.acanvas.elt, {
                    delay: 250,
                    copy: true,
                    width: this.width,
                    height: this.height
                });
                app.style.text(12,LEFT,app.pal.colors[0]);
                text(this.frame + "/" + this.maxframes, 12,12);
            }
            else{
                var pg = createGraphics(this.width,this.height);
                pg.image(shot.img,0,0);
                this.gif.addFrame(pg.elt, {
                    delay: 250,
                    copy: true,
                    width: this.width,
                    height: this.height
                });
            }

            this.frame++;
        }
        else if(this.frame ==  this.maxframes){
            try{
                this.render();
                this.do = false;
            }
            catch(err){
                println(err);
            }

        }
    }
};
Gifmaker.prototype.render = function(){
    try {
        this.gif.render();
    }
    catch(err){
        app.info.add(err);
        println(err);
    }
    frameRate(this.oldframerate);
};