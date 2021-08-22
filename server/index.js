const express = require('express');
const { sort, getGames, filter } = require('./util');
plays = require('./data/plays.json');

require('dotenv').config();

app = express();
const PORT = process.env.PORT || 4000;

const games = getGames(plays);

app.get('/select_top_by_playtime', (req,res) => {
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
