

var app;

function setup() {

    app = new App("Ferry",windowWidth,windowHeight);
    app.resourcepath ="resources";
    app.loadResources("signature.png");
    //frameRate(5);

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "marine"){
            app.pal = new Palette(6, "marine");
            app.scene = 0;
        }
        if(app.isnot(app.project)){
          app.project = new Project();
        }

        switch(app.scene) {
            case 0:{
                background(app.pal.colors[1]);

                app.pal.show();
                app.wait(50);
                break;
            }


            case 1:{
              //load people
              app.project.draw();
              app.project.loadPeople(5);
              app.runscene(150);
              break;
            }
            case 2:{

                //init scene
                app.project.startLeft();
                app.runscene(0);
                break;
            }
            case 3:{

                //take ferry
                app.project.goRight();
                app.project.draw();
                app.project.ferryPeople(app.project.ferry.speed);
                app.runscene(width/app.project.ferry.speed);
                break;
            }
            case 4:{

                //take ferry
                app.project.draw();
                app.project.stop();
                app.runscene(0);
                break;
            }
            case 5:{
                //init scene
                app.project.startRight();
                app.runscene(0);
                break;
            }

            case 6:{

                //take ferry
                app.project.goLeft();
                app.project.draw();
                app.runscene(width/app.project.ferry.speed);
                break;
            }
            case 7:{

              app.project.draw();
              app.project.stop();

              app.runscene(0);
              break;
            }
            case 8:{
              app.scene = 1;
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
