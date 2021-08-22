import React from 'react';
import {Table, Tag} from 'antd';

let data = [
  {
    userId: 8,
    game: "League of legends",
    playTime: 500,
    genre: "MOBA",
    platforms: ["PC"],
  },
  {
    userId: 7,
    game: "World of warcraft",
    playTime: 1500,
    genre: "MMORPG",
    platforms: ["PC"],
  },
  {
    userId: 1,
    game: "The last of us 2",
    playTime: 100,
    genre: "FPS",
    platforms: ["PS4", "PC"],
  },
  {
    userId: 7,
    game: "Hearthstone",
    playTime: 1000,
    genre: "Card Game",
    platforms: ["PC"],
  },
  {
    userId: 7,
    game: "FIFA 2020",
    playTime: 2000,
    genre: "Sport",
    platforms: ["PC", "PS4", "XBOX"],
  },
  {
    userId: 2,
    game: "Among Us",
    playTime: 5000,
    genre: "Multiplayer",
    platforms: ["PC", "Android"],
  },
  {
    userId: 2,
    game: "Valorant",
    playTime: 2000,
    genre: "FPS",
    platforms: ["PC"],
  },
];

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
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
