import { FC, Event } from 'react'
import RGL, { WidthProvider, Layout } from 'react-grid-layout'
import { widgetMap } from '../../widgetMap'
import GridItemContainer from '../GridItemContainer'
import { doResize } from '@/utils'
import { useStore, gridLayoutSelector, isEditModeSelector } from '@/store'
import { DashComponentType } from '@/types'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './index.less'
const ReactGridLayout = WidthProvider(RGL)
const prefix = 'db-dash-canvas'
const DashCanvas: FC = () => {
  const isEdit = useStore(isEditModeSelector)
  const gridLayouts = useStore(gridLayoutSelector)
  console.log(gridLayouts, 'gridLayouts')
  const widgets = useStore((state) => state.widgets)
  const addWidget = useStore((state) => state.addWidget)
  const updateGrid = useStore((state) => state.updateGrid)
  const defaultProps = {
    className: 'layout',
    rowHeight: 5,
    cols: 60
  }
  const onLayoutChange = (layout: Layout[]) => {
    updateGrid(layout.filter((item) => item.i !== 'fromMenu'))
  }
  const onDrop = (layout: Layout[], layoutItem: Layout, event: Event) => {
    const data: DashComponentType = event.dataTransfer.getData('text/plain')
    const { w, h, x, y } = layoutItem
    addWidget({
      posX: x,
      posY: y,
      width: w,
      height: h,
      type: data,
      title: '未命名',
      xFields: [],
      metrics: []
    })
  }
  const onResizeStop = (layout: Layout[], layoutItem: Layout) => {
    const whiteList = [DashComponentType.COLUMN_CHART]
    const cur = widgets[layoutItem.i]
    // 有些组件不存在resize后 视图组件无法autofit的问题，所以排除在名单外，无需手动强制resize
    if (whiteList.includes(cur.type)) {
      return
    }
    doResize()
  }
  return (
    <div className={prefix}>
      <ReactGridLayout
        layout={gridLayouts}
        {...defaultProps}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        isDroppable={isEdit}
        isDraggable={isEdit}
        isResizable={isEdit}
        onResizeStop={onResizeStop}
        droppingItem={{ i: 'fromMenu', w: 30, h: 20 }}
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
