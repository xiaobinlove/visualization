import { FC, createElement } from 'react'
import { useStore, gridLayoutSelector, useSelector } from '@/store'
import RGL, { WidthProvider, ReactGridLayoutProps } from 'react-grid-layout'
import GridItemContainer from '../GridItemContainer'
import classnames from 'classnames'
import { widgetMap } from '@/pages/BoardEditor/widgetMap'
import 'react-grid-layout/css/styles.css'
import './index.less'
const ReactGridLayout = WidthProvider(RGL)
export interface GridLayoutProps extends ReactGridLayoutProps {
  isEdit: boolean
}
const ROW_HEIGHT = 10
export const COLS = 24
const GridLayouts: FC<GridLayoutProps> = ({ isEdit, onLayoutChange, onDrop, isDroppable, onResizeStop, isResizable, isDraggable, droppingItem }) => {
  const gridLayouts = useStore(gridLayoutSelector)
  const { setCurWidetId, curWidgetId, widgets } = useStore(useSelector(['curWidgetId', 'widgets', 'setCurWidetId']))
  const handleItemClick = (e: MouseEvent, widgetId: string) => {
    e.stopPropagation()
    setCurWidetId(widgetId)
  }
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
      {gridLayouts.map((item) => {
        const cur = widgets[item.i]
        const { component, showTitle } = widgetMap[cur.type]
        return (
          <div
            key={item.i}
            className={classnames('hd-grid-item-container', { 'hd-grid-item-container--selected': curWidgetId === item.i })}
            onClick={(e) => {
              isEdit && handleItemClick(e, item.i)
            }}
          >
            <GridItemContainer title={cur.title} widgetId={item.i} isEdit={isEdit} type={cur.type} data={cur.data} showTitle={showTitle}>
              {createElement(component, { widgetId: item.i, data: cur.data })}
            </GridItemContainer>
          </div>
        )
      })}
    </ReactGridLayout>
  )
}
export default GridLayouts
