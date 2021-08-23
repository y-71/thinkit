import React, {useState} from 'react'
import { Typography } from 'antd';
import { URLs, selectTopByPlaytimeUrl } from './inputs';
import GamesListingTable from '../GamesListingTable';
import FilterSelect from '../FilterSelect';

const { Title } = Typography;

export default function Feed() {
    const [url, setUrl] = useState(selectTopByPlaytimeUrl);
    const getFilter = ()=>{
        if (url === selectTopByPlaytimeUrl) return "Playtime";
        return "Players";
    }
    return (
        <div>
            <FilterSelect data={URLs} setProp={setUrl}/>
            <Title level={2}>Top By {getFilter()}</Title>
            <GamesListingTable
                fetchUrl={url}
                />

        </div>
    )
}
