import { useState , useEffect } from 'react';

import Item from './Item';

import {useData} from './Context';

const ListItems = ({children}) => {

  const data = useData();

  useEffect(() => {
    var ready = false

    const fetchItems = async () => {
      const response = await fetch('http://localhost:8000');
      const json = await response.json();
      if(!ready) {
        data.setList(json.data);
      }
    }
    fetchItems();

    return () => ready = true;
  }, [data.reload]);

  return (
    <ul className="list-group" style={{'padding': '0'}}>
      {
        data.list.map(item => {
          return (
            <Item id={item.id} text={item.text} key={item.id}></Item>
          )
        })
    }
    { children }
    </ul>
  )
}

export default ListItems;