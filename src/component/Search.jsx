import React from 'react'
import { Divider, Input } from 'antd';

function Search({search, setSearch}) {
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={event => setSearch( event.target.value)} />
    </div>
  )
}

export default Search