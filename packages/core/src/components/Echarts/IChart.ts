import { CSSProperties } from 'react'
import * as echarts from 'echarts/core'

import {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption
} from 'echarts/charts'
import { TitleComponentOption, TooltipComponentOption, GridComponentOption, DatasetComponentOption } from 'echarts/components'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type IECOption = echarts.ComposeOption<
  BarSeriesOption | LineSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption | DatasetComponentOption
>

export interface IOnEvents {
  [index: string]: (param: unknown, instance: echarts.ECharts) => void
}
type RendererType = 'canvas' | 'svg'
interface IEChartsInitOpts {
  readonly locale?: string
  readonly renderer?: RendererType
  readonly devicePixelRatio?: number
  readonly useDirtyRect?: boolean
  readonly useCoarsePointer?: boolean
  readonly pointerSize?: number
  readonly ssr?: boolean
  readonly width?: number | string
  readonly height?: number | string
}

export interface IChartProps {
  readonly option: IECOption
  onResize: () => void
  readonly loading?: boolean
  readonly onEvents?: IOnEvents
  readonly onChartReady?: (echartsInstance: echarts.ECharts) => void
  readonly style?: CSSProperties
  readonly className?: string

  readonly theme?: string | object
  readonly opts?: IEChartsInitOpts
}
