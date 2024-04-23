import { DashComponentType, MenuDataItem } from '@/types'
export const menuData: MenuDataItem[] = [
  {
    表格: [DashComponentType.DATA_TABLE, DashComponentType.CROSS_TABLE]
  },
  {
    指标图: [DashComponentType.INDICATOR_CARD, DashComponentType.PROGRESS_CHART, DashComponentType.INDICATOR_CARD]
  },
  {
    统计图表: [
      DashComponentType.LINE_CHART,
      DashComponentType.AREA_CHART,
      DashComponentType.COLUMN_CHART,
      DashComponentType.BAR_CHART,
      DashComponentType.PIE_CHART,
      DashComponentType.RADAR_CHART,
      DashComponentType.BUBBLE_CHART,
      DashComponentType.SCATTER_PLOT,
      DashComponentType.BIAXIAL_CHART,
      DashComponentType.FUNNEL_PLOT
    ]
  },
  {
    组件: [
      // 日历
      DashComponentType.CALENDAR,
      // iframe
      DashComponentType.IFRAME,
      // 实时时间
      DashComponentType.REAL_TIME
    ]
  },
  //   {
  //     title: '地图',
  //     chilren: [
  //       {
  //         name: '点地图',
  //         icon: 'component-type-pie',
  //         type: DashComponentType.PIE_CHART
  //       },
  //       {
  //         name: '地图',
  //         icon: 'component-type-pie',
  //         type: DashComponentType.RADAR_CHART
  //       }
  //     ]
  //   },
  {
    其他: [DashComponentType.GANTT_CHART]
  }
]
