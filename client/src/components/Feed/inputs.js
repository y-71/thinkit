const fetchUrl = "http://localhost:7000"

const selectTopByPlayersUrl = `${fetchUrl}/select_top_by_players`;
export const selectTopByPlaytimeUrl = `${fetchUrl}/select_top_by_playtime`;

export const URLs ={
    placeholder:"order by",
    options:[
        {
            name:"Players",
            value:selectTopByPlayersUrl
        },
        {
            name:"Playtime",
            value:selectTopByPlaytimeUrl
        }
    ]
}