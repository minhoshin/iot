const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/ledon', (req, res) => {
	console.log('led on ' + Date());
	res.send('led on');
});

app.get('/ledoff', (req, res) => {
	console.log('led off ' + Date());
	res.send('led off');
});

app.listen(8080, () => {
	console.log('Server is running on port 8080!');
});
