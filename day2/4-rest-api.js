const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/ledon', (req, res) => {
	console.log('led on');
	res.send('led on');
});

app.get('/ledoff', (req, res) => {
	console.log('led off');
	res.send('led off');
});

app.listen(8080, () => {
	console.log('Server is running on port 8080!');
});
