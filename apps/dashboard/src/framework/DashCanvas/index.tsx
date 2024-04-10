import { FC, DragEvent } from 'react'
import { Layout } from 'react-grid-layout'
import { widgetMap } from '../widgetMap.tsx'
import GridLayouts from '@/components/GridLayouts'
import { CanvasContainer } from '../components/CanvasContainer'
import { doResize } from '@/utils'
import { useStore, isEditModeSelector, useSelector, gridLayoutSelector } from '@/store'
import { DashComponentType } from '@/types'
import { useMount } from 'ahooks'
import 'react-grid-layout/css/styles.css'
import './index.less'
const prefix = 'db-dash-canvas'
const DashCanvas: FC = () => {
  const isEdit = useStore(isEditModeSelector)
  const { setCurWidetId, isDraggableInEdit, addWidget, updateGrid, widgets, setWidgets, updateStyles } = useStore(
    useSelector(['setCurWidetId', 'addWidget', 'updateGrid', 'isDraggableInEdit', 'curWidgetId', 'widgets', 'setWidgets', 'updateStyles'])
  )
  const params = new URLSearchParams(location.search)
  const id = params.get('id')
  useMount(() => {
    if (id) {
      const data = localStorage.getItem(`dash-data${id}`)
      if (data) {
        const { widgets, styles } = JSON.parse(data)
        widgets && setWidgets(widgets)
        styles && updateStyles(styles)
      }
      doResize()
    }
  })
  const componentTree = useStore(gridLayoutSelector)
  const onLayoutChange = (layout: Layout[]) => {
    updateGrid(layout.filter((item) => item.i !== 'fromMenu'))
  }
  const onDrop = (_: Layout[], layoutItem: Layout, event: DragEvent) => {
    const data = event.dataTransfer.getData('text/plain') as DashComponentType
    const { w, h, x, y } = layoutItem
    const { initData, name } = widgetMap[data]
    const widgetId = addWidget({
      posX: x,
      posY: y,
      width: w,
      height: h,
      type: data,
      title: '未命名' + name,
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
  const handleLayoutClick = () => {
    // e.stopPropagation()
    setCurWidetId('')
  }
  return (
    <div className={prefix} onClick={handleLayoutClick}>
      <CanvasContainer>
        <GridLayouts
          isEdit={isEdit}
          onLayoutChange={onLayoutChange}
          onDrop={onDrop}
          componentTree={componentTree}
          isDroppable={isEdit}
          isDraggable={isEdit && isDraggableInEdit}
          isResizable={isEdit}
          onResizeStop={onResizeStop}
          droppingItem={{ i: 'fromMenu', w: 4, h: 10 }}
        ></GridLayouts>
      </CanvasContainer>
    </div>
  )
}
export default DashCanvas
