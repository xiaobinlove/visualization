import { FC } from 'react'
import { useMount } from 'ahooks'
import GridLayouts from '@/components/GridLayouts'
import { CanvasContainer } from '@/framework/components/CanvasContainer'
import { useStore, useSelector, gridLayoutSelector } from '@/store'
import { doResize } from '@/utils'
import './index.less'
const Dash: FC = () => {
  const { setWidgets, updateStyles } = useStore(useSelector(['setWidgets', 'updateStyles']))
  const componentTree = useStore(gridLayoutSelector)
  const params = new URLSearchParams(location.search)
  const id = params.get('id') || '0'

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
  return (
    <div className="db-dash">
      <CanvasContainer>
        <GridLayouts isEdit={false} componentTree={componentTree} isDroppable={false} isDraggable={false} isResizable={false}></GridLayouts>
      </CanvasContainer>
    </div>
  )
}
export default Dash
