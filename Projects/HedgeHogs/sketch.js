var app;

function setup() {

    app = new App("Hedgehogs",540,540);
    app.resourcepath = "resources";
    app.loadResources("hedgehog.jpg");


}

function draw() {
    if(app.isloaded) {

        if(app.isnot(app.project)){
            app.project = new Project();
            app.scene = -1;
        }
        if(app.currentpalettename != "hedgehog"){
            app.imgPalette(app.images[0],10,"hedgehog");
        }

        switch(app.scene){
          case -1:{
              background(app.pal.colors[1]);
              app.pal.showImgColors();
              app.wait(50);
              break;
          }
          case 0:{
            background(app.pal.colors[1]);
            app.project.grid.show();
            app.wait(50);
            break;
          }
            case 1:{
              frameRate(5);
                app.project.bg();
                app.project.change();
                app.runscene(2);

                break;
            }
            case 2:{
                if(random(5)<1){
                app.project.showHedgeHog();
              }
                //app.project.bg();
                app.runscene(60);

                break;
            }
            case 3:{

                //app.project.centerPixels();
                //app.project.bg();
                app.wait(100);
                break;
            }
            default: {
              app.wait();
            }
        }
       app.info.show();
       //skip, maxframes, show
       app.gifmaker.check(1,30);
    }
    else{
        println("loading resources ...");
    }
}
