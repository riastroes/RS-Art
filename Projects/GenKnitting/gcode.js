function Gcode(){
  this.commands = [];
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
  append(this.commands, "G28; Home Axis");
  append(this.commands, "G29; Z-Probe the bed (requires Z-Probe!)");
  append(this.commands, "G1 Z5.0 F9000 ;move the head 5mm up for CYA clearance");
  append(this.commands, "G92 E0 ;zero the extruded length");
  append(this.commands, "M117 Cleaning...;Put Cleaning message on screen");
  append(this.commands, "G1 X100 Y0 F4000 ; move half way along the front edge");
  append(this.commands, "G1 Z1 ; move nozzle close to bed");
  append(this.commands, "M109 S200 ; heat nozzle to 200 degC and wait until reached");

  append(this.commands, "G4 P10000 ; wait 10 seconds for nozzle length to stabilize");
  append(this.commands, "G1 E10 ; extrude 10 mm of filament");
  append(this.commands, "G1 z15 F12000 E5 ; move 15 mm up, fast, while extruding 5mm");
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
  var e = 0; //extrude
  var newe; //more extrude
  append(this.commands, ";create outline");
  append(this.commands, "G0 F" + speed*2);
  for(i = 1; i < outline.length; i++){
    if(i == 1){e = 0}
    else{
      d = p5.Vector.dist(outline[i-1], outline[i]);
      newe = layerheight * nozzle * d;
      e += newe;
    }
    append(this.commands, "G1 X" + outline[i].x +" Y" + outline[i].y+ " E" + e.toFixed(3) );
  }
  d = p5.Vector.dist(outline[i-1], outline[0]);
  newe = layerheight * nozzle * d;
  e += newe;

  append(this.commands, "G1 X" + outline[0].x +" Y" + outline[0].y+ " E" + e.toFixed(3) );
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
  var e =0; //extrude
  var newe;
  append(this.commands, ";create path");
  append(this.commands, "G1 F" + speed);
  for(i = 1; i < arr.length; i++){
    d = p5.Vector.dist(arr[i-1], arr[i]);
    newe = layerheight * nozzle * d;
    e += newe;

    append(this.commands, "G1 X" + arr[i].x +" Y" + arr[i].y + " E" + e.toFixed(3));

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
  append(this.commands, "G28 X0 Y0      ;home X axis ");
  append(this.commands, "G1 Y150 F5000  ;move completed part out");
  append(this.commands, "M84          ;disable motors");
  append(this.commands, "G90          ;absolute positioning");
  append(this.commands, ";End of gcode");


}
Gcode.prototype.save = function(name){
  saveStrings(this.commands, name);
}
