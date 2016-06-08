

var app;

function setup() {

    app = new App("Beziers",640,540);
    app.resourcepath ="resources";
    app.loadResources("grijsblauw.jpg, groenblauw.jpg, mosterd.jpg, lichtblauw.jpg");
    //frameRate(5);

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "black_white"){
            app.pal = new Palette(4, "black_white");
            app.pal.fromImage(app.images[0],5);
            app.pal.addImageColors(app.images[1],5);
            app.pal.addImageColors(app.images[2],5);
            app.pal.addImageColors(app.images[3],5);
            app.scene =-1;
        }
        if(app.isnot(app.project)){
          app.project = new Project();
        }

        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
            //  app.pal.show();
              app.pal.showImgColors();
              app.wait(100);
              break;
            }
            case 0:{
              background(255);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 1:{
              app.project.change(0);
              app.project.draw();
              app.wait(300);
              break;
            }
            case 2:{
              background(255);
              app.project.change(1);
              app.project.draw();
              app.wait(100);
              break;
            }
            case 3:{
              background(255);
              app.project.change(2);
              app.project.draw();
              app.runscene(0);
              break;
            }
            case 4:{
              background(255);
              app.project.draw();
              app.runscene(100);
              break;
            }
            case 5:{
              background(255);
              app.project.change(2);
              app.project.draw();
              app.runscene(50);
              break;
            }
            case 6:{
              background(255);
              app.project.change(3);

              app.runscene(0);
              break;
            }
            case 7:{
              background(255);
              app.project.draw();
              app.runscene(0);
              break;
            }
            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        //function(skip, maxframes, show)
        app.gifmaker.check(1, 160, false);


    }
    else{
        println("loading resources ...");
    }

}
