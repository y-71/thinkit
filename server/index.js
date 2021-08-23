const express = require('express');
const { sort, getGames, filter } = require('./util');
const cors = require('cors');
const filters = require('./constants');

plays = require('./data/plays.json');

require('dotenv').config();

app = express();
const PORT = process.env.PORT || 4000;

const games = getGames(plays);

const selectTopBy = (res, req, filterMethod)=>{
    const params = req.query;

    let filtered_games = filter(games, params);
    filtered_games = sort(filtered_games, filterMethod);

    res.status(200).json({
        games : filtered_games
    });
}

app.get('/select_top_by_playtime', cors(process.env.CORS_OPTIONS), (req,res) => {
    selectTopBy(res, req, filters.PLAYTIME);
});

app.get('/select_top_by_players', cors(process.env.CORS_OPTIONS), (req,res) => {
    selectTopBy(res, req, filters.PLAYERS);
});


app.listen(PORT, ()=>{
    console.log(`🚀  Server ready on port ${PORT}`);
});
