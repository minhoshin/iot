const wpi = require('wiringpi-node');
const sleep = require('sleep');
const microtime = require('microtime');

wpi.setup('wpi');

const TRIG = 15;
const ECHO = 16;
const redPin = 27;
const yellowPin = 26;


wpi.pinMode(TRIG, wpi.OUTPUT);
wpi.pinMode(ECHO, wpi.INPUT);
wpi.pinMode(redPin, wpi.OUTPUT);
wpi.pinMode(yellowPin, wpi.OUTPUT);

function pulseIn(pin, state){
	var MAX_LOOPS = 1000000;
	var numloops = 0;

	while(wpi.digitalRead(pin) != state){
		if(numloops++ == MAX_LOOPS)
			return 0;
	}
	var timeStart = microtime.now();

	while(wpi.digitalRead(pin) == state){
		if(numloops++ == MAX_LOOPS)
			return 0;
	}
	return microtime.now() - timeStart;
}

setInterval(function(){
	wpi.digitalWrite(TRIG, wpi.LOW);
	sleep.usleep(2);
	wpi.digitalWrite(TRIG, wpi.HIGH);
	sleep.usleep(20);
	wpi.digitalWrite(TRIG, wpi.LOW);

	var duration = pulseIn(ECHO, wpi.HIGH);

	var distance = Math.floor(duration/58);
	
	if(distance < 5){
		wpi.digitalWrite(redPin, wpi.HIGH);
		wpi.digitalWrite(yellowPin, wpi.LOW);
	}else{
		wpi.digitalWrite(yellowPin, wpi.HIGH);
		wpi.digitalWrite(redPin, wpi.LOW);
	}

	console.log('distance : ' + distance + 'cm');
}, 1000)
