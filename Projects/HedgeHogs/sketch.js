var app;

function setup() {

    app = new App("Hedgehogs",windowWidth, windowHeight);
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
                app.project.bg();
                app.project.change();
                //app.project.bg();
                app.runscene(0);

                break;
            }

            case 2:{

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
       app.gifmaker.check();
    }
    else{
        println("loading resources ...");
    }
}
