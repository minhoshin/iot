const wpi = require('wiringpi-node');
wpi.setup('wpi');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const pin = 26;
wpi.pinMode(pin, wpi.OUTPUT);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/ledon', (req, res) => {
	console.log('led on ' + Date());
	wpi.digitalWrite(pin, wpi.HIGH);
	res.send('led on');
});

app.get('/ledoff', (req, res) => {
	console.log('led off ' + Date());
	wpi.digitalWrite(pin, wpi.LOW);
	res.send('led off');
});

app.listen(8080, () => {
	console.log('Server is running on port 8080!');
});
