// src/index.js
import express from 'express';
import routes from './routes';

const app = express()
const port = 3000 // http://localhost:3000/
const staticMiddleware = express.static('public') // direktorij sa statičkim datotekama

app.use('/', staticMiddleware)
app.get('/dinamicki', (req, res) => res.send(`Dinamički odgovor`))
app.get('/student', routes.student)
app.get('/datum', routes.datum)
app.listen(port, () => console.log(`Slušam na portu ${port}!`))

const prognoza = ["sunčano", "kišovito", "oblačno"];
const random = Math.floor(Math.random() * prognoza.length);
console.log('Danas će biti', prognoza[random]);