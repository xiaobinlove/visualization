import { FC, useState } from 'react'
import SettingFieldItem from '../SettingFieldItem'
import { DragOverlay, useDndMonitor } from '@dnd-kit/core'
import { curWidgetSelector, useSelector, useStore } from '@/store'
import { Button } from 'antd'
import { SortContainerId, Field } from '@/types'
import { arrayMove } from '@dnd-kit/sortable'
import { dataMap } from '@/mock/data.ts'
import './index.less'
const prefix = 'db-setting-field'
const SettingField: FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const curWidget = useStore(curWidgetSelector)
  const { updateCurWidget } = useStore(useSelector(['updateCurWidget']))

  useDndMonitor({
    onDragStart(event) {
      setActiveId(event.active.id as string)
      console.log(event, 'event')
    },
    onDragEnd(event) {
      setActiveId(null)
      console.log(event, 'onDragEnd')
      const { active, over } = event
      const overId = over?.id as string
      const activeId = active.id as string
      if (!overId || activeId === overId) {
        return
      }
      const key = over?.data.current?.key as SortContainerId
      const insertIndex = over?.data.current?.index
      let value: Field[] = []
      // 新增
      if (active.data.current?.from === 'right') {
        const list = [...curWidget[key]!]
        list.splice(insertIndex, 0, { ...active.data.current.field, id: `f_${new Date().getTime()}` })
        value = list
      } else {
        // 排序
        const sortItems: string[] = over?.data.current?.sortable.items || []
        const newIndex = sortItems.indexOf(overId)
        const oldIndex = sortItems.indexOf(activeId)
        value = arrayMove(curWidget[key]!, oldIndex, newIndex)
      }
      updateCurWidget({
        [key]: value
      })
    },
    onDragOver(event) {
      console.log(event, 'event')
    }
  })
  const onDelete = (key: SortContainerId, index: number) => {
    updateCurWidget({
      [key]: curWidget[key]?.filter((_, i) => i !== index)
    })
  }
  const onUpate = () => {
    updateCurWidget({
      data: dataMap[curWidget.type]
    })
  }
  return (
    <div className={prefix}>
      <DragOverlay>{activeId ? <div className={`${prefix}__overlay`}></div> : null}</DragOverlay>
      <SettingFieldItem title="维度" onDelete={onDelete} id={SortContainerId.xFields} key={SortContainerId.xFields} fieldList={curWidget.xFields!} />
      <SettingFieldItem title="度量" onDelete={onDelete} id={SortContainerId.metrics} key={SortContainerId.metrics} fieldList={curWidget.metrics!} />
      {/* <SettingFieldItem title="过滤器" key="3" fieldList={filterFieldList} /> */}
      <div className={`${prefix}__bottom`}>
        <Button type="primary" className={`${prefix}__update-btn`} onClick={onUpate}>
          更新
        </Button>
      </div>
    </div>
  )
}
export default SettingField
