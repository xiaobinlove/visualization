import React, { useEffect, useRef, useCallback } from 'react'
import * as echarts from 'echarts/core'
import elementResizeDetectorMaker from 'element-resize-detector'
import { BarChart, PieChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  LegendComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { IChartProps } from './IChart'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LegendComponent,
  PieChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])
const bindEvents: (instance: echarts.ECharts, events: IChartProps['onEvents']) => void = (instance, events) => {
  for (const eventName in events) {
    if (Object.prototype.hasOwnProperty.call(events, eventName)) {
      const func = events[eventName]
      instance.on(eventName, (param) => {
        func(param, instance)
      })
    }
  }
}

const Chart: React.FC<IChartProps> = (props) => {
  const option = props.option
  const loading = props.loading
  const onEvents = props.onEvents
  const onChartReady = props.onChartReady
  const style = props.style
  const theme = props.theme
  const opts = props.opts

  const tableSelectRef = useRef<HTMLDivElement>()

  const getEchartsInstance: () => echarts.ECharts = () => {
    return echarts.getInstanceByDom(tableSelectRef.current!)!
  }

  const dispose: () => void = () => {
    if (tableSelectRef.current) {
      echarts.dispose(tableSelectRef.current)
    }
  }
  const newChart: () => Promise<void> = useCallback(async () => {
    return new Promise((resolve, reject) => {
      try {
        const myChart = echarts.init(tableSelectRef.current!, theme, opts)
        myChart.on('finished', () => {
          resolve()
        })
      } catch (error) {
        reject(error)
      }
    })
  }, [opts, theme])

  useEffect(() => {
    dispose()

    newChart()
      .then(() => {
        // 'finished'
        const myChart = getEchartsInstance()
        bindEvents(myChart, onEvents)
        onChartReady?.(myChart)
        myChart.clear()
        myChart.setOption(option, true)
        const erd = elementResizeDetectorMaker()
        if (tableSelectRef.current) {
          erd.listenTo(tableSelectRef.current, () => {
            // 父元素大小resize
            myChart.resize()
          })
        }
      })
      .catch((err) => {
        console.log(err)
        dispose()
      })

    return () => {
      dispose()
    }
    //option改变不进行重渲染
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, opts, newChart, onEvents, onChartReady])

  useEffect(() => {
    // option 改变
    getEchartsInstance().clear()
    getEchartsInstance().setOption(option, true)
  }, [option])

  useEffect(() => {
    // loading 改变
    if (loading) {
      getEchartsInstance().showLoading()
    } else {
      getEchartsInstance().hideLoading()
    }
  }, [loading])

  return (
    <div
      className={`echarts ${props.className ?? ''}`}
      style={{ height: '100%', ...style }}
      ref={(node) => {
        tableSelectRef.current = node!
      }}
    ></div>
  )
}
export default Chart
