const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,  'build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'app', 'build', 'index.html'));
});

app.get('/api/data', (req, res) => {
    res.send({data: "Success"})
})

app.listen(4000);