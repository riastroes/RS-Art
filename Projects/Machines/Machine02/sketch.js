

var app;

function setup() {

    app = new App("Machines",800,800);
    app.loadResources("metalcolors.jpg");
    //frameRate(5);

}

function draw() {
    var i,c;
    if(app.isloaded) {

        if(app.isnot(app.project)){
          app.project = new Project();
          app.pal = new Palette(2);
          app.pal.fromImage(app.images[0],10);
          app.scene = -1;


        }

        switch(app.scene) {
            case -1:{
                background(255);
                app.pal.showImgColors();
                app.wait(50);
                break;
            }
            case 0:{
                background(255);
                app.project.construct();
                app.runscene(0);
                break;
            }
            case 1:{
                background(255);
                app.project.draw();
                app.runscene(8000);
                break;
            }

            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        app.gifmaker.check(10, 80, false);


    }
    else{
        println("loading resources ...");
    }

}
