import React, {useEffect, useState} from 'react';
import {Table, Space} from 'antd';
import axios from 'axios';
import {columns} from './columns';
import FilterSelect from '../FilterSelect';
import { Genres, Platforms } from './inputs';




export default function GamesListingTable({fetchUrl}) {

  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState(null);
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
        const fetchData = (genre, platform) => {
          return axios.get(fetchUrl,
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
        fetchData(genre,platform).then(games=>{
        setGames(games);
      });
    }, [genre, platform, fetchUrl]);
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
