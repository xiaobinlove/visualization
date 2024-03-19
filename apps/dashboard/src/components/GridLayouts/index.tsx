import { FC, createElement } from 'react'
import { useStore, useSelector } from '@/store'
import RGL, { WidthProvider, ReactGridLayoutProps } from 'react-grid-layout'
import GridItemContainer from '../GridItemContainer'
import { ComponentTreeItem } from '@/types'
import classnames from 'classnames'
import { widgetMap } from '@/pages/BoardEditor/widgetMap'
import 'react-grid-layout/css/styles.css'
import './index.less'
const ReactGridLayout = WidthProvider(RGL)
export interface GridLayoutProps extends ReactGridLayoutProps {
  isEdit: boolean
  componentTree: ComponentTreeItem[]
}
const ROW_HEIGHT = 10
export const COLS = 24
const GridLayouts: FC<GridLayoutProps> = ({
  isEdit,
  componentTree,
  onLayoutChange,
  onDrop,
  isDroppable,
  onResizeStop,
  isResizable,
  isDraggable,
  droppingItem
}) => {
  const { setCurWidetId, curWidgetId } = useStore(useSelector(['curWidgetId', 'setCurWidetId']))
  const handleItemClick = (e: MouseEvent, widgetId: string) => {
    e.stopPropagation()
    setCurWidetId(widgetId)
  }
  const render = (layout: ComponentTreeItem[]) => {
    const gridLayouts = layout.map(({ width, height, posX, posY, id }) => ({ x: posX, y: posY, w: width, h: height, i: id }))
    return (
      <ReactGridLayout
        rowHeight={ROW_HEIGHT}
        cols={COLS}
        layout={gridLayouts}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        isDroppable={isDroppable}
        isDraggable={isDraggable}
        isResizable={isResizable}
        onResizeStop={onResizeStop}
        droppingItem={droppingItem}
        // draggableHandle=".hd-grid-item-container__drag-handle"
      >
        {layout.map((item) => {
          const { component, showTitle } = widgetMap[item.type]
          return (
            <div
              key={item.id}
              className={classnames('hd-grid-item-container', { 'hd-grid-item-container--selected': curWidgetId === item.id })}
              onClick={(e) => {
                isEdit && handleItemClick(e, item.id)
              }}
            >
              <GridItemContainer title={item.title} widgetId={item.id} isEdit={isEdit} type={item.type} data={item.data} showTitle={showTitle}>
                {createElement(component, { widgetId: item.id, data: item.data, isEdit }, item.children.length > 0 && render(item.children))}
              </GridItemContainer>
            </div>
          )
        })}
      </ReactGridLayout>
    )
  }
  return render(componentTree)
  // return (
  //   <ReactGridLayout
  //     rowHeight={ROW_HEIGHT}
  //     cols={COLS}
  //     layout={gridLayouts}
  //     onLayoutChange={onLayoutChange}
  //     onDrop={onDrop}
  //     isDroppable={isDroppable}
  //     isDraggable={isDraggable}
  //     isResizable={isResizable}
  //     onResizeStop={onResizeStop}
  //     droppingItem={droppingItem}
  //     // draggableHandle=".hd-grid-item-container__drag-handle"
  //   >
  //     {gridLayouts.map((item) => {
  //       const cur = widgets[item.i]
  //       const { component, showTitle } = widgetMap[cur.type]
  //       return (
  //         <div
  //           key={item.i}
  //           className={classnames('hd-grid-item-container', { 'hd-grid-item-container--selected': curWidgetId === item.i })}
  //           onClick={(e) => {
  //             isEdit && handleItemClick(e, item.i)
  //           }}
  //         >
  //           <GridItemContainer title={cur.title} widgetId={item.i} isEdit={isEdit} type={cur.type} data={cur.data} showTitle={showTitle}>
  //             {createElement(component, { widgetId: item.i, data: cur.data, isEdit })}
  //           </GridItemContainer>
  //         </div>
  //       )
  //     })}
  //   </ReactGridLayout>
  // )
}
export default GridLayouts
