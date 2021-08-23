import {Tag} from 'antd';

export const columns = [
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
