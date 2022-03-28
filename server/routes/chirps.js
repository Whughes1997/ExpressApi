const express = require('express');
const res = require('express/lib/response');
let chirpStore = require('./chirpstore')
let router = express.Router();

router.get('/', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chirpStore.GetChirp(req));
    } else {

        res.send(chirpStore.GetChirps(id));
    }
});

router.post('/', (req, res) => {
    chirpStore.createChirp(req.body);
    res.sendStatus(200);
})

//Put template was tricky to understand
router.put('/', (req, res) => {
    Host: 3000
    Content - type: text
    Content - length: 16

        <
        p > New File < /p>
})

//I was not sure what to delete so I kind of just took a template. Hope thats okay!
router.delete('/')(req, res) => {
DELETE / file.html HTTP / 1.1
Host: example.com
})















module.exports = router;