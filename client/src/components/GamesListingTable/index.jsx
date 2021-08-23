import React, {useEffect, useState} from 'react';
import {Table, Space} from 'antd';
import axios from 'axios';
import {columns} from './columns';
import FilterSelect from './FilterSelect';
import { Genres, Platforms } from './inputs';

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



export default function GamesListingTable() {

  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState(null);
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
      fetchData(genre,platform).then(games=>{
        setGames(games);
      });
    }, [genre, platform])
    return (
        <div>
            <Space>
              <FilterSelect data={Genres} setProp={setGenre}/>
              <FilterSelect data={Platforms} setProp={setPlatform}/>
            </Space>
            <Table columns={columns} dataSource={games} rowKey="game" />
        </div>
    )
}
