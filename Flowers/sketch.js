var app;

function setup() {

    app = new App("Flowers");
    app.loadResources("flowers.jpg");
    //frameRate(10);

}

function draw() {
    var size, x, y,i;

    if(app.isloaded) {
        if (app.currentpalettename != "flowers") {
            app.pal = new Palette(4);
            app.imgPalette(app.images[0], 12, "flowers");
            app.bgcolor = app.pal.randomRGBColor("LIGHT");

        }
        if(app.isnot(app.mask)){
            app.mask = new Mask();
            app.mask.init();
        }
        if (app.isnot(app.flower)){
            app.flower = new Flower();

            //app.flower2 = new Flower();
            //app.flower2.live(createVector(width/2, height/2), 600,600,15);
            //app.flower2.draw();
        }

        if(frameCount < 10) {
            size = (frameCount+1)*100;
            app.flower.live(createVector(random(width), random(height)), size, size,18);

            app.flower.drawB();

        }
        else if(frameCount == 10){

            app.mask.createMask(0,0, true, app.pal.colors[0]);

        }
        else{
            i = app.mask.data[int(random(app.mask.data.length - 1))];
            x = i/4 % (this.width);
            y = int((i/4) / this.width);
            app.flower.live(createVector(x,y), 30, 30, 13);
            app.flower.drawBW();
        }


        if(app.makeGif){
            app.gif.addFrame(app.acanvas.elt, {delay:1000, copy: true, width:540, height:540});
        }

    }
    else{
        println("loading resources ...");
    }

}



