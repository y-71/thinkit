import React from 'react';
import {map} from 'lodash';
import { Select } from 'antd';

const { Option } = Select;


export default function FilterSelect({data, setProp}) {
    function onChange(value) {
        setProp(value);
    }
    return (
        <div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder={data.placeholder}
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value={null}></Option>
                {map(data.options, option =><Option key={option} value={option}>{option}</Option>)}
            </Select>
        </div>
    )
}
