// Add needed module

var wpi = require('wiring-pi');

var sleep = require('sleep');

var microtime = require('microtime');



// Set var 

var TRIG, ECHO;



TRIG = 15;

ECHO = 16;



wpi.setup('gpio');

wpi.wiringPiSetup();



// Init pin mode 

wpi.pinMode(TRIG, wpi.OUTPUT);

wpi.pinMode(ECHO, wpi.INPUT);



// Calc 

var t = setInterval(function(){

    // Make a wave

    wpi.digitalWrite(TRIG, wpi.LOW);

    sleep.usleep(2);

    wpi.digitalWrite(TRIG, wpi.HIGH);

    sleep.usleep(20);

    wpi.digitalWrite(TRIG, wpi.LOW);

    

    // Check start time (echo == 1)

    while(wpi.digitalRead(ECHO) == wpi.LOW);

    var startTime = microtime.now();

    

    // Check end time (echo == 0) 

    while(wpi.digitalRead(ECHO) == wpi.HIGH);

    var endTime = microtime.now();

    

    // Calc distance 

    var distance = (endTime - startTime) / 58;

    

    // Print at console 

    console.log('[DISTANCE]:'+distance+'cm');



}, 1000); 
