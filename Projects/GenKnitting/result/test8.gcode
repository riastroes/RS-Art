;Generated GCode by Ria Stroes
;Project: Generated Knittings
;3D-printer: Ultimaker 2+
;tempbed = 70
;tempextruder = 210
;nozzle = 0.4
;firstlayerheight = 0.27
;layerheight = 0.3
;speed = 2400
;outlinerounds = 10
;outlinerounddist = 4
;maxlayers = 5
;starting commands
G21 ;metric values
M82 ;set extruder to absolute mode
G90 ;absolute positioning
M107 ;start with the fan off
M109 S180 B210 F1;activate auto temp min 180 max 210 scaling factor 1 (for PLA)
G28; Home Axis
G29; Z-Probe the bed (requires Z-Probe!)
G1 Z5.0 F9000 ;move the head 5mm up for CYA clearance
G92 E0 ;zero the extruded length
M117 Cleaning...;Put Cleaning message on screen
G1 X100 Y0 F4000 ; move half way along the front edge
G1 Z1 ; move nozzle close to bed
M109 S200 ; heat nozzle to 200 degC and wait until reached
G4 P10000 ; wait 10 seconds for nozzle length to stabilize
G1 E10 ; extrude 10 mm of filament
G1 z15 F12000 E5 ; move 15 mm up, fast, while extruding 5mm
G92 E0 ; reset extruder
M117 Printing...;Put printing message on LCD screen
;move to start positions
G0 F9000 X100 Y100 Z0.27     ;move to Z position
G0 F2400 ;move to beginning of outline
G1 X100 Y100 E1.080
G0 X100.000 Y110.000
G1 X120.000 Y110.000 E3.495
G0 X100.000 Y120.000
G1 X130.000 Y120.000 E6.910
G0 X100.000 Y130.000
G1 X140.000 Y130.000 E11.363
G0 X100.000 Y140.000
M107         ;turn off fan
M104 S0      ;turn off temperature
M140 S0      ;heated bed heater off
G91          ;relative positioning
G1 E-1 F300  ;retract the filament a bit before lifting the nozzle, to release some of the pressure 
G1 Z+0.5 E-5 X-20 Y-20 F9000 ;move Z up a bit and retract filament even more
G28 X0 Y0      ;home X axis 
G1 Y150 F5000  ;move completed part out
M84          ;disable motors
G90          ;absolute positioning
;End of gcode