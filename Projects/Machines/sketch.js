

var app;

function setup() {

    app = new App("Machines",850,850);
    app.resourcepath ="resources";
    app.loadResources("metalcolors.jpg");
    //frameRate(5);

}

function draw() {
    var i,c;
    if(app.isloaded) {

        if(app.isnot(app.project)){
          app.grid = new Grid(5,5,20,20,20,20);
          app.project = new Project();
          app.scene = 1;
          frameRate(10);
        }

        switch(app.scene) {
            case -1:{
                background(app.project.pal.colors[1]);
                app.project.pal.showImgColors();
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
                background(app.pal.colors[1]);
                app.project.construct();
                app.runscene(0);
                break;
            }
            case 2:{
                background(app.project.pal.imgcolors[0]);
                app.project.change();
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
