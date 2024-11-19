import React, { FC, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import CustomTree from './Tree'
import './index.less'

interface ItemType {
  id: number
  name: string
}

export const BasicFunction: FC = (props) => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: 'shrek4' },
    { id: 2, name: 'fiona3' },
    { id: 3, name: 'fiona2' },
    { id: 4, name: 'fiona1' }
  ])

  return (
    <div className="test111">
      <CustomTree />
      <div
        onDragOver={(e) => {
          console.log(e, 'e')
          e.preventDefault()
        }}
        onDrop={(e) => {
          e.preventDefault()
          const data = JSON.parse(e.dataTransfer.getData('draggedItem'))
          console.log(data)
        }}
      >
        <ReactSortable list={state} setList={setState}>
          {state.map((item) => (
            <div key={item.id} data-test={item.name}>
              {item.name}
            </div>
          ))}
        </ReactSortable>
      </div>
    </div>
  )
}
export default BasicFunction
