import React, {useEffect, useState} from 'react';
import {Table, Tag} from 'antd';
import axios from 'axios';


const fetchData = (genre, platform) => {
  return axios.get('http://localhost:7000/select_top_by_playtime',
          {
            params:{
              genre,
              platform
            }
          })
          .then((res)=>{
              return res.data.games;
          })
          .catch((err)=>{
            console.error(err);
          });
};


const columns = [
    {
        title: 'Game',
        dataIndex: 'game',
        key: 'game',
    },
    {
        title: 'Genre',
        dataIndex: 'genre',
        key: 'genre',
    },
    {
      title: 'Play Time',
      dataIndex: 'playTime',
      key: 'playTime',
    },{
      title: 'Players',
      dataIndex: 'players',
      key: 'players',
    },
    {
        title: 'Platforms',
        key: 'platforms',
        dataIndex: 'platforms',
        render: platforms => (
          <>
            {platforms.map(platform => {
              let color = platform.length > 5 ? 'geekblue' : 'green';
              if (platform === 'PC') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={platform}>
                  {platform.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
]

export default function GamesListingTable() {

  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState(null);
  const [platform, setPlatform] = useState(null);
  
  useEffect(() => {
      fetchData(genre,platform).then(games=>{
        setGames(games);
      });
    }, [])
    return (
        <div>
            <Table columns={columns} dataSource={games} rowKey="game" />
        </div>
    )
}
