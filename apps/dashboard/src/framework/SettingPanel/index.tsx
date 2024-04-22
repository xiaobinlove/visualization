import { FC } from 'react'
import GlobalSettingPanel from './GlobalSettingPanel'
import WidgetSettingPanel from './WidgetSettingPanel'
import { useStore, useSelector } from '@/store'
const prefix = 'db-setting-panel'
import './index.less'
const SettingPanel: FC = () => {
  const { curWidgetId } = useStore(useSelector(['curWidgetId', 'updateCurWidget']))
  // 全局配置
  return <div className={prefix}>{curWidgetId ? <WidgetSettingPanel /> : <GlobalSettingPanel />}</div>
}
export default SettingPanel
