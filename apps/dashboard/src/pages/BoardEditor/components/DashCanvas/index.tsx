import { FC, useState } from 'react'
import RGL, { WidthProvider, Layout, DragOverEvent } from 'react-grid-layout'
const ReactGridLayout = WidthProvider(RGL)
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './index.less'

const prefix = 'db-dash-canvas'
const DashCanvas: FC = () => {
  const [layouts, setLayouts] = useState<Layout[]>([{ i: '0', x: 2, y: 1, w: 30, h: 10, minH: 2, minW: 2 }])
  const defaultProps = {
    className: 'layout',
    rowHeight: 10,
    cols: 60
  }
  const onLayoutChange = (layout: Layout[]) => {
    console.log(layout, 'layout')
    setLayouts(
      layout.map((item) => {
        if (item.i === 'test') {
          return { ...item, i: new Date().getTime() + '' }
        } else {
          return item
        }
      })
    )
  }
  const onDrop = (layout: Layout[], layoutItem: Layout, event: any) => {
    const data = event.dataTransfer.getData('text/plain')
    console.log(data, 'dataonDrop')
    console.log(layout, 'layout')
    console.log(layoutItem, 'layoutItem')
  }
  return (
    <div className={prefix}>
      <ReactGridLayout
        layout={layouts}
        {...defaultProps}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        preventCollision={true}
        isBounded={false}
        isDroppable={true}
        droppingItem={{ i: 'test', w: 30, h: 29 }}
      >
        {layouts.map((item) => {
          return (
            <div key={item.i} className="test">
              <span className="text">{item.i}</span>
            </div>
          )
        })}
      </ReactGridLayout>
    </div>
  )
}
export default DashCanvas
