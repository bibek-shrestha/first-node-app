let express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname});
});

app.listen(3000);

console.log('Server has started');
