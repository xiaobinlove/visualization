import { FC, DragEvent, createElement } from 'react'
import RGL, { WidthProvider, Layout } from 'react-grid-layout'
import { widgetMap } from '../../widgetMap'
import GridItemContainer from '../GridItemContainer'
import { doResize } from '@/utils'
import { useStore, gridLayoutSelector, isEditModeSelector, useSelector } from '@/store'
import { DashComponentType } from '@/types'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './index.less'
import classnames from 'classnames'
const ReactGridLayout = WidthProvider(RGL)
const prefix = 'db-dash-canvas'
const DashCanvas: FC = () => {
  const isEdit = useStore(isEditModeSelector)
  const gridLayouts = useStore(gridLayoutSelector)
  console.log(gridLayouts, 'gridLayouts')
  const { setCurWidetId, isDraggableInEdit, curWidgetId, addWidget, updateGrid, widgets } = useStore(
    useSelector(['setCurWidetId', 'addWidget', 'updateGrid', 'isDraggableInEdit', 'curWidgetId', 'widgets'])
  )

  const defaultProps = {
    className: 'layout',
    rowHeight: 5,
    cols: 60
  }
  const onLayoutChange = (layout: Layout[]) => {
    updateGrid(layout.filter((item) => item.i !== 'fromMenu'))
  }
  const onDrop = (_: Layout[], layoutItem: Layout, event: DragEvent) => {
    const data = event.dataTransfer.getData('text/plain') as DashComponentType
    const { w, h, x, y } = layoutItem
    const initData = widgetMap[data].initData
    const widgetId = addWidget({
      posX: x,
      posY: y,
      width: w,
      height: h,
      type: data,
      title: [DashComponentType.RICH_TEXT].includes(data) ? '' : '未命名',
      ...initData
    })
    setCurWidetId(widgetId)
  }
  const onResizeStop = (_layout: Layout[], layoutItem: Layout) => {
    const whiteList = [DashComponentType.COLUMN_CHART, DashComponentType.AREA_CHART]
    const cur = widgets[layoutItem.i]
    // 有些组件不存在resize后 视图组件无法autofit的问题，所以排除在名单外，无需手动强制resize
    if (whiteList.includes(cur.type)) {
      return
    }
    doResize()
  }
  const handleItemClick = (widgetId: string) => {
    setCurWidetId(widgetId)
  }
  return (
    <div className={prefix}>
      <ReactGridLayout
        layout={gridLayouts}
        {...defaultProps}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        isDroppable={isEdit}
        isDraggable={isEdit && isDraggableInEdit}
        isResizable={isEdit}
        onResizeStop={onResizeStop}
        droppingItem={{ i: 'fromMenu', w: 30, h: 20 }}
        // draggableHandle=".hd-grid-item-container__drag-handle"
      >
        {gridLayouts.map((item) => {
          const cur = widgets[item.i]
          return (
            <div
              key={item.i}
              className={classnames('hd-grid-item-container', { 'hd-grid-item-container--selected': curWidgetId === item.i })}
              onClick={() => {
                isEdit && handleItemClick(item.i)
              }}
            >
              <GridItemContainer title={cur.title} widgetId={item.i} isEdit={isEdit}>
                {createElement(widgetMap[cur.type].component, { widgetId: item.i })}
              </GridItemContainer>
            </div>
          )
        })}
      </ReactGridLayout>
    </div>
  )
}
export default DashCanvas
