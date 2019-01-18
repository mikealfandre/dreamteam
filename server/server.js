const express = require('express');
const bodyParser = require('body-parser')
const cr = require('./controllers')

const app = express();
app.use(bodyParser.json());

app.listen(4000, () => console.log('We are listening'))

app.get('/api/players', cr.readPlayers)
app.get('/api/teams', cr.readTeams)
app.post('/api/saveteam', cr.saveTeam)
app.delete('/api/deleteteam/:id', cr.deleteTeam)
app.put('/api/updateteam/:id', cr.updateTeamName)
