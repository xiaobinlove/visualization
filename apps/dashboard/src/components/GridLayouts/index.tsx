import { FC, createElement, CSSProperties } from 'react'
import { useStore, useSelector } from '@/store'
import RGL, { WidthProvider, ReactGridLayoutProps } from 'react-grid-layout'
import GridItemContainer from '../GridItemContainer'
import { ComponentTreeItem, TextStyle } from '@/types'
import { widgetMap } from '@/framework/widgetMap'
import { paletteMap } from '@/framework/theme'
import 'react-grid-layout/css/styles.css'
import './index.less'
const ReactGridLayout = WidthProvider(RGL)
export interface GridLayoutProps extends ReactGridLayoutProps {
  isEdit: boolean
  componentTree: ComponentTreeItem[]
}
const ROW_HEIGHT = 10
export const COLS = 12
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
  const { setCurWidetId, curWidgetId, styles, widgets } = useStore(useSelector(['curWidgetId', 'setCurWidetId', 'styles', 'widgets']))
  const palette = paletteMap[useStore((state) => state.styles.theme.palette)]
  const themeType = useStore((state) => state.styles.theme.type)
  const dark = useStore((state) => state.styles.theme.dark)
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
          const { component } = widgetMap[item.type]
          console.log(widgets[item.id], 'xxxdd')
          console.log(widgets[item.id].styles?.title?.hide, 'widgets[item.id].styles?.title?.hide')
          // TODO: 待优化
          const showTitle = widgetMap[item.type].showTitle !== false && !widgets[item.id].styles?.title?.hide
          console.log(showTitle, 'showTitle')
          const titleStyle = getTextSyle(widgets[item.id].styles?.title || styles.card.title)
          return (
            <GridItemContainer
              dark={dark}
              titleStyle={titleStyle}
              onClick={(e) => {
                isEdit && handleItemClick(e, item.id)
              }}
              key={item.id}
              parent={item.parent}
              contentRender={createElement(
                component,
                {
                  widgetId: item.id,
                  data: item.data,
                  isEdit,
                  colors: palette,
                  themeType,
                  title: item.title,
                  titleStyle,
                  dark,
                  styles: widgets[item.id].styles
                },
                item.children.length > 0 && render(item.children)
              )}
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
function getTextSyle(textStyle: TextStyle): CSSProperties {
  const { fontColor, fontSize, bold, textAlign } = textStyle
  const style: CSSProperties = {}
  style.fontWeight = bold ? 700 : 'normal'
  if (fontColor) {
    style.color = fontColor
  }
  if (fontSize) {
    style.fontSize = fontSize
  }
  if (fontColor) {
    style.color = fontColor
  }
  if (textAlign) {
    style.textAlign = textAlign
  }
  return style
}
export default GridLayouts
