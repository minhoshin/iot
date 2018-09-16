const wpi = require('wiringpi-node');
wpi.setup('wpi');

const pin = 26;
let isOn = true;

wpi.pinMode(pin, wpi.OUTPUT);

setInterval( () => {
	if(isOn){
		wpi.digitalWrite(pin, wpi.HIGH);
		isOn = false;
	}else{
		wpi.digitalWrite(pin, wpi.LOW);
		isOn = true;
	}
}, 1000);
