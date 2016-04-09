var app;

function setup() {

    app = new App("Horizon");
    app.resourcepath = "resources";
    app.loadResources("signature.png,greens.jpg,blues.jpg,bg.jpg,church.png,browns.jpg,farm.png,face1.png,eyes.png, house.png, sky.jpg");
    frameRate(25);

}

function draw() {
    if(app.isloaded) {

        if(app.isnot(app.horizon)){
            app.horizon = new Horizon(app.images[3]);
            app.horizon.init();
            app.scene = 0;
        }
        if(app.currentpalettename != "greens"){
            app.imgPalette(app.images[1],5,"greens");
            app.imgPalette(app.images[5],5,"browns", true);
        }

        switch(app.scene){
            case 0:{
                app.horizon.drawBackground();
                if(app.horizon.detectHorizon() > 0){
                    app.runscene(0);
                }

                break;
            }
            case 1:{
                app.horizon.drawBackground();
                app.horizon.drawChurch();
                app.horizon.drawFarm();
                app.horizon.drawTrees();
                app.style.set(app.pal.imgcolors[0],false,1);
                app.horizon.drawBush();
                app.runscene(100);

                break;
            }
            case 2:{
                
                //app.horizon.drawBackground();
                //app.horizon.drawFace();
                app.horizon.drawSky();
                //app.horizon.drawHouse();

                //app.horizon.drawChurch();
                //app.horizon.drawFarm();
                //app.horizon.drawTrees();
                app.style.set(app.pal.imgcolors[0],false,1);
                app.horizon.drawBush();
                app.runscene(width);

                break;
            }
        }
       app.info.show();
       app.gifmaker.check();
    }
    else{
        println("loading resources ...");
    }
}
