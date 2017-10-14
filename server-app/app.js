const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '',
    key: '',
    secret: '',
    cluster: '',
    encrypted: true
});


app.set('port', (process.env.PORT || 5000));



app.get('/inputInStreaming', (req,res) => {
    pusher.trigger('inputStreaming', 'focusInStreaming', {
        "message": "inFocus done"
    });
    res.send('inFocus done');
});

app.get('/inputOutStreaming', (req,res) => {
    pusher.trigger('inputStreaming', 'focusOutStreaming', {
        "message": "outFocus done"
    });
    res.send('outFocus done');
});


app.post('/inputStreaming/text', (req, res) => {
    let text = req.body.text;
    pusher.trigger('inputStreaming', 'focusTextStreaming', {
        "message": text
    });
    res.send('focusText done');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});