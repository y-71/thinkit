const express = require('express');
const { sort, getGames, filter } = require('./util');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

plays = require('./data/plays.json');

require('dotenv').config();

app = express();
const PORT = process.env.PORT || 4000;

const games = getGames(plays);

app.get('/select_top_by_playtime', cors(corsOptions), (req,res) => {
    const params = req.query;

    let filtered_games = filter(games, params);
    filtered_games = sort(filtered_games, 'playTime');

    res.status(200).json({
        games : filtered_games
    });
});


app.listen(PORT, ()=>{
    console.log(`🚀  Server ready on port ${PORT}`)
});
