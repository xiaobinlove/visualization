import { FC, forwardRef } from 'react'
import { Layout } from 'react-grid-layout'
import { widgetsConfigMap } from '../base.ts'
import GridLayouts from '@/components/GridLayouts'
import { CanvasContainer } from '../components/CanvasContainer'
import { doResize } from '@/utils'
import { useStore, isEditModeSelector, useSelector, gridLayoutSelector } from '@/store'
import { DashComponentType } from '@/types'
import { useMount } from 'ahooks'
import 'react-grid-layout/css/styles.css'
import './index.less'
type Ref = HTMLDivElement | null
const prefix = 'db-dash-canvas'
const DashCanvas = forwardRef<Ref>((_, ref) => {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop = (_: Layout[], layoutItem: Layout, event: any) => {
    const data = event.dataTransfer.getData('text/plain') as DashComponentType
    const { w, h, x, y } = layoutItem
    const { defaultData, name } = widgetsConfigMap[data]
    const widgetId = addWidget({
      posX: x,
      posY: y,
      width: w,
      height: h,
      type: data,
      title: '未命名' + name,
      ...defaultData
    })
    setCurWidetId(widgetId)
  }
  const onResizeStop = () => {
    doResize()
  }

  const handleLayoutClick = () => {
    setCurWidetId('')
  }
  return (
    <div className={prefix} onClick={handleLayoutClick} ref={ref}>
      <CanvasContainer>
        <GridLayouts
          isEdit={isEdit}
          onLayoutChange={onLayoutChange}
          onDrop={onDrop}
          componentTree={componentTree}
          isDroppable={isEdit}
          isDraggable={isEdit && isDraggableInEdit}
          isResizable={true}
          onResizeStop={onResizeStop}
          droppingItem={{ i: 'fromMenu', w: 4, h: 10 }}
        ></GridLayouts>
      </CanvasContainer>
    </div>
  )
})
export default DashCanvas
