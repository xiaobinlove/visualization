import { FC, createElement } from 'react'
import { useStore, useSelector } from '@/store'
import RGL, { WidthProvider, ReactGridLayoutProps } from 'react-grid-layout'
import GridItemContainer from '../GridItemContainer'
import { ComponentTreeItem } from '@/types'
import { widgetMap } from '@/framework/widgetMap'
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
      >
        {layout.map((item) => {
          const { component, showTitle } = widgetMap[item.type]
          return (
            <GridItemContainer
              onClick={(e) => {
                isEdit && handleItemClick(e, item.id)
              }}
              key={item.id}
              parent={item.parent}
              contentRender={createElement(component, { widgetId: item.id, data: item.data, isEdit }, item.children.length > 0 && render(item.children))}
              title={item.title}
              widgetId={item.id}
              isEdit={isEdit}
              type={item.type}
              data={item.data}
              showTitle={showTitle}
              isSelected={curWidgetId === item.id}
            />
          )
        })}
      </ReactGridLayout>
    )
  }
  return render(componentTree)
}
export default GridLayouts
