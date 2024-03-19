import { FC, useEffect, useRef } from 'react'
import { gantt } from 'dhtmlx-gantt'
import dayjs from 'dayjs'
import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_material.css'
import './index.less'
type Props = {
  data: any
}

export const GanttChart: FC<Props> = ({ data }) => {
  console.log(data, 'data111')
  const ganttRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    gantt.config.readonly = true // 只读
    // 配置右侧头部
    // gantt.config.subscales = [
    //   {
    //     unit: 'day',
    //     step: 4,
    //     date: '%Y/%m/%d'
    //   }
    // ]
    gantt.config.add_column = false //添加符号
    gantt.config.autoscroll = true
    // 自动大小自适应
    // gantt.config.autosize = true
    gantt.config.autofit = true //左侧是否自适应
    // 设置表头的高度
    gantt.config.xml_date = '%Y-%m-%d' // 日期格式化的匹配格式
    gantt.config.scale_height = 90 // 日期栏的高度
    // 设置任务分段参数以及单位
    gantt.config.duration_unit = 'day'
    gantt.config.duration_step = 1
    // gantt.config.duration_unit = 'hour'
    // gantt.config.duration_step = 6
    // gantt.config.date_scale = '%H: %i'
    // 是否显示依赖连线
    gantt.config.show_links = true

    // 隐藏所有标记
    gantt.config.show_markers = true

    // 表头设置
    gantt.config.scales = [
      { unit: 'year', step: 1, format: '%Y' },
      { unit: 'month', step: 1, format: '%M' },
      { unit: 'day', step: 1, format: '%d' }
    ]
    gantt.templates.tooltip_text = function (start, end, task) {
      return (
        '<a-card> <b>任务名称:</b>' +
        task.text +
        '<br/><b>开始时间:</b> ' +
        dayjs(task.start_date).format('YYYY-MM-DD') +
        '<br/><b>结束时间:</b> ' +
        dayjs(task.end_date).format('YYYY-MM-DD') +
        '</a-card>'
      )
    }
    gantt.config.columns = [
      {
        name: 'text',
        label: '项目名称',
        tree: true,
        width: '*',
        // width: 150,
        align: 'left',
        template: function (obj: any) {
          return obj.text
        }
      },
      {
        name: 'start_date',
        label: '开始时间',
        width: '*',
        align: 'center',
        template: function (obj: any) {
          return obj.start_date
        }
      },
      {
        name: 'start_date',
        label: '结束时间',
        width: '*',
        align: 'center',
        template: function (obj: any) {
          return obj.end_date
        }
      },
      {
        name: 'progress',
        label: '进度',
        width: '*',
        align: 'center',
        template: function (obj: any) {
          return `${obj.progress * 100}%`
        }
      }
    ]
    gantt.i18n.setLocale('cn') // 设置中文
    gantt.plugins({
      marker: true, // 垂直标记
      tooltip: true, // 工具提示
      drag_timeline: true // 拖动时间线
    })
    gantt.addMarker({
      start_date: new Date(),
      text: '今日'
    })
    // gantt.ext.zoom.init(zoomConfig) //配置初始化扩展
    // gantt.ext.zoom.setLevel('month') //切换到指定的缩放级别
    if (data && ganttRef.current) {
      gantt.init(ganttRef.current as HTMLElement)
      gantt.parse({
        data: [
          { id: 1, text: '项目1', start_date: null, duration: null, parent: 0, progress: 0, open: true },
          { id: 2, text: '任务 #1', start_date: '2019-08-01 00:00', duration: 5, parent: 1, progress: 1 },
          { id: 3, text: '任务 #2', start_date: '2019-08-06 00:00', duration: 2, parent: 1, progress: 0.5 },
          { id: 4, text: '任务 #3', start_date: '2019-08-08 00:00', duration: 2, parent: 1, progress: 0.2 },
          { id: 5, text: '任务 #4', start_date: '2019-08-12 00:00', duration: 2, parent: 1, progress: 0.7 }
          //   { id: 5, text: '任务 #3', start_date: null, duration: null, parent: 1, progress: 0.8, open: true }
          //   { id: 5, text: '任务 #3.1', start_date: '2019-08-09 00:00', duration: 2, parent: 4, progress: 0.2 },
          //   { id: 6, text: '任务 #3.2', start_date: '2019-08-11 00:00', duration: 1, parent: 4, progress: 0 }
        ],
        links: [
          { id: 1, source: 2, target: 3, type: '0' },
          { id: 2, source: 3, target: 4, type: '0' },
          { id: 3, source: 5, target: 6, type: '0' }
        ]
      })
    }
  }, [data])
  return <div className="db-gantt-chart" ref={ganttRef}></div>
  //   return <div className="db-gantt-chart">{data && <Gantt locale="zh" tasks={data} />}</div>
}
