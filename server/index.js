const express = require('express');
const path = require('path');
const app = express();

app.get('/api/data', (req, res) => {
    res.send({data: "Success"})
})

app.use(express.static(path.join(__dirname,  '..', 'client', 'build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(4000, '0.0.0.0');
