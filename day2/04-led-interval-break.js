const wpi = require('wiringpi-node');
wpi.setup('wpi');

const pin = 26;
let isOn = true;
let i = 0;

wpi.pinMode(pin, wpi.OUTPUT);

let t = setInterval( () => {
	if(isOn){
		wpi.digitalWrite(pin, wpi.HIGH);
		isOn = false;
	}else{
		wpi.digitalWrite(pin, wpi.LOW);
		isOn = true;
	}
	i++;
	console.log(`count ${i}, count 10 is stop`);
	if(i === 10){
		wpi.digitalWrite(pin, wpi.LOW);
		clearInterval(t);
	}
}, 1000);
