const wpi = require('wiringpi-node');
wpi.setup('wpi');

const sensorInPin = 25;
let pir_state = true;

wpi.pinMode(sensorInPin, wpi.INPUT);
wpi.digitalWrite(sensorInPin, wpi.LOW);

setInterval(function(){
        if(pir_state){
                if(wpi.digitalRead(sensorInPin)){
                        console.log('누군가 있어요');
                        pir_state = false;
			setTimeout(function(){
                                pir_state = true;
                                wpi.digitalWrite(sensorInPin, wpi.LOW);
                        }, 2000);
                }else{
                        console.log('아무도 없어요');
                }
        }
}, 1000);
