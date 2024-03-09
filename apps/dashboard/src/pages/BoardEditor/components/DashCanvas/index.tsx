import { FC } from 'react'
import RGL, { WidthProvider, Layout } from 'react-grid-layout'
import { widgetMap } from '../../widgetMap'
const ReactGridLayout = WidthProvider(RGL)
import GridItemContainer from '../GridItemContainer'
import { useStore, gridLayoutSelector } from '@/store'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './index.less'

const prefix = 'db-dash-canvas'
const DashCanvas: FC = () => {
  const gridLayouts = useStore(gridLayoutSelector)
  const widgets = useStore((state) => state.widgets)
  const updateGrid = useStore((state) => state.updateGrid)
  const defaultProps = {
    className: 'layout',
    rowHeight: 5,
    cols: 60
  }
  const onLayoutChange = (layout: Layout[]) => {
    updateGrid(layout)
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
        layout={gridLayouts}
        {...defaultProps}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        isDroppable={true}
        droppingItem={{ i: 'widget_' + new Date().getTime(), w: 30, h: 20 }}
      >
        {gridLayouts.map((item) => {
          const cur = widgets[item.i]
          const Component = widgetMap[cur.type]
          return (
            <div key={item.i}>
              <GridItemContainer title={cur.title}>
                <Component />
              </GridItemContainer>
            </div>
          )
        })}
      </ReactGridLayout>
    </div>
  )
}
export default DashCanvas
