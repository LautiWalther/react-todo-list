import { useState } from 'react';

import Item from './Item';

const ListItems = () => {

  const [list, setList] = useState([
    {
      id: 1,
      text: 'TodoItem1',
      checked: false
    },
    {
      id: 2,
      text: 'TodoItem2',
      checked: false
    },
    {
      id: 3,
      text: 'TodoItem3',
      checked: false
    },
  ]);

  return (
    <ul className="list-group" style={{'padding': '0'}}>
      {
        list.map(item => {
          return (
            <Item id={item.id} text={item.text} key={item.id}></Item>
          )
        })
    }
    </ul>
  )
}

export default ListItems;