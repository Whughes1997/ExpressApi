const express = require('express');
const { append } = require('express/lib/response');
const chirpsRouter = require('./chirps');
let router = express.Router();
import chirps from('./chirpstore')


app.use('./chirps', apiRouter)
router.get('/', (req, res) => {
            let id = req.params.id
            if (id) {
                res.json(chirpStore.GetChirp(req));

                router.use('/chirps', chirpsRouter)