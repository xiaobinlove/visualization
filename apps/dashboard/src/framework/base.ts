import { WidgetConfig, WidgetsConfig, ChartMenu } from '@/types'
import { menuData } from './constant'
import { registWidgets } from './widgets'
export const widgetsConfigMap: WidgetsConfig = {}
// 菜单配置数据
export const menuConfig: ChartMenu[] = []
export const registWidget = (configs: WidgetConfig[]) => {
  configs.forEach((config) => {
    widgetsConfigMap[config.type] = config
  })
}
const registMenu = (): ChartMenu[] => {
  return menuData.map((item) => {
    const [title, types] = Object.entries(item)[0]
    const children = types.map((curType) => {
      const { name, icon, type } = widgetsConfigMap[curType]
      return {
        name,
        icon,
        type
      }
    })
    const menuItem = {
      title,
      children
    }
    menuConfig.push(menuItem)
    return menuItem
  })
}
// 加在配置数据
export const loadDashBoardConfig = () => {
  registWidgets()
  registMenu()
}
