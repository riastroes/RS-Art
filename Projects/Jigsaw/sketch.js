var app;

function setup() {

    app = new App("Jigsaw");
    app.resourcepath ="resources";
    app.loadResources("signature.png,spring.jpg");
    //frameRate(5);

}

function draw() {
    var d,fc, x,y, rmarge, tmarge, lmarge, bmarge;
    if(app.isloaded) {

        if (app.isnot(app.project)){
            app.project = new Project();
            app.scene = 0;
        }
        if(app.currentpalettename != "spring"){
            app.pal = new Palette(3);

        }

        switch(true) {
            case (app.scene == 0):{

                app.style.set(app.pal.colors[0], app.pal.colors[1],1);
                //app.jigsaw.grid.show();
                app.runscene(0);
                break;
            }
            case (app.scene == 1):{

                fc = (int(frameCount/10) % 5) + 3;

                app.project.init(fc, 10,10, (width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
                app.project.draw(app.pal.colors[3], app.pal.colors[4]);
                app.project.grid.show();


                app.runscene(50);
                break;
            }
            case (app.scene == 2):{

                fc = (int(frameCount/10) % 5) + 3;

                app.project.init(fc, 10,10, (width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
                app.project.draw(app.pal.colors[4], app.pal.colors[3]);
                app.project.grid.show();


                app.runscene(50);
                break;
            }
            case (app.scene == 3):{

                fc = (int(frameCount/10) % 5) + 3;

                app.project.init(fc, 10,10, (width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
                app.project.draw(app.pal.colors[0], app.pal.colors[app.randomInt(3,4)]);
                app.project.grid.show();



                app.runscene(50);
                break;
            }
            case (app.scene == 4):{
                background(app.pal.colors[1]);

                fc = (int(frameCount/10) % 5) + 3;

                for(y =0; y <8; y++){
                    for(x =3; x <8; x++){
                        lmarge = (x*100)+((x+1)*10);
                        tmarge = (y*100)+((y+1)*10);
                        rmarge = (width - 100) - lmarge;
                        bmarge = (height - 100) - tmarge;
                        app.project.init(x, 5,5,lmarge,tmarge,rmarge,bmarge);
                        app.project.draw(app.pal.colors[0], app.pal.colors[app.randomInt(3,4)]);
                        //app.jigsaw.grid.show();
                    }
                }


                app.runscene(50);
                break;
            }
            case (app.scene == 5):{
                background(app.pal.colors[1]);

                fc = (int(frameCount/10) % 5) + 3;

                for(y =0; y <8; y++){
                    for(x =3; x <8; x++){
                        lmarge = (x*100)+((x+1)*10);
                        tmarge = (y*100)+((y+1)*10);
                        rmarge = (width - 100) - lmarge;
                        bmarge = (height - 100) - tmarge;
                        app.project.init2(x, 5,5,lmarge,tmarge,rmarge,bmarge,1);
                        app.project.draw(app.pal.colors[0], app.pal.colors[app.randomInt(3,4)]);
                        //app.jigsaw.grid.show();
                    }
                }


                app.runscene(50);
                break;
            }
            case (app.scene ==6):{
                background(app.pal.colors[1]);

                fc = (int(frameCount/10) % 5) + 3;

                for(y =0; y <8; y++){
                    for(x =3; x <8; x++){
                        lmarge = (x*100)+((x+1)*10);
                        tmarge = (y*100)+((y+1)*10);
                        rmarge = (width - 100) - lmarge;
                        bmarge = (height - 100) - tmarge;
                        app.project.init2(x, 5,5,lmarge,tmarge,rmarge,bmarge,2);
                        app.project.draw(app.pal.colors[0], app.pal.colors[app.randomInt(5,6)]);

                        //app.jigsaw.grid.show();
                    }
                }


                app.runscene(50);
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
