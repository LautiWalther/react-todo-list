const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const fs = require('fs');

const data = require('./data.json');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({data: data.filter(i => !i.checked)});
})

app.get('/:id', (req, res) => {
    let id = req.params.id;
    let indexof = data.findIndex(i => i.id == +id);
    data[indexof].checked = true;
    fs.writeFileSync('./data.json', JSON.stringify(data, null, "\t"));
    res.json({data: data.filter(i => !i.checked)});
});

app.post('/', (req, res) => {
    let text = req.body.text;
    console.log(req.body);
    data.push({
        id: data[data.length - 1].id + 1,
        text: text,
        checked: false
    })
    fs.writeFileSync('./data.json', JSON.stringify(data, null, "\t"));
    res.json({data: data.filter(i => !i.checked)});
})

app.listen(8000, () => console.log('App listening on port 8000'))