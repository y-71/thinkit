const express = require('express');
const _ = require('lodash');
plays = require('./data/plays.json');
require('dotenv').config();

app = express();
const PORT = process.env.PORT || 4000;

const filterBy = (games, value, parameter) =>{
    const filtered_games = _.filter(games, function(game) {
        switch (parameter){
            case 'genre':
                return game.genre === value;
            case 'platform':
                return _.includes(game.platforms, value);
        }
    });
    return filtered_games;
};

const filter = (games, params) => {
    let filtered_games = games;

    _.forEach(params, (value, parameter)=>{
            filtered_games = filterBy(filtered_games, value, parameter);
        });

    return filtered_games;

};

const getGames = (plays) =>{
    let gamesMap = {};

    /* create a map to efficiently store the games data */
    _.forEach(plays, play => {
        game = play.game;
        if (!(game in gamesMap)){
            gamesMap[game] ={
                playTime : 0,
                players : 0,
                platforms : play.platforms,
                genre: play.genre
            };
        }
        gamesMap[game].playTime += play.playTime;
        gamesMap[game].players += 1;
    });

    /* flatten the map into an array */
    const games = _.map(gamesMap, (game, name)=>{
        return {
            game: name,
            playTime: game.playTime,
            players: game.players,
            platforms: game.platforms,
            genre: game.genre
        };
    });
    return games;

};

const sort = (collection, field)=>{
    return _.sortBy(collection, [function(object) { return object[field]; }]);
}
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
