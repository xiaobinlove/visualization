// 色板
import { Styles, ThemeType, PaletteType } from '@/types'
export const paletteMap: Record<PaletteType, string[]> = {
  // 经典配色
  classic: [
    'rgb(99, 178, 238)',
    'rgb(118, 218, 145)',
    'rgb(248, 203, 127)',
    'rgb(248, 149, 136)',
    'rgb(124, 214, 207)',
    'rgb(145, 146, 171)',
    'rgb(120, 152, 225)',
    'rgb(239, 166, 102)',
    'rgb(237, 221, 134)',
    'rgb(153, 135, 206)'
  ],
  // 秋风戈壁
  gobi: [
    'rgb(178, 191, 89)',
    'rgb(242, 157, 56)',
    'rgb(236, 212, 141)',
    'rgb(110, 167, 64)',
    'rgb(235, 197, 130)',
    'rgb(165, 112, 81)',
    'rgb(117, 205, 98)',
    'rgb(242, 211, 127)',
    'rgb(212, 160, 130)',
    'rgb(100, 222, 200)'
  ],
  // 优化格调
  grace: [
    'rgb(90, 140, 140)',
    'rgb(188, 191, 164)',
    'rgb(242, 216, 141)',
    'rgb(191, 162, 136)',
    'rgb(169, 138, 97)',
    'rgb(126, 95, 66)',
    'rgb(214, 194, 137)',
    'rgb(89, 70, 83)',
    'rgb(54, 109, 115)',
    'rgb(0, 73, 102)'
  ],
  // 丛林深处
  jungle: [
    'rgb(75, 177, 144)',
    'rgb(90, 133, 171)',
    'rgb(191, 191, 191)',
    'rgb(126, 215, 186)',
    'rgb(39, 132, 102)',
    'rgb(122, 189, 248)',
    'rgb(77, 110, 138)',
    'rgb(209, 209, 209)',
    'rgb(74, 155, 155)',
    'rgb(118, 212, 232)'
  ],
  blues: [
    'rgb(56, 149, 224)',
    'rgb(0, 82, 151)',
    'rgb(21, 182, 172)',
    'rgb(98, 219, 233)',
    'rgb(64, 129, 190)',
    'rgb(188, 225, 255)',
    'rgb(59, 139, 161)',
    'rgb(83, 222, 207)',
    'rgb(173, 217, 255)',
    'rgb(84, 119, 205)'
  ],
  party: [
    'rgb(228, 69, 69)',
    'rgb(167, 74, 54)',
    'rgb(246, 187, 134)',
    'rgb(35, 166, 100)',
    'rgb(153, 198, 109)',
    'rgb(62, 234, 239)',
    'rgb(80, 157, 153)',
    'rgb(186, 216, 240)',
    'rgb(223, 184, 245)',
    'rgb(223, 184, 245)'
  ],
  technology: [
    'rgb(48, 130, 242)',
    'rgb(64, 217, 157)',
    'rgb(36, 148, 128)',
    'rgb(128, 210, 255)',
    'rgb(92, 165, 197)',
    'rgb(118, 185, 55)',
    'rgb(116, 22, 142)',
    'rgb(188, 175, 249)',
    'rgb(90, 75, 114)',
    'rgb(181, 94, 219)'
  ],
  retail: [
    'rgb(4, 181, 215)',
    'rgb(118, 229, 87)',
    'rgb(59, 141, 110)',
    'rgb(40, 190, 94)',
    'rgb(190, 218, 97)',
    'rgb(75, 164, 11)',
    'rgb(154, 185, 249)',
    'rgb(97, 70, 202)',
    'rgb(128, 112, 153)',
    'rgb(202, 129, 230)'
  ],
  bluesky: [
    'rgb(0, 194, 255)',
    'rgb(35, 142, 214)',
    'rgb(128, 210, 255)',
    'rgb(40, 113, 204)',
    'rgb(106, 146, 224)',
    'rgb(0, 212, 212)',
    'rgb(0, 106, 140)',
    'rgb(0, 255, 255)',
    'rgb(40, 103, 201)',
    'rgb(122, 120, 225)'
  ]
}
export const paletteList: { label: string; value: PaletteType }[] = [
  {
    label: '经典配色',
    value: PaletteType.CLASSIC
  },
  {
    label: '秋风戈壁',
    value: PaletteType.GOBI
  },
  {
    label: '优化格调',
    value: PaletteType.GRACE
  },
  {
    label: '丛林深处',
    value: PaletteType.JUNGLE
  },
  {
    label: '忧郁蓝调',
    value: PaletteType.BLUES
  },
  {
    label: '党政教务',
    value: PaletteType.PARTY
  },
  {
    label: '科技制造',
    value: PaletteType.TECHNOLOGY
  },
  {
    label: '零售医药',
    value: PaletteType.RETAIL
  },
  {
    label: '蔚蓝深空',
    value: PaletteType.BLUESKY
  }
]
export const themeMap: Record<ThemeType, Styles> = {
  // 浅色主题
  [ThemeType.CUSTOM_LIGHT]: {
    theme: {
      type: ThemeType.CUSTOM_LIGHT,
      // 是否是暗黑系主题
      dark: false,
      // 色板
      palette: PaletteType.CLASSIC
    },
    background: {
      color: 'rgb(244, 246, 249)',
      type: 'color',
      image: ''
    },
    // 全局卡片样式配置
    card: {
      title: {
        bold: true,
        fontSize: '14px',
        textAlign: 'left',
        fontColor: 'rgb(31, 45, 61)'
      },
      background: {
        color: 'rgb(255, 255, 255)',
        type: 'color',
        image: ''
      }
    },
    // 全局表格类图表配置
    table: {
      textAlign: '',
      themeColor: 'rgb(233, 233, 233)',
      head: {
        fontColor: 'rgb(94, 109, 130)'
      },
      body: {
        fontColor: 'rgb(31, 45, 61)'
      }
    }
  },
  // 科技大屏主题
  [ThemeType.TECHNOLOGY]: {
    theme: {
      type: ThemeType.TECHNOLOGY,
      dark: true,
      // 色板
      palette: PaletteType.BLUES
    },
    background: {
      color: 'rgb(4, 18, 47)',
      type: 'image',
      image: 'https://g.jdycdn.com/app/pc/d330843b8136.png'
    },
    // 全局卡片样式配置
    card: {
      title: {
        bold: true,
        fontSize: '14px',
        textAlign: 'left',
        fontColor: '#fff'
      },
      background: {
        color: 'rgba(0, 0, 0, 0);',
        type: 'image',
        image: 'https://g.jdycdn.com/app/pc/fb3bbea93adc.png'
      }
    },
    // 全局表格类图表配置
    table: {
      textAlign: '',
      themeColor: 'rgb(233, 233, 233)',
      head: {
        fontColor: 'rgba(255, 255, 255, 0.68)'
      },
      body: {
        fontColor: 'rgba(255, 255, 255, 0.92)'
      }
    }
  }
}
export const themeOptions: { value: ThemeType; label: string }[] = [
  {
    label: '系统主题-浅色',
    value: ThemeType.CUSTOM_LIGHT
  },
  {
    label: '系统主题-暗色',
    value: ThemeType.TECHNOLOGY
  }
]
