import { FC, MouseEvent, useMemo } from 'react'
import { Dropdown, MenuProps } from 'antd'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Droppable from '@/components/Droppable'
import SortableItem from '@/components/SortableItem'
import SvgIcon from '@/components/SvgIcon'
import { Field, SortContainerId } from '@/types'
import './index.less'
const prefix = 'db-setting-field-item'

type Props = {
  title: string
  id: SortContainerId
  fieldList: Field[]
  onDelete: (key: SortContainerId, index: number) => void
}

const SettingFieldItem: FC<Props> = ({ title, fieldList = [], id, onDelete }) => {
  const sortItems = useMemo(() => fieldList.map((item) => item.id), [fieldList])
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '汇总方式',
      children: [
        {
          key: '1-1',
          label: '求和'
        },
        {
          key: '1-2',
          label: '平均值'
        },
        {
          key: '1-3',
          label: '最大值'
        },
        {
          key: '1-4',
          label: '最小值'
        },
        {
          key: '1-5',
          label: '计数'
        },
        {
          key: '1-6',
          label: '去重计数'
        }
      ]
    },
    {
      key: '2',
      label: '高级计算',
      children: [
        {
          key: '2-1',
          label: '环比'
        },
        {
          key: '2-2',
          label: '占比'
        },
        {
          key: '2-3',
          label: '无'
        }
      ]
    },
    {
      key: '3',
      label: '数据格式'
    },
    {
      key: '4',
      label: '排序',
      children: [
        {
          key: '2-1',
          label: '默认'
        },
        {
          key: '2-2',
          label: '升序'
        },
        {
          key: '2-3',
          label: '降序'
        }
      ]
    }
  ]
  const handleDelete = (event: MouseEvent, index: number) => {
    event.stopPropagation()
    onDelete(id, index)
  }

  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}>{title}</div>

      <div className={`${prefix}__body`}>
        {fieldList.length === 0 && (
          <Droppable id={'empty_' + id} data={{ key: id, index: 0 }}>
            <div className={`${prefix}__tip`}>拖动数据字段至此处</div>
          </Droppable>
        )}
        <SortableContext id={id} items={sortItems} strategy={verticalListSortingStrategy}>
          {fieldList.map((item, index) => {
            return (
              <SortableItem id={item.id} key={item.id} data={{ key: id, index: index }}>
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
                      <div className={`${prefix}__label`}>{item.fieldLabel}</div>
                      <SvgIcon
                        name="delete"
                        className={`${prefix}__delete`}
                        size={12}
                        onClick={(e) => {
                          handleDelete(e, index)
                        }}
                      />
                    </div>
                  </Dropdown>
                </div>
              </SortableItem>
            )
          })}
        </SortableContext>
      </div>
    </div>
  )
}
export default SettingFieldItem
