import { WidgetConfig } from '@/types'
export const widgetsConfigMap: Record<string, WidgetConfig> = {}
export const registerWidget = (configs: WidgetConfig[]) => {
  configs.forEach((config) => (widgetsConfigMap[config.widgetType] = config))
}
