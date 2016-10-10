function Gcode(){
  this.commands = [];
  this.e = 0;
}
Gcode.prototype.createHeading = function(tempExtr, tempBed, test){

  append(this.commands, ";Generated GCode by Ria Stroes");
  append(this.commands, ";Project: Generated Knittings");
  append(this.commands, ";3D-printer: Ultimaker 2+");
  for(var t = 0; t < test.length; t++){
    append(this.commands, test[t]);
  }

  //starting commands
  append(this.commands, ";starting commands");

  append(this.commands, "G21 ;metric values");
  append(this.commands, "M82 ;set extruder to absolute mode");
  append(this.commands, "G90 ;absolute positioning");
  append(this.commands, "M107 ;start with the fan off");
  append(this.commands, "M109 S180 B210 F1;activate auto temp min 180 max 210 scaling factor 1 (for PLA)");
  append(this.commands, "M140 S60");
  append(this.commands, "M190 S60");
  append(this.commands, "G28; Home Axis");
  append(this.commands, "")
//append(this.commands, "G29; Z-Probe the bed (requires Z-Probe!)");
  append(this.commands, "G1 Z5.0 F9000 ;move the head 5mm up for CYA clearance");
  append(this.commands, "G92 E0 ;zero the extruded length");
  append(this.commands, "M117 Cleaning...;Put Cleaning message on screen");
  append(this.commands, "G1 X100 Y0 F4000 ; move half way along the front edge");
  append(this.commands, "G1 Z5 ; move nozzle close to bed");
  append(this.commands, "M109 S200 ; heat nozzle to 200 degC and wait until reached");

  append(this.commands, "G4 P10000 ; wait 10 seconds for nozzle length to stabilize");
  append(this.commands, "G1 Z20 ");
  append(this.commands, "G1 E60 ; extrude 60 mm of filament");

  append(this.commands, "G92 E0 ; reset extruder");
  append(this.commands, "M117 Printing...;Put printing message on LCD screen");

  // append(this.commands, "M110");
  // append(this.commands, "G92 E0");
  // append(this.commands, "G28");
  //
  // append(this.commands, "M140 S60       ;set temp bed" );
  // append(this.commands, "M190 S60       ;wait temp bed" );
  // append(this.commands, "M109 S230      ;set temp extruder and wait")  ;
  // append(this.commands, "M106 S255      ;set fan on");


}
Gcode.prototype.createOutline = function(outline,nozzle, layerheight,z, speed){
  //skip the first
  var i;
  var d; //distance
  this.e = 0; //extrude
  var newe; //more extrude
  append(this.commands, ";create outline");
  append(this.commands, "G0 F" + speed*2);
  for(i = 1; i < outline.length; i++){
    if(i == 1){this.e = 0}
    else{
      d = p5.Vector.dist(outline[i-1], outline[i]);
      newe = layerheight * nozzle * d ;
      this.e += newe;
    }
    append(this.commands, "G1 X" + outline[i].x +" Y" + outline[i].y+ " E" + this.e.toFixed(3) );
  }
  d = p5.Vector.dist(outline[i-1], outline[0]);
  newe = layerheight * nozzle * d;
  this.e += newe;

  append(this.commands, "G1 X" + outline[0].x +" Y" + outline[0].y+ " E" + this.e.toFixed(3) );
  append(this.commands, ";END create outline");

}
Gcode.prototype.createFirstLayer = function(genoutline,genknitting,nozzle, layerheight, speed){
  //function(arr, nozzle, layerheight, speed)
  var z = layerheight;
  this.moveToStart(genoutline[0].x, genoutline[0].y, z, speed);
  this.createOutline(genoutline,nozzle,layerheight, z,speed);
  this.moveTo(genknitting[0].x, genknitting[0].y, z, speed);
  this.createPath(genknitting,nozzle,layerheight,speed);
}
Gcode.prototype.createNextLayer = function(genknitting,nozzle, layerheight,z,speed){
  //function(arr, nozzle, layerheight, speed)
  this.moveTo(genknitting[0].x, genknitting[0].y, z, speed);
  this.createPath(genknitting,nozzle,layerheight,speed);
}
Gcode.prototype.moveToStart = function(x, y, z, speed){
  //move to start position


  append(this.commands, ";move to start positions");
  append(this.commands, "G0 F9000 X" + x +" Y" + y + " Z" + z + "     ;move to Z position" );
  append(this.commands, "G0 X" + x +" Y" + y + " F" + speed + " ;move to beginning of outline");

}
Gcode.prototype.moveTo = function(x, y, z, speed){
  //move to start position
  z += 0.2;
  append(this.commands, ";move to");
  append(this.commands, "G1 Z" + z + " F" + (speed*2) + "       ;move to Z position" );
  append(this.commands, "G92 E0                     ;reset Extruder position" );
  append(this.commands, "G1 X" + x +" Y" + y + " F" + speed +"     ;move to beginning of knitting");
  z -= 0.2
  append(this.commands, "G1 Z" + z + " F" + (speed*2) + "       ;move to Z position" );

}
Gcode.prototype.createPath = function(arr, nozzle, layerheight, speed){
  var i;
  var d; //distance

  var newe;
  append(this.commands, ";create path");
  append(this.commands, "G1 F" + speed);
  for(i = 1; i < arr.length; i++){
    d = p5.Vector.dist(arr[i-1], arr[i]);
    newe = layerheight * nozzle * d;
    this.e += newe;

    append(this.commands, "G1 X" + arr[i].x +" Y" + arr[i].y + " E" + this.e.toFixed(3));

  }

  append(this.commands, ";End create path");
}

Gcode.prototype.createEnd = function(){
  append(this.commands, "M107         ;turn off fan");
  append(this.commands, "M104 S0      ;turn off temperature");
  append(this.commands, "M140 S0      ;heated bed heater off");
  append(this.commands, "G91          ;relative positioning");
  append(this.commands, "G1 E-1 F300  ;retract the filament a bit before lifting the nozzle, to release some of the pressure ");
  append(this.commands, "G1 Z+0.5 E-5 X-20 Y-20 F9000 ;move Z up a bit and retract filament even more");
  append(this.commands, "G28 X0      ;home X axis ");
  append(this.commands, "G28 Y0      ;home Y axis ");
  append(this.commands, "G1 Y150 F5000  ;move completed part out");
  append(this.commands, "M84          ;disable motors");
  append(this.commands, "G90          ;absolute positioning");
  append(this.commands, ";End of gcode");


}
Gcode.prototype.save = function(name){
  saveStrings(this.commands, name);
}

Gcode.prototype.testLayer = function(test, nozzle,layerheight, speed){
  var z = layerheight;
  append(this.commands, ";move to start positions");
  append(this.commands, "G0 F9000 X" + test[0].x +" Y" + test[0].y + " Z" + z + "     ;move to Z position" );
  append(this.commands, "G0 F" + speed + " ;move to beginning of outline");

  var d, newe;
  this.e = 0;
  for(i = 1; i < test.length-1; i+=2){
    d = p5.Vector.dist(test[i], test[i+1]);
    newe = layerheight * nozzle * d;
    this.e += newe;
    append(this.commands, "G1 X" + test[i].x +" Y" + test[i].y + " E" + this.e.toFixed(3));
    append(this.commands, "G0 X" + test[i+1].x +" Y" + test[i+1].y);

  }
}
Gcode.prototype.createFirstLines = function(test, nozzle,layerheight, speed){
  var z = layerheight;
  append(this.commands, ";move to start positions");
  append(this.commands, "G0 F9000 X" + test[0].x +" Y" + test[0].y + " Z" + z + "     ;move to Z position" );
  append(this.commands, "G0 F" + speed + " ;move to beginning of outline");

  var d,newe;
  var i;
  this.e = 0;
  for(i = 1; i < test.length-1; i+=2){
    d = p5.Vector.dist(test[i], test[i+1]);
    newe = layerheight * nozzle * d;
    this.e += newe;
    //if(i !=0){
    append(this.commands, "G0 X" + test[i+1].x +" Y" + test[i+1].y);
    //}
    append(this.commands, "G1 X" + test[i].x +" Y" + test[i].y + " E" + this.e.toFixed(3));


  }

}
  Gcode.prototype.testLayer1 = function(test, nozzle,layerheight, speed){
    var d, newe;
    var i;

    for(i = 1; i < test.length-1; i+=2){
      d = p5.Vector.dist(test[i], test[i+1]);
      newe = layerheight * nozzle * d;
      this.e += newe;
      //if(i !=0){
      append(this.commands, "G0 X" + test[i+1].x +" Y" + test[i+1].y);
      //}
      append(this.commands, "G1 X" + test[i].x +" Y" + test[i].y + " E" + this.e.toFixed(3));


    }

  }
  Gcode.prototype.testLayer2 = function(test, nozzle,layerheight, z, speed){

    append(this.commands, ";move to start positions");
    append(this.commands, "G0 Z" + z.toFixed(3) + ";move one level up");
    append(this.commands, "G0 F9000 X" + test[0].x +" Y" + test[0].y  );
    append(this.commands, "G0 F" + speed + " ;move to beginning of outline");

    var d, newe;
    var i;

    for(i = 1; i < test.length-1; i+=2){
      d = p5.Vector.dist(test[i], test[i+1]);
      newe = layerheight * nozzle * d;
      this.e += newe;
      //if(i !=0){
      append(this.commands, "G0 X" + test[i+1].x +" Y" + test[i+1].y);
      //}
      append(this.commands, "G1 X" + test[i].x +" Y" + test[i].y + " E" + this.e.toFixed(3));


    }

  }
