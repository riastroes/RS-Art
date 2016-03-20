var app;

function setup() {

    app = new App("Flowers");
    app.loadResources("flowers.jpg");
    frameRate(10);

}

function draw() {


    if(app.isloaded) {
        if (app.currentpalettename != "flowers") {
            app.imgPalette(app.images[0], 12, "flowers");
            app.bgcolor = app.pal.randomRGBColor("LIGHT");

        }
        if (app.isnot(app.flower)){
            app.flower = new Flower();
            app.flower2 = new Flower();
            app.flower2.live(createVector(width/2, height/2), 600,600,15);
            app.flower2.draw();
        }
        app.flower.live(createVector(random(width), random(height)), 100,100,20);
        app.flower.draw();


        if(app.makeGif){
            app.gif.addFrame(app.acanvas.elt, {delay:1000, copy: true, width:540, height:540});
        }

    }
    else{
        println("loading resources ...");
    }

}



