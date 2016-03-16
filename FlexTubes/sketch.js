var app;

function setup() {

    app = new App();
    app.loadResources("watercolors.jpg,sandcolors.jpg");
    frameRate(10);

}

function draw() {
    var w,t;


    if(app.isloaded) {
        if(app.currentpalettename != "spring"){
            app.imgPalette(app.images[0],6,"spring");
            app.bgcolor = app.pal.randomRGBColor("LIGHT");
            app.noisex =0; // (w+1) * 30
        }


       // if(app.isnot(app.spaces)){
        app.style.image(CENTER,BLEND);
        background(app.bgcolor);
        app.noisex += 0.1;
        app.spaces = [];
        app.style.set(app.pal.colors[0], app.pal.colors[1],1);
        for(w = 0; w < 8; w++) {
            app.sw = map(noise(app.noisex),0,1, 10, width/6);
            app.sh = map(noise(w + app.noisex),0,1, 0, height);
            app.spaces[w] = new Space(app.sw, app.sh);
            app.spaces[w].set(createVector((w *(width/8)) +((width/8)/2) ,(app.sh / 2)));

            //app.spaces[w].draw();
        }

        app.flextubes = [];
        for(t = 0; t < 8; t++) {
            app.flextubes[t] = new Flextube(app.spaces[t], 13, 9);
            app.flextubes[t].init();
            app.flextubes[t].draw();
            app.style.set(false, app.pal.colors[1], 1);
            app.flextubes[t].blobbers[12].showMorePoints();
        }
    }
    else{
        println("loading resources ...");
    }

}



