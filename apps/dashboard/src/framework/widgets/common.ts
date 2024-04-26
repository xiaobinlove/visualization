export const xAxis = {
  xAxis: {
    type: 'object',
    title: 'X坐标轴',
    widget: 'collapse',
    properties: {
      title: {
        type: 'string',
        widget: 'select',
        title: '标签文字',
        default: 0,
        props: {
          options: [
            {
              label: '横向显示',
              value: 0
            },
            {
              label: '竖向显示',
              value: 90
            },
            {
              label: '左斜显示',
              value: -25
            },
            {
              label: '右斜显示',
              value: 25
            }
          ]
        }
      }
    }
  }
}
export const yAxis = {
  yAxis: {
    type: 'object',
    title: 'Y坐标轴',
    widget: 'collapse',
    properties: {
      title: {
        title: '标题',
        type: 'string',
        props: {
          placeholder: '请输入标题'
        }
      },
      max: {
        type: 'number',
        title: '最大值',
        props: {
          min: 0,
          placeholder: '自动计算'
        }
      },
      min: {
        type: 'number',
        title: '最小值',
        props: {
          min: 0,
          placeholder: '自动计算'
        }
      }
    }
  }
}
export const legend = {
  legend: {
    type: 'object',
    title: '图例',
    widget: 'collapse',
    displayType: 'inline',
    properties: {
      hide: {
        title: '隐藏图例',
        type: 'boolean',
        widget: 'checkbox',
        default: false
      },
      positon: {
        type: 'string',
        widget: 'select',
        default: 'bottom',
        hidden: '{{formData.legend.hide === true}}',
        props: {
          options: [
            {
              label: '底部',
              value: 'bottom'
            },
            {
              label: '顶部',
              value: 'top'
            }
          ]
        }
      }
    }
  }
}
export const getChartType = (title: string, options: { name: string; type: string }[]) => {
  return {
    group_chartType: {
      type: 'object',
      title,
      widget: 'collapse',
      properties: {
        chartType: {
          type: 'string',
          widget: 'ChartTypeSelect',
          fieldCol: 24,
          labelCol: 0,
          props: {
            options
          }
        }
      }
    }
  }
}
// {
//     label: '图表整体',
//     key: '3',
//     children: (
//       <>
//         <Form.Item name={['card', 'background']} label="背景">
//           <BackgroundSetter palette={styles.theme.palette} />
//         </Form.Item>
//         <Form.Item label="标题颜色" name={['card', 'title', 'color']}>
//           <ColorSelect palette={styles.theme.palette} />
//         </Form.Item>
//       </>
//     )
//   },
export const getChartCardStyle = (title: string = '整体样式') => {
  return {
    card: {
      type: 'object',
      title,
      widget: 'collapse',
      properties: {
        background: {
          title: '背景',
          type: 'object',
          widget: 'BackgroundSetter'
          //   props: {
          //     placeholder: '请输入标题'
          //   }
        },
        color: {
          title: '标题颜色',
          type: 'string',
          widget: 'ColorSelect',
          bind: ''
        }
        // title: {
        //   type: 'object',
        //   properties: {
        //     type: 'string',
        //     title: '标题颜色',
        //     widget: 'ColorSelect'
        //   }
        // }
      }
    }
  }
}
