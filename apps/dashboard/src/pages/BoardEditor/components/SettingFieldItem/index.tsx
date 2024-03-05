import { FC, MouseEvent, useMemo } from 'react'
import { Dropdown, MenuProps } from 'antd'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useDndMonitor } from '@dnd-kit/core'
import SortableItem from '@/components/SortableItem'
import SvgIcon from '@/components/SvgIcon'
import './index.less'
const prefix = 'db-setting-field-item'
export type Field = {
  name: string
  label: string
}
type Props = {
  title: string
  fieldList: Field[]
  onFieldChange: (fieldList: Field[]) => void
}

const SettingFieldItem: FC<Props> = ({ title, fieldList = [], onFieldChange }) => {
  const sortItems = useMemo(() => fieldList.map((item) => item.name), [fieldList])
  const items: MenuProps['items'] = [
    {
      key: '1',
      type: 'group',
      label: 'Group title',
      children: [
        {
          key: '1-1',
          label: '1st menu item'
        },
        {
          key: '1-2',
          label: '2nd menu item'
        }
      ]
    },
    {
      key: '2',
      label: 'sub menu',
      children: [
        {
          key: '2-1',
          label: '3rd menu item'
        },
        {
          key: '2-2',
          label: '4th menu item'
        }
      ]
    },
    {
      key: '3',
      label: 'disabled sub menu',
      disabled: true,
      children: [
        {
          key: '3-1',
          label: '5d menu item'
        },
        {
          key: '3-2',
          label: '6th menu item'
        }
      ]
    }
  ]
  const handleDelete = (event: MouseEvent) => {
    event.stopPropagation()
  }

  useDndMonitor({
    onDragEnd(event) {
      const { active, over } = event
      if (!over?.id || active.id === over.id) {
        return
      }
      const oldIndex = sortItems.indexOf(active.id as string)

      if (active.data.current?.from === 'right') {
        onFieldChange(fieldList.splice(oldIndex, 0, active.data.current?.field))
      }
      const newIndex = sortItems.indexOf(over.id as string)
      if (active.id !== over.id) {
        onFieldChange(arrayMove(fieldList, oldIndex, newIndex))
      }
    }
  })
  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}>{title}</div>
      <SortableContext items={sortItems} strategy={verticalListSortingStrategy}>
        <div className={`${prefix}__body`}>
          {fieldList.length === 0 && <div className={`${prefix}__tip`}>拖动数据字段至此处</div>}
          {fieldList.map((item) => {
            return (
              <SortableItem id={item.name} key={item.name}>
                <div className={`${prefix}__field-box`}>
                  <Dropdown
                    menu={{
                      items,
                      selectable: true,
                      defaultSelectedKeys: ['3-1']
                    }}
                    trigger={['click']}
                  >
                    <div className={`${prefix}__field-wrapper`}>
                      <SvgIcon name="箭头_下" className={`${prefix}__icon`} size={10} color="rgba(0,0,0,.65)" />
                      <div className={`${prefix}__label`}>{item.label}</div>
                      <SvgIcon name="delete" className={`${prefix}__delete`} size={12} onClick={handleDelete} />
                    </div>
                  </Dropdown>
                </div>
              </SortableItem>
            )
          })}
        </div>
      </SortableContext>
    </div>
  )
}
export default SettingFieldItem
