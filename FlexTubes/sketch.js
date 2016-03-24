
var app;

function setup() {

    app = new App("Flextubes");
    app.loadResources("watercolors.jpg,sandcolors.jpg,sky.jpg,happywoman3.png, jumpingman2.png,jumpinggirl.png,happywoman1.png, jumpingman.png");
    frameRate(10);

}

function draw() {
    var w,t;


    if(app.isloaded) {
        if(app.currentpalettename != "spring"){
            app.imgPalette(app.images[0],6,"spring");
            app.bgcolor = app.pal.randomRGBColor("DARK");
            app.noisex =0; //
            app.images[2].resize(width,height);


        }


       // if(app.isnot(app.spaces)){
        app.style.image(CORNER,BLEND);
        image(app.images[2],0,0);

        app.noisex += 0.1;
        app.spaces = [];
        app.style.set(app.pal.colors[0], app.pal.colors[1],1);
        for(w = 0; w < 5; w++) {
            app.sw = map(noise(app.noisex),0,1, 10, width/4);
            app.sh = map(noise(w + app.noisex),0,1, 0, height);
            app.spaces[w] = new Space(app.sw, app.sh);
            app.spaces[w].set(createVector((w *(width/5)) +((width/5)/2) ,(app.sh / 2)-50));

            //app.spaces[w].draw();
        }

        app.flextubes = [];
        for(t = 0; t < 5; t++) {
            app.flextubes[t] = new Flextube(app.spaces[t], 13, 9);
            app.flextubes[t].init();
            app.flextubes[t].draw();

        }

        app.gifmaker.check();
    }
    else{
        println("loading resources ...");
    }

}



