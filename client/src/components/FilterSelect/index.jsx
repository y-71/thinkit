import React from 'react';
import {map} from 'lodash';
import { Select } from 'antd';

const { Option } = Select;


export default function FilterSelect({data, setProp}) {
    function onChange(value) {
        setProp(value);
    }
    const getPlaceholder = ()=>{
        return (data && data.placeholder)?data.placeholder:"";
    };
    const getOptions = ()=>{
        return (data&&data.options)?data.options:[];
    };
    return (
        <div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder={getPlaceholder()}
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value={null}>{getPlaceholder()}</Option>
                {map(getOptions(), option =><Option key={option.name} value={option.value}>{option.name}</Option>)}
            </Select>
        </div>
    )
}
