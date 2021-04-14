// src/routes.js
import moment from 'moment';

let home = (req, res) => res.send('Hello World, ovaj puta iz paketa!')
let student = (req, res) => res.send('Ruta za studente preko novog paketa.')

var currentTime = moment().format("dd.mm.yyyy HH:MM")
let datum = (req, res) => res.send(currentTime)

export default { home, student, datum } // na kraju navodimo koje JS objekte treba eksportati
