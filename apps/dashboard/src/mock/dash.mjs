export default {
  entry: {
    appId: '65e2919f562ee4862b839628',
    entryId: '6540c00cc52ec6366914487e',
    name: '设备动态推送',
    type: 'dash',
    components: {
      _widget_1698744731706: {
        posX: 0,
        posY: 0,
        width: 60,
        height: 5,
        type: 'description',
        content: '<div style="text-align:center;"><b style><span style="font-size:28px; color:rgb(237, 237, 239);">设备管理与巡检</span></b></div>',
        title: '',
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/7ac46676-8c01-4110-b737-0db4d3f1c012', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        parent: '_widget_1699972965002',
        mobileStyle: { visible: true, seq: 0, width: 6 }
      },
      _widget_1698745062094: {
        title: '设备状态分布',
        hasExport: true,
        chart_label: { dimension: { enable: false }, value: { enable: true }, value_percent: { enable: true }, enable: true },
        type: 'pie_chart',
        posX: 24,
        posY: 6,
        width: 36,
        height: 22,
        parent: '_widget_1699159776864',
        isShowRawData: true,
        form: '65362eec3761f7f4e9947577',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'L',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        guideline: [],
        pie_type: 'thick',
        defaultSort: [],
        drilldown: 'pc',
        legend: { enable: true, position: 'right' },
        styles: { background: { type: 'image', image: 'https://images.jdycdn.com/8d85aeeb-5180-4739-915f-3211dc4f345e', position: 'stretch' } },
        mobileStyle: { visible: true, seq: 4, width: 6, height: 4 },
        // 纬度
        xFields: [
          {
            name: '_widget_1698112391934',
            form: '65362eec3761f7f4e9947577',
            type: 'combo',
            title: '设备状态',
            tag: 'f_1698745072380',
            colors: [{ value: '正常运行', color: '#63B2EE' }, { value: '报废', color: '#9192AB' }, { value: '维修中' }, { value: '备用', color: '#9987CE' }]
          }
        ],
        yFields: [],
        // 指标
        metrics: [
          {
            tag: 'f_1700448004575',
            name: '_widget_1700015628157',
            form: '65362eec3761f7f4e9947577',
            type: 'sn',
            title: '设备编码',
            // 汇总方式 countDistinct 去重  count 计数
            op: 'count',
            // 数据格式
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1698745350495: {
        title: '累计巡检次数',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 12,
        posY: 6,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '6538baa995fcd5ffa0cdff5e',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        titleStyle: { textAlign: 'center' },
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 3, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1698745364745',
            name: 'createTime',
            type: 'datetime',
            form: '6538baa995fcd5ffa0cdff5e',
            format: '0.',
            title: '提交时间',
            op: 'count',
            formatType: 'preset',
            unit: '次'
          }
        ],
        formulas: []
      },
      _widget_1698745436357: {
        title: '累计报修次数',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 17,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '6530f3223d93c67a5d654bfa',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        triggers: [],
        targetValues: [],
        titleStyle: { textAlign: 'center' },
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 0, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1698745452521',
            name: 'createTime',
            type: 'datetime',
            form: '6530f3223d93c67a5d654bfa',
            format: '0.',
            title: '提交时间',
            op: 'count',
            formatType: 'preset',
            unit: '次'
          }
        ],
        formulas: []
      },
      _widget_1698745463475: {
        title: '累计保养次数',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 12,
        posY: 17,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '653a305726e518c959a737b4',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        triggers: [],
        targetValues: [],
        titleStyle: { textAlign: 'center' },
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 2, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1698745473607',
            name: 'createTime',
            type: 'datetime',
            form: '653a305726e518c959a737b4',
            format: '0.',
            title: '提交时间',
            op: 'count',
            formatType: 'preset',
            unit: '次'
          }
        ],
        formulas: []
      },
      _widget_1698745483890: {
        title: '累计点检次数',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 6,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '653632f6ff9dba550a215558',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        triggers: [],
        targetValues: [],
        titleStyle: { textAlign: 'center' },
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 1, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1699160064839',
            name: 'createTime',
            type: 'datetime',
            form: '653632f6ff9dba550a215558',
            format: '0.',
            title: '提交时间',
            op: 'count',
            formatType: 'preset',
            unit: '次'
          }
        ],
        formulas: []
      },
      _widget_1698745611699: {
        title: '今日未巡检',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 0,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '65362eec3761f7f4e9947577',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              name: '_widget_1698049926863',
              text: '最近巡检时间',
              labelHidden: false,
              tab: 'tab_1698049799578',
              lineWidth: 6,
              id: '65362eec3761f7f4e9947577',
              form: '65362eec3761f7f4e9947577',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              title: '最近巡检时间',
              entryId: '65362eec3761f7f4e9947577',
              field: '_widget_1698049926863',
              method: 'formula',
              value: [{ mode: 'custom', formula: [null, '-1d'] }]
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        titleStyle: { textAlign: 'center' },
        triggers: [],
        targetValues: [],
        styles: { background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' } },
        mobileStyle: { visible: true, seq: 0, width: 6, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1700473415840',
            name: '_widget_1700015628157',
            form: '65362eec3761f7f4e9947577',
            type: 'sn',
            title: '设备编码',
            op: 'count',
            format: '0.',
            formatType: 'preset',
            unit: '台'
          }
        ],
        formulas: []
      },
      _widget_1698745645828: {
        title: '今日已巡检',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 11,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '65362eec3761f7f4e9947577',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              name: '_widget_1698049926863',
              text: '最近巡检时间',
              labelHidden: false,
              tab: 'tab_1698049799578',
              lineWidth: 6,
              id: '65362eec3761f7f4e9947577',
              form: '65362eec3761f7f4e9947577',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              title: '最近巡检时间',
              entryId: '65362eec3761f7f4e9947577',
              field: '_widget_1698049926863',
              method: 'formula',
              value: [{ mode: 'preset', formula: 'today' }]
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        titleStyle: { textAlign: 'center' },
        triggers: [],
        targetValues: [],
        styles: { background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' } },
        mobileStyle: { visible: true, seq: 1, width: 6, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1700473432051',
            name: '_widget_1700015628157',
            form: '65362eec3761f7f4e9947577',
            type: 'sn',
            title: '设备编码',
            op: 'count',
            format: '0.',
            formatType: 'preset',
            unit: '台'
          }
        ],
        formulas: []
      },
      _widget_1698745986649: {
        title: '处理中工单明细',
        hasExport: false,
        chart_label: { enable: true },
        type: 'data_table',
        posX: 12,
        posY: 0,
        width: 48,
        height: 22,
        form: '6530f3223d93c67a5d654bfa',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        drilldown: 'pc',
        fields: [
          {
            name: '_widget_1698224709150',
            form: '6530f3223d93c67a5d654bfa',
            type: 'sn',
            title: '设备维修单编号',
            tag: 'f_1698744727704',
            width: 125
          },
          { name: '_widget_1697706787285', form: '6530f3223d93c67a5d654bfa', type: 'text', title: '设备编码', tag: 'f_1698744727705' },
          { name: '_widget_1697706787287', form: '6530f3223d93c67a5d654bfa', type: 'text', title: '设备名称', tag: 'f_1698744727706' },
          {
            name: '_widget_1697710612223',
            form: '6530f3223d93c67a5d654bfa',
            type: 'textarea',
            title: '故障简述',
            tag: 'f_1698744727707',
            width: 214
          },
          { name: '_widget_1697710612224', form: '6530f3223d93c67a5d654bfa', type: 'radiogroup', title: '审核意见', tag: 'f_1700012751037' },
          { name: '_widget_1698284676632', form: '6530f3223d93c67a5d654bfa', type: 'radiogroup', title: '是否进行维修', tag: 'f_1700012776073' },
          { name: '_widget_1697710612240', form: '6530f3223d93c67a5d654bfa', type: 'radiogroup', title: '是否修复', tag: 'f_1700012789531' },
          { name: '_widget_1697710612222', form: '6530f3223d93c67a5d654bfa', type: 'image', title: '故障情况拍照', tag: 'f_1698744727708' },
          {
            name: '_widget_1697710612217',
            form: '6530f3223d93c67a5d654bfa',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss',
            title: '报修时间',
            tag: 'f_1698744727709'
          },
          { name: '_widget_1698226306862', form: '6530f3223d93c67a5d654bfa', type: 'user', title: '报修人', tag: 'f_1698744727710' },
          { name: '_widget_1697710612236', form: '6530f3223d93c67a5d654bfa', type: 'user', title: '维修负责人', tag: 'f_1698744727711' }
        ],
        filter: {
          cond: [
            {
              type: 'flowstate',
              name: 'flowState',
              text: '流程状态',
              title: '流程状态',
              form: '6530f3223d93c67a5d654bfa',
              entryId: '6530f3223d93c67a5d654bfa',
              field: 'flowState',
              method: 'eq',
              value: [0]
            }
          ],
          rel: 'and'
        },
        defaultSort: [],
        parent: '_widget_1699159776864',
        styles: {
          theme: { color: '#CDE3FA' },
          fontSetting: { headColor: '#141E31' },
          background: { type: 'image', image: 'https://images.jdycdn.com/7ed6147b-310f-4df2-adc7-6e3838587c86' }
        },
        conditionalFormatting: [
          {
            tag: 'f_1700012751037',
            colors: [
              { value: '立即维修', color: '#FFFFFF', background: '#EB5050' },
              { value: '驳回', color: '#FFFFFF', background: '#00AED1' },
              { value: '转委外', color: '#FFFFFF', background: '#C643E0' }
            ]
          },
          {
            tag: 'f_1700012776073',
            colors: [
              { value: '是', color: '#FFFFFF', background: '#46C26F' },
              { value: '否', color: '#FFFFFF', background: '#F0A800' }
            ]
          },
          {
            tag: 'f_1700012789531',
            colors: [
              { value: '是', color: '#FFFFFF', background: '#46C26F' },
              { value: '否', color: '#FFFFFF', background: '#F0A800' }
            ]
          }
        ],
        mobileStyle: { visible: true, seq: 2, width: 6, height: 6 },
        xFields: [],
        yFields: [],
        metrics: [],
        formulas: []
      },
      _widget_1698746044677: {
        title: '处理中工单数',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 11,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '6530f3223d93c67a5d654bfa',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              type: 'flowstate',
              name: 'flowState',
              text: '流程状态',
              title: '流程状态',
              form: '6530f3223d93c67a5d654bfa',
              entryId: '6530f3223d93c67a5d654bfa',
              field: 'flowState',
              method: 'eq',
              value: [0]
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        titleStyle: { textAlign: 'center' },
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 0, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1698746064100',
            name: '_widget_1698224709150',
            form: '6530f3223d93c67a5d654bfa',
            type: 'sn',
            title: '设备维修单编号',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1698746106291: {
        title: '已完成维修数',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 0,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '6530f3223d93c67a5d654bfa',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              type: 'flowstate',
              name: 'flowState',
              text: '流程状态',
              title: '流程状态',
              form: '6530f3223d93c67a5d654bfa',
              entryId: '6530f3223d93c67a5d654bfa',
              field: 'flowState',
              method: 'eq',
              value: [1]
            },
            {
              name: '_widget_1697710612224',
              text: '审核意见',
              labelHidden: false,
              tab: 'tab_1697710633174',
              lineWidth: 6,
              id: '6530f3223d93c67a5d654bfa',
              form: '6530f3223d93c67a5d654bfa',
              type: 'text',
              visible: true,
              colorEnable: true,
              items: [
                { value: '立即维修', text: '立即维修', color: '#EB5050' },
                { value: '驳回', text: '驳回', color: '#00AED1' },
                { value: '转外委', text: '转外委', color: '#C643E0' }
              ],
              title: '审核意见',
              entryId: '6530f3223d93c67a5d654bfa',
              field: '_widget_1697710612224',
              method: 'nin',
              value: ['驳回'],
              hasEmpty: false
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        titleStyle: { textAlign: 'center' },
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 1, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1698746064100',
            name: '_widget_1698224709150',
            form: '6530f3223d93c67a5d654bfa',
            type: 'sn',
            title: '设备维修单编号',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1698746129847: {
        title: '维修完成工单明细',
        hasExport: false,
        chart_label: { enable: true },
        type: 'data_table',
        posX: 0,
        posY: 22,
        width: 60,
        height: 30,
        form: '6530f3223d93c67a5d654bfa',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        drilldown: 'pc',
        fields: [
          {
            name: '_widget_1698224709150',
            form: '6530f3223d93c67a5d654bfa',
            type: 'sn',
            title: '设备维修单编号',
            tag: 'f_1698744727704',
            width: 131
          },
          { name: '_widget_1697706787285', form: '6530f3223d93c67a5d654bfa', type: 'text', title: '设备编码', tag: 'f_1698744727705' },
          { name: '_widget_1697706787287', form: '6530f3223d93c67a5d654bfa', type: 'text', title: '设备名称', tag: 'f_1698744727706' },
          { name: '_widget_1697710612223', form: '6530f3223d93c67a5d654bfa', type: 'textarea', title: '故障简述', tag: 'f_1698744727707' },
          { name: '_widget_1697710612224', form: '6530f3223d93c67a5d654bfa', type: 'radiogroup', title: '审核意见', tag: 'f_1700012848739' },
          { name: '_widget_1698284676632', form: '6530f3223d93c67a5d654bfa', type: 'radiogroup', title: '是否进行维修', tag: 'f_1700012876131' },
          { name: '_widget_1697710612240', form: '6530f3223d93c67a5d654bfa', type: 'radiogroup', title: '是否修复', tag: 'f_1700012862940' },
          { name: '_widget_1697710612222', form: '6530f3223d93c67a5d654bfa', type: 'image', title: '故障情况拍照', tag: 'f_1698744727708' },
          {
            name: '_widget_1697710612217',
            form: '6530f3223d93c67a5d654bfa',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss',
            title: '报修时间',
            tag: 'f_1698744727709'
          },
          { name: '_widget_1698226306862', form: '6530f3223d93c67a5d654bfa', type: 'user', title: '报修人', tag: 'f_1698744727710' },
          { name: '_widget_1697710612236', form: '6530f3223d93c67a5d654bfa', type: 'user', title: '维修负责人', tag: 'f_1698744727711' }
        ],
        filter: {
          cond: [
            {
              type: 'flowstate',
              name: 'flowState',
              text: '流程状态',
              title: '流程状态',
              form: '6530f3223d93c67a5d654bfa',
              entryId: '6530f3223d93c67a5d654bfa',
              field: 'flowState',
              method: 'eq',
              value: [1]
            },
            {
              name: '_widget_1697710612224',
              text: '审核意见',
              labelHidden: false,
              tab: 'tab_1697710633174',
              lineWidth: 6,
              id: '6530f3223d93c67a5d654bfa',
              form: '6530f3223d93c67a5d654bfa',
              type: 'text',
              visible: true,
              colorEnable: true,
              title: '审核意见',
              items: [
                { value: '立即维修', text: '立即维修', color: '#EB5050' },
                { value: '驳回', text: '驳回', color: '#00AED1' },
                { value: '转外委', text: '转外委', color: '#C643E0' }
              ],
              entryId: '6530f3223d93c67a5d654bfa',
              field: '_widget_1697710612224',
              method: 'nin',
              value: ['驳回'],
              hasEmpty: false
            }
          ],
          rel: 'and'
        },
        defaultSort: [],
        parent: '_widget_1699159776864',
        styles: {
          theme: { color: '#CDE3FA' },
          fontSetting: { headColor: '#141E31' },
          background: { type: 'image', image: 'https://images.jdycdn.com/273fef0c-ab58-408c-a9e4-078b94eff620', position: 'stretch' }
        },
        conditionalFormatting: [
          {
            tag: 'f_1700012848739',
            colors: [
              { value: '立即维修', color: '#FFFFFF', background: '#EB5050' },
              { value: '驳回', color: '#FFFFFF', background: '#00AED1' },
              { value: '转委外', color: '#FFFFFF', background: '#C643E0' }
            ]
          },
          {
            tag: 'f_1700012862940',
            colors: [
              { value: '是', color: '#FFFFFF', background: '#46C26F' },
              { value: '否', color: '#FFFFFF', background: '#F0A800' }
            ]
          },
          {
            tag: 'f_1700012876131',
            colors: [
              { value: '是', color: '#FFFFFF', background: '#46C26F' },
              { value: '否', color: '#FFFFFF', background: '#F0A800' }
            ]
          }
        ],
        mobileStyle: { visible: true, seq: 3, width: 6, height: 6 },
        xFields: [],
        yFields: [],
        metrics: [],
        formulas: []
      },
      _widget_1698746220951: {
        title: '本月已完成保养任务',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 30,
        posY: 0,
        width: 15,
        height: 11,
        isShowRawData: true,
        form: '653a305726e518c959a737b4',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              name: '_widget_1562714937873',
              text: '本次保养时间',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 12,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              rely: null,
              title: '本次保养时间',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562714937873',
              method: 'formula',
              value: [{ mode: 'preset', formula: 'thisMonth' }]
            },
            {
              name: '_widget_1562687598899',
              text: '保养结果',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'text',
              visible: true,
              colorEnable: true,
              items: [
                {
                  text: '已完成',
                  value: '已完成',
                  widgetsMap: ['_widget_1562687598930', '_widget_1563343045002', '_widget_1562687599003'],
                  color: '#2FCD6E'
                },
                { text: '未完成', value: '未完成', selected: true, color: '#FA5353' }
              ],
              title: '保养结果',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562687598899',
              method: 'in',
              value: ['已完成'],
              hasEmpty: false
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        titleStyle: { textAlign: 'center' },
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 2, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1698746233208',
            name: '_widget_1562655921428',
            form: '653a305726e518c959a737b4',
            type: 'sn',
            title: '设备保养单号',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1698746267295: {
        title: '本月待保养明细',
        hasExport: false,
        chart_label: { enable: true },
        type: 'data_table',
        posX: 0,
        posY: 17,
        width: 47,
        height: 35,
        form: '653a305726e518c959a737b4',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        drilldown: 'pc',
        fields: [
          {
            name: '_widget_1562655921428',
            form: '653a305726e518c959a737b4',
            type: 'sn',
            title: '设备保养单编号',
            tag: 'f_1698744727712',
            width: 144
          },
          {
            name: '_widget_1562714937873',
            form: '653a305726e518c959a737b4',
            type: 'datetime',
            format: 'yyyy-MM-dd',
            title: '应保养日期',
            tag: 'f_1700725972439'
          },
          { name: '_widget_1562672238340', form: '653a305726e518c959a737b4', type: 'text', title: '设备编码', tag: 'f_1698744727713', width: 137 },
          { name: '_widget_1562815861819', form: '653a305726e518c959a737b4', type: 'text', title: '设备名称', tag: 'f_1698744727714', width: 140 },
          { name: '_widget_1562815861772', form: '653a305726e518c959a737b4', type: 'user', title: '保养负责人', tag: 'f_1698744727721' },
          { name: '_widget_1698388338825', form: '653a305726e518c959a737b4', type: 'text', title: '保养频次', tag: 'f_1700725479297' },
          { name: '_widget_1562687598524', form: '653a305726e518c959a737b4', type: 'text', title: '保养等级', tag: 'f_1698744727715' }
        ],
        conditionalFormatting: [],
        defaultSort: [{ f_1700725972439: -1 }],
        parent: '_widget_1699159776864',
        filter: {
          cond: [
            {
              name: '_widget_1562714937873',
              text: '本次保养时间',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              rely: null,
              title: '本次保养时间',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562714937873',
              method: 'range',
              value: ['2023-08-01', '2023-12-31']
            },
            {
              name: '_widget_1562687598899',
              text: '保养结果',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'text',
              visible: true,
              colorEnable: true,
              title: '保养结果',
              items: [
                {
                  text: '已完成',
                  value: '已完成',
                  widgetsMap: ['_widget_1562687598930', '_widget_1563343045002', '_widget_1562687599003'],
                  color: '#2FCD6E'
                },
                { text: '未完成', value: '未完成', selected: true, color: '#FA5353' }
              ],
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562687598899',
              method: 'in',
              value: ['未完成'],
              hasEmpty: false
            }
          ],
          rel: 'and'
        },
        styles: {
          theme: { color: '#CDE3FA' },
          fontSetting: { headColor: '#141E31' },
          background: { type: 'image', image: 'https://images.jdycdn.com/dbfb71c1-1372-41f6-96ee-15ccafee3988', position: 'stretch' }
        },
        mobileStyle: { visible: true, seq: 4, width: 6, height: 6 },
        xFields: [],
        yFields: [],
        metrics: [],
        formulas: []
      },
      _widget_1699159451591: {
        type: 'speedy_entry',
        posX: 0,
        posY: 5,
        width: 30,
        height: 9,
        parent: '_widget_1699972965002',
        title: '表单快捷入口',
        entryList: [
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '65362eec3761f7f4e9947577', name: '设备档案', hasCoop: true, color: 1, icon: 1, type: 'form' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '653632f6ff9dba550a215558', name: '设备点检单', hasCoop: true, color: 1, icon: 11, type: 'form' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '6538baa995fcd5ffa0cdff5e', name: '设备巡检单', hasCoop: true, icon: 9, type: 'form' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '6530f3223d93c67a5d654bfa', name: '设备维修单', hasCoop: false, color: 2, icon: 16, type: 'form' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '6539e14fd5674a1a6cba8048', name: '保养计划表', hasCoop: true, icon: 10, type: 'form' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '653a305726e518c959a737b4', name: '设备保养单', hasCoop: false, icon: 20, type: 'form' }
          }
        ],
        displayType: 'list',
        titleStyle: { visible: false },
        styles: { background: { type: 'image', position: 'stretch' }, theme: {}, fontSetting: {} },
        mobileStyle: { visible: true, seq: 1, width: 6, height: 4 }
      },
      _widget_1699159689049: {
        type: 'speedy_entry',
        posX: 30,
        posY: 5,
        width: 30,
        height: 9,
        parent: '_widget_1699972965002',
        title: '仪表盘快捷入口',
        entryList: [
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '6540c00cc52ec6366914487e', name: '设备动态推送', hasCoop: false, color: 3, icon: 6, type: 'dash' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '6540b4110e129b91932fbca8', name: '点检统计看板', hasCoop: false, color: 3, icon: 8, type: 'dash' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '6540ac81a3f18bfde6de2bc3', name: '巡检统计看板', hasCoop: false, color: 3, icon: 7, type: 'dash' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '6540b685171d680bf0e0e3f4', name: '维修统计看板', hasCoop: false, color: 3, icon: 20, type: 'dash' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '6540c7a9c52ec636691c2136', name: '保养统计看板', hasCoop: false, color: 3, icon: 9, type: 'dash' }
          },
          {
            type: 'entry',
            customName: { enable: false, value: '' },
            customIcon: { enable: false, icon: 1, color: 1 },
            isNewPage: false,
            value: { entryId: '65472ee9b547f87817a04ca1', name: '备件分析看板', hasCoop: false, color: 3, icon: 5, type: 'dash' }
          }
        ],
        displayType: 'list',
        titleStyle: { visible: false },
        styles: { background: { type: 'image', position: 'stretch' }, theme: {}, fontSetting: {} },
        mobileStyle: { visible: true, seq: 2, width: 6, height: 4 }
      },
      _widget_1699159776864: {
        posX: 0,
        posY: 16,
        width: 60,
        height: 57,
        type: 'group_container',
        title: '设备管理3',
        enableTab: true,
        tabList: [
          {
            widgetId: '_widget_16991598106081',
            title: '设备概况',
            children: [
              '_widget_1698745062094',
              '_widget_1698745350495',
              '_widget_1698745436357',
              '_widget_1698745463475',
              '_widget_1698745483890',
              '_widget_1699160154892',
              '_widget_1699160171554',
              '_widget_1699160509813',
              '_widget_1700012547190',
              '_widget_1700012687107'
            ]
          },
          {
            widgetId: '_widget_16991598106082',
            title: '点检分布',
            children: [
              '_widget_1699160203950',
              '_widget_1699160261738',
              '_widget_1699160406067',
              '_widget_1699160551777',
              '_widget_1699160678051',
              '_widget_1699160694698',
              '_widget_1700720892087',
              '_widget_1700720909411'
            ]
          },
          {
            widgetId: '_widget_16991598106083',
            title: '巡检分布',
            children: [
              '_widget_1698745611699',
              '_widget_1698745645828',
              '_widget_1699160785914',
              '_widget_1699160893386',
              '_widget_1699160911868',
              '_widget_1699515323517',
              '_widget_1700720745327',
              '_widget_1700720767553'
            ]
          },
          {
            widgetId: '_widget_16991598227654',
            title: '维修分布',
            children: ['_widget_1698745986649', '_widget_1698746106291', '_widget_1698746044677', '_widget_1698746129847']
          },
          {
            widgetId: '_widget_16991598267795',
            title: '保养分布',
            children: [
              '_widget_1698746220951',
              '_widget_1698746267295',
              '_widget_1699161274929',
              '_widget_1699161352639',
              '_widget_1699161442150',
              '_widget_1699161476893',
              '_widget_1699161665530',
              '_widget_1699161680587',
              '_widget_1699161708749'
            ]
          },
          {
            widgetId: '_widget_16993286784856',
            title: '设备台账',
            children: [
              '_widget_1699328695657',
              '_widget_1699328814047',
              '_widget_1699328834168',
              '_widget_1699328846432',
              '_widget_1699328858708',
              '_widget_1699328883859',
              '_widget_1699328897900'
            ]
          }
        ],
        styles: { background: { type: 'color', color: '#F4F6F9' } },
        mobileStyle: { visible: true, seq: 1, width: 6, height: 11.5 }
      },
      _widget_1699160154892: {
        posX: 0,
        posY: 0,
        width: 20,
        height: 6,
        parent: '_widget_1699159776864',
        title: '安装地点',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1698112391941', type: 'combo' }],
        triggers: ['_widget_1698745062094', '_widget_1700012547190', '_widget_1700012687107'],
        rely: [],
        departments: {}
      },
      _widget_1699160171554: {
        title: '使用车间',
        posX: 20,
        posY: 0,
        width: 20,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1698112391939', type: 'combo' }],
        triggers: ['_widget_1698745062094', '_widget_1700012547190', '_widget_1700012687107'],
        rely: [],
        departments: {}
      },
      _widget_1699160203950: {
        title: '今日未点检',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 0,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '65362eec3761f7f4e9947577',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              name: '_widget_1698049926862',
              text: '最近点检时间',
              labelHidden: false,
              tab: 'tab_1698049799577',
              lineWidth: 6,
              id: '65362eec3761f7f4e9947577',
              form: '65362eec3761f7f4e9947577',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              title: '最近点检时间',
              entryId: '65362eec3761f7f4e9947577',
              field: '_widget_1698049926862',
              method: 'formula',
              value: [{ mode: 'custom', formula: [null, '-1d'] }]
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        triggers: [],
        targetValues: [],
        titleStyle: { textAlign: 'center' },
        styles: { background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' } },
        mobileStyle: { visible: true, seq: 1, width: 6, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1700473470681',
            name: '_widget_1700015628157',
            form: '65362eec3761f7f4e9947577',
            type: 'sn',
            title: '设备编码',
            op: 'count',
            format: '0.',
            formatType: 'preset',
            unit: '台'
          }
        ],
        formulas: []
      },
      _widget_1699160261738: {
        title: '今日已点检',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 11,
        width: 12,
        height: 11,
        isShowRawData: true,
        form: '653632f6ff9dba550a215558',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              name: '_widget_1698141299815',
              text: '点检时间',
              labelHidden: false,
              lineWidth: 6,
              id: '653632f6ff9dba550a215558',
              form: '653632f6ff9dba550a215558',
              type: 'datetime',
              format: 'yyyy-MM-dd HH:mm:ss',
              visible: false,
              rely: null,
              title: '点检时间',
              entryId: '653632f6ff9dba550a215558',
              field: '_widget_1698141299815',
              method: 'formula',
              value: [{ mode: 'preset', formula: 'today' }]
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        titleStyle: { textAlign: 'center' },
        triggers: [],
        targetValues: [],
        styles: { background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' } },
        mobileStyle: { visible: true, seq: 0, width: 6, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1699160286606',
            name: '_widget_1698139992067',
            form: '653632f6ff9dba550a215558',
            type: 'text',
            title: '设备编码',
            op: 'count',
            format: '0.',
            formatType: 'preset',
            unit: '台'
          }
        ],
        formulas: []
      },
      _widget_1699160406067: {
        title: '点检记录明细',
        hasExport: false,
        chart_label: { enable: true },
        type: 'data_table',
        posX: 0,
        posY: 28,
        width: 60,
        height: 24,
        form: '653632f6ff9dba550a215558',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        drilldown: 'pc',
        fields: [
          {
            name: '_widget_1698141299815',
            form: '653632f6ff9dba550a215558',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss',
            title: '点检时间',
            tag: 'f_1699327448788'
          },
          { name: '_widget_1698139992067', form: '653632f6ff9dba550a215558', type: 'text', title: '设备编码', tag: 'f_1699159356492' },
          { name: '_widget_1698139992068', form: '653632f6ff9dba550a215558', type: 'text', title: '设备名称', tag: 'f_1699159356493' },
          { name: '_widget_1699070442117', form: '653632f6ff9dba550a215558', type: 'combo', title: '设备状态', tag: 'f_1699159356498' },
          { name: '_widget_1699081508947', form: '653632f6ff9dba550a215558', type: 'text', title: '使用车间', tag: 'f_1699159356494' },
          { name: '_widget_1699081508948', form: '653632f6ff9dba550a215558', type: 'text', title: '安装地点', tag: 'f_1699159356495' },
          { name: '_widget_1698982339286', form: '653632f6ff9dba550a215558', type: 'user', title: '点检员', tag: 'f_1699159356496' },
          { name: '_widget_1698141961731', form: '653632f6ff9dba550a215558', type: 'text', title: '点检结果', tag: 'f_1699159356497' }
        ],
        defaultSort: [{ f_1699327448788: -1 }],
        parent: '_widget_1699159776864',
        conditionalFormatting: [
          {
            tag: 'f_1699159356498',
            colors: [
              { value: '正常运行', color: '#FFFFFF', background: '#46C26F' },
              { value: '带病运行', color: '#FFFFFF', background: '#F0A800' },
              { value: '维修中', color: '#FFFFFF', background: '#00AED1' },
              { value: '备用', color: '#FFFFFF', background: '#C643E0' },
              { value: '停用', color: '#FFFFFF', background: '#EB5050' },
              { value: '报废', color: '#FFFFFF', background: '#485970' }
            ]
          }
        ],
        styles: {
          theme: { color: '#CDE3FA' },
          background: { type: 'image', image: 'https://images.jdycdn.com/a112a672-8c30-49b2-8a0e-0a7e51074b3b', position: 'stretch' },
          fontSetting: { headColor: '#141E31' }
        },
        mobileStyle: { visible: true, seq: 3, width: 6, height: 6 },
        xFields: [],
        yFields: [],
        metrics: [],
        formulas: []
      },
      _widget_1699160509813: {
        title: '设备名称',
        posX: 40,
        posY: 0,
        width: 20,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1698717074456', type: 'combo' }],
        triggers: ['_widget_1698745062094', '_widget_1700012547190', '_widget_1700012687107'],
        rely: [],
        departments: {}
      },
      _widget_1699160551777: {
        title: '点检次数趋势',
        hasExport: true,
        chart_label: { enable: true },
        type: 'area_chart',
        posX: 12,
        posY: 0,
        width: 48,
        height: 22,
        isShowRawData: true,
        form: '653632f6ff9dba550a215558',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'L',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        defaultSort: [{ f_1699160562368: -1 }],
        parent: '_widget_1699159776864',
        curve: true,
        drilldown: 'pc',
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/8a279c6f-2061-4f2c-a258-330e83351b22', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 2, width: 6, height: 4 },
        xFields: [
          {
            groupRule: 'year_month_day',
            name: '_widget_1698141299815',
            form: '653632f6ff9dba550a215558',
            type: 'datetime',
            format: 'yyyy/MM/dd',
            title: '点检时间',
            tag: 'f_1699160562368'
          }
        ],
        yFields: [],
        metrics: [
          {
            tag: 'f_1699160565653',
            name: 'createTime',
            type: 'datetime',
            form: '653632f6ff9dba550a215558',
            format: '',
            title: '点检次数',
            op: 'count',
            color: '#2F7DEB'
          }
        ],
        formulas: []
      },
      _widget_1699160678051: {
        posX: 15,
        posY: 22,
        width: 15,
        height: 6,
        parent: '_widget_1699159776864',
        title: '设备编码',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [
          { form: '653632f6ff9dba550a215558', field: '_widget_1698139992067', type: 'text' },
          { form: '65362eec3761f7f4e9947577', field: '_widget_1700015628157', type: 'sn' }
        ],
        triggers: ['_widget_1699160203950', '_widget_1699160261738', '_widget_1699160406067', '_widget_1699160551777'],
        rely: ['_widget_1699160694698', '_widget_1700720892087', '_widget_1700720909411'],
        departments: {},
        selectedEntry: '653632f6ff9dba550a215558'
      },
      _widget_1699160694698: {
        title: '设备名称',
        posX: 0,
        posY: 22,
        width: 15,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [
          { form: '653632f6ff9dba550a215558', field: '_widget_1698139992068', type: 'text' },
          { form: '65362eec3761f7f4e9947577', field: '_widget_1698717074456', type: 'combo' }
        ],
        triggers: ['_widget_1699160203950', '_widget_1699160261738', '_widget_1699160406067', '_widget_1699160551777'],
        rely: ['_widget_1699160678051', '_widget_1700720892087', '_widget_1700720909411'],
        departments: {},
        selectedEntry: '653632f6ff9dba550a215558'
      },
      _widget_1699160785914: {
        title: '巡检次数趋势',
        hasExport: true,
        chart_label: { enable: true },
        type: 'area_chart',
        posX: 12,
        posY: 0,
        width: 48,
        height: 22,
        isShowRawData: true,
        form: '6538baa995fcd5ffa0cdff5e',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'L',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        defaultSort: [{ f_1699160799574: -1 }],
        parent: '_widget_1699159776864',
        curve: true,
        drilldown: 'pc',
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/a8f68427-39b7-48ea-8869-dc2819211ba1', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 2, width: 6, height: 4 },
        xFields: [
          {
            groupRule: 'year_month',
            name: '_widget_1562298748647',
            form: '6538baa995fcd5ffa0cdff5e',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss',
            title: '巡检时间',
            tag: 'f_1699160799574'
          }
        ],
        yFields: [],
        metrics: [
          {
            tag: 'f_1699160805011',
            name: 'createTime',
            type: 'datetime',
            form: '6538baa995fcd5ffa0cdff5e',
            format: '',
            title: '提交时间',
            op: 'count',
            color: '#2F7DEB'
          }
        ],
        formulas: []
      },
      _widget_1699160893386: {
        posX: 15,
        posY: 22,
        width: 15,
        height: 6,
        parent: '_widget_1699159776864',
        title: '设备编码',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [
          { form: '65362eec3761f7f4e9947577', field: '_widget_1700015628157', type: 'sn' },
          { form: '6540d34b9ecc527e89a520f2', field: '_widget_1699514225049', type: 'text' },
          { form: '6538baa995fcd5ffa0cdff5e', field: '_widget_1698216643054', type: 'text' }
        ],
        triggers: ['_widget_1698745611699', '_widget_1698745645828', '_widget_1699160785914', '_widget_1699515323517'],
        rely: ['_widget_1700720745327', '_widget_1700720767553'],
        departments: {},
        selectedEntry: '65362eec3761f7f4e9947577'
      },
      _widget_1699160911868: {
        title: '设备名称',
        posX: 0,
        posY: 22,
        width: 15,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [
          { form: '65362eec3761f7f4e9947577', field: '_widget_1698717074456', type: 'combo' },
          { form: '6540d34b9ecc527e89a520f2', field: '_widget_1699514225059', type: 'combo' },
          { form: '6538baa995fcd5ffa0cdff5e', field: '_widget_1698216643055', type: 'text' }
        ],
        triggers: ['_widget_1698745611699', '_widget_1698745645828', '_widget_1699160785914', '_widget_1699515323517'],
        rely: ['_widget_1699160893386', '_widget_1700720745327', '_widget_1700720767553'],
        departments: {},
        selectedEntry: '65362eec3761f7f4e9947577'
      },
      _widget_1699161274929: {
        title: '今日待完成保养任务',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 0,
        posY: 0,
        width: 15,
        height: 11,
        isShowRawData: true,
        form: '653a305726e518c959a737b4',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        guideline: [],
        filter: {
          cond: [
            {
              name: '_widget_1562687598899',
              text: '保养结果',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'text',
              visible: true,
              colorEnable: true,
              items: [
                {
                  text: '已完成',
                  value: '已完成',
                  widgetsMap: ['_widget_1562687598930', '_widget_1563343045002', '_widget_1562687599003'],
                  color: '#2FCD6E'
                },
                { text: '未完成', value: '未完成', selected: true, color: '#FA5353' }
              ],
              title: '保养结果',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562687598899',
              method: 'in',
              value: ['未完成'],
              hasEmpty: false
            },
            {
              name: '_widget_1562714937873',
              text: '本次保养时间',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              rely: null,
              title: '本次保养时间',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562714937873',
              method: 'formula',
              value: [{ mode: 'preset', formula: 'today' }]
            }
          ],
          rel: 'and'
        },
        titleStyle: { textAlign: 'center' },
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 0, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1699161300948',
            name: '_widget_1562655921428',
            form: '653a305726e518c959a737b4',
            type: 'sn',
            title: '设备保养单号',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1699161352639: {
        title: '今日已完成保养任务',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 15,
        posY: 0,
        width: 15,
        height: 11,
        isShowRawData: true,
        form: '653a305726e518c959a737b4',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        guideline: [],
        filter: {
          cond: [
            {
              name: '_widget_1562687598899',
              text: '保养结果',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'text',
              visible: true,
              colorEnable: true,
              items: [
                {
                  text: '已完成',
                  value: '已完成',
                  widgetsMap: ['_widget_1562687598930', '_widget_1563343045002', '_widget_1562687599003'],
                  color: '#2FCD6E'
                },
                { text: '未完成', value: '未完成', selected: true, color: '#FA5353' }
              ],
              title: '保养结果',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562687598899',
              method: 'in',
              value: ['已完成'],
              hasEmpty: false
            },
            {
              name: '_widget_1562714937873',
              text: '本次保养时间',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              rely: null,
              title: '本次保养时间',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562714937873',
              method: 'formula',
              value: [{ mode: 'preset', formula: 'today' }]
            }
          ],
          rel: 'and'
        },
        titleStyle: { textAlign: 'center' },
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 1, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1699161300948',
            name: '_widget_1562655921428',
            form: '653a305726e518c959a737b4',
            type: 'sn',
            title: '设备保养单号',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1699161442150: {
        title: '本月待完成保养任务',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 45,
        posY: 0,
        width: 15,
        height: 11,
        isShowRawData: true,
        form: '653a305726e518c959a737b4',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              name: '_widget_1562714937873',
              text: '本次保养时间',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 12,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              rely: null,
              title: '本次保养时间',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562714937873',
              method: 'formula',
              value: [{ mode: 'preset', formula: 'thisMonth' }]
            },
            {
              name: '_widget_1562687598899',
              text: '保养结果',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'text',
              visible: true,
              colorEnable: true,
              items: [
                {
                  text: '已完成',
                  value: '已完成',
                  widgetsMap: ['_widget_1562687598930', '_widget_1563343045002', '_widget_1562687599003'],
                  color: '#2FCD6E'
                },
                { text: '未完成', value: '未完成', selected: true, color: '#FA5353' }
              ],
              title: '保养结果',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562687598899',
              method: 'in',
              value: ['未完成'],
              hasEmpty: false
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        titleStyle: { textAlign: 'center' },
        styles: {
          background: { type: 'image', image: 'https://images.jdycdn.com/93036958-77e1-41c5-8c5c-531735a21499', position: 'stretch' },
          theme: {},
          fontSetting: {}
        },
        mobileStyle: { visible: true, seq: 3, width: 3, height: 2 },
        xFields: [],
        yFields: [],
        metrics: [
          {
            tag: 'f_1698746233208',
            name: '_widget_1562655921428',
            form: '653a305726e518c959a737b4',
            type: 'sn',
            title: '设备保养单号',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1699161476893: {
        title: '本月待完成保养等级分布',
        hasExport: true,
        chart_label: { enable: true },
        type: 'metric_table',
        posX: 47,
        posY: 17,
        width: 13,
        height: 35,
        isShowRawData: true,
        form: '653a305726e518c959a737b4',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'L',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        filter: {
          cond: [
            {
              name: '_widget_1562687598899',
              text: '保养结果',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'text',
              visible: true,
              colorEnable: true,
              items: [
                {
                  text: '已完成',
                  value: '已完成',
                  widgetsMap: ['_widget_1562687598930', '_widget_1563343045002', '_widget_1562687599003'],
                  color: '#2FCD6E'
                },
                { text: '未完成', value: '未完成', selected: true, color: '#FA5353' }
              ],
              title: '保养结果',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562687598899',
              method: 'in',
              value: ['未完成'],
              hasEmpty: false
            },
            {
              name: '_widget_1562714937873',
              text: '本次保养时间',
              labelHidden: false,
              tab: 'tab_1562655921421',
              lineWidth: 6,
              id: '653a305726e518c959a737b4',
              form: '653a305726e518c959a737b4',
              type: 'datetime',
              format: 'yyyy-MM-dd',
              visible: true,
              rely: null,
              title: '本次保养时间',
              entryId: '653a305726e518c959a737b4',
              field: '_widget_1562714937873',
              method: 'range',
              value: ['2023-08-01', '2023-12-31']
            }
          ],
          rel: 'and'
        },
        guideline: [],
        defaultSort: [],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        styles: { background: { type: 'image', image: 'https://images.jdycdn.com/b666eed1-743a-482c-8180-5374857e53ad', position: 'stretch' } },
        mobileStyle: { visible: true, seq: 5, width: 6, height: 4 },
        xFields: [{ name: '_widget_1562687598524', form: '653a305726e518c959a737b4', type: 'text', title: '保养等级', tag: 'f_1699161491330' }],
        yFields: [],
        metrics: [
          {
            tag: 'f_1699161494068',
            name: '_widget_1562655921428',
            form: '653a305726e518c959a737b4',
            type: 'sn',
            title: '设备保养单号',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1699161665530: {
        posX: 20,
        posY: 11,
        width: 20,
        height: 6,
        parent: '_widget_1699159776864',
        title: '设备编号',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '653a305726e518c959a737b4', field: '_widget_1562672238340', type: 'text' }],
        triggers: ['_widget_1698746267295'],
        rely: ['_widget_1699161708749'],
        departments: {}
      },
      _widget_1699161680587: {
        title: '设备名称',
        posX: 0,
        posY: 11,
        width: 20,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '653a305726e518c959a737b4', field: '_widget_1562815861819', type: 'text' }],
        triggers: ['_widget_1698746267295'],
        rely: ['_widget_1699161665530', '_widget_1699161708749'],
        departments: {}
      },
      _widget_1699161708749: {
        title: '保养等级',
        posX: 40,
        posY: 11,
        width: 20,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '653a305726e518c959a737b4', field: '_widget_1562687598524', type: 'text' }],
        triggers: ['_widget_1698746267295'],
        rely: [],
        departments: {}
      },
      _widget_1699328695657: {
        title: '设备基本信息',
        hasExport: false,
        chart_label: { enable: true },
        type: 'data_table',
        posX: 0,
        posY: 6,
        width: 60,
        height: 46,
        form: '65362eec3761f7f4e9947577',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        drilldown: 'pc',
        fields: [
          { name: '_widget_1698112391937', form: '65362eec3761f7f4e9947577', type: 'combo', title: '设备类型', tag: 'f_1699328673064' },
          { name: '_widget_1698717074456', form: '65362eec3761f7f4e9947577', type: 'combo', title: '设备名称', tag: 'f_1699328673065' },
          { name: '_widget_1700015628157', form: '65362eec3761f7f4e9947577', type: 'sn', title: '设备编码', tag: 'f_1700459601466' },
          { name: '_widget_1698112391934', form: '65362eec3761f7f4e9947577', type: 'combo', title: '设备状态', tag: 'f_1699328673067' },
          {
            name: '_widget_1698049926862',
            form: '65362eec3761f7f4e9947577',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss',
            title: '最近点检时间',
            tag: 'f_1699948051607'
          },
          {
            name: '_widget_1698049926863',
            form: '65362eec3761f7f4e9947577',
            type: 'datetime',
            format: 'yyyy-MM-dd',
            title: '最近巡检日期',
            tag: 'f_1699948055619'
          },
          {
            name: '_widget_1698049926864',
            form: '65362eec3761f7f4e9947577',
            type: 'datetime',
            format: 'yyyy-MM-dd',
            title: '最近维修日期',
            tag: 'f_1699948058817'
          },
          {
            name: '_widget_1698049926865',
            form: '65362eec3761f7f4e9947577',
            type: 'datetime',
            format: 'yyyy-MM-dd',
            title: '最近保养日期',
            tag: 'f_1699948060881'
          },
          { name: '_widget_1698112391936', form: '65362eec3761f7f4e9947577', type: 'text', title: '规格型号', tag: 'f_1699328673068' },
          { name: '_widget_1698112391939', form: '65362eec3761f7f4e9947577', type: 'combo', title: '使用车间', tag: 'f_1699328673069' },
          { name: '_widget_1698112391941', form: '65362eec3761f7f4e9947577', type: 'combo', title: '安装地点', tag: 'f_1699328673070' },
          { name: '_widget_1698976586071', form: '65362eec3761f7f4e9947577', type: 'user', title: '设备负责人', tag: 'f_1699328673071' },
          { name: '_widget_1698112391944', form: '65362eec3761f7f4e9947577', type: 'text', title: '设备负责人联系方式', tag: 'f_1699328673072' },
          { name: '_widget_1698112391945', form: '65362eec3761f7f4e9947577', type: 'text', title: '生产厂商', tag: 'f_1699328673073' },
          { name: '_widget_1698112391946', form: '65362eec3761f7f4e9947577', type: 'combo', title: '供应商', tag: 'f_1699328673074' },
          {
            name: '_widget_1698112391947',
            form: '65362eec3761f7f4e9947577',
            type: 'datetime',
            format: 'yyyy-MM-dd',
            title: '购买日期',
            tag: 'f_1699328673075'
          },
          {
            name: '_widget_1698112391948',
            form: '65362eec3761f7f4e9947577',
            type: 'datetime',
            format: 'yyyy-MM-dd',
            title: '启用日期',
            tag: 'f_1699328673076'
          },
          { name: '_widget_1698049926867', form: '65362eec3761f7f4e9947577', type: 'image', title: '设备图片', tag: 'f_1699328673077' },
          { name: '_widget_1698049926868', form: '65362eec3761f7f4e9947577', type: 'upload', title: '设备技术手册', tag: 'f_1699328673078' }
        ],
        defaultSort: [{ f_1699328673064: 1 }],
        parent: '_widget_1699159776864',
        conditionalFormatting: [
          {
            tag: 'f_1699328673067',
            colors: [
              { value: '正常运行', color: '#FFFFFF', background: '#46C26F' },
              { value: '带病运行', color: '#FFFFFF', background: '#F0A800' },
              { value: '维修中', color: '#FFFFFF', background: '#00AED1' },
              { value: '备用', color: '#FFFFFF', background: '#C643E0' },
              { value: '停用', color: '#FFFFFF', background: '#EB5050' },
              { value: '报废', color: '#FFFFFF', background: '#485970' }
            ]
          }
        ],
        styles: {
          theme: { color: '#CDE3FA' },
          fontSetting: { headColor: '#141E31' },
          background: { type: 'image', image: 'https://images.jdycdn.com/95f4ca67-97ea-49ea-a3ef-5a936bf95a07', position: 'stretch' }
        },
        mobileStyle: { visible: true, seq: 0, width: 6, height: 9 },
        xFields: [],
        yFields: [],
        metrics: [],
        formulas: []
      },
      _widget_1699328814047: {
        posX: 0,
        posY: 0,
        width: 10,
        height: 6,
        parent: '_widget_1699159776864',
        title: '设备类型',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1698112391937', type: 'combo' }],
        triggers: ['_widget_1699328695657'],
        rely: ['_widget_1699328834168', '_widget_1699328846432', '_widget_1699328858708', '_widget_1699328883859', '_widget_1699328897900'],
        departments: {}
      },
      _widget_1699328834168: {
        title: '设备名称',
        posX: 10,
        posY: 0,
        width: 10,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1698717074456', type: 'combo' }],
        triggers: ['_widget_1699328695657'],
        rely: ['_widget_1699328846432', '_widget_1699328858708', '_widget_1699328883859', '_widget_1699328897900', '_widget_1699328814047'],
        departments: {}
      },
      _widget_1699328846432: {
        title: '设备编码',
        posX: 20,
        posY: 0,
        width: 10,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1700015628157', type: 'sn' }],
        triggers: ['_widget_1699328695657'],
        rely: ['_widget_1699328883859', '_widget_1699328897900', '_widget_1699328858708', '_widget_1699328814047', '_widget_1699328834168'],
        departments: {}
      },
      _widget_1699328858708: {
        title: '设备状态',
        posX: 30,
        posY: 0,
        width: 10,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1698112391934', type: 'combo' }],
        triggers: ['_widget_1699328695657'],
        rely: ['_widget_1699328814047', '_widget_1699328834168', '_widget_1699328846432', '_widget_1699328883859', '_widget_1699328897900'],
        departments: {}
      },
      _widget_1699328883859: {
        title: '使用车间',
        posX: 40,
        posY: 0,
        width: 10,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1698112391939', type: 'combo' }],
        triggers: ['_widget_1699328695657'],
        rely: ['_widget_1699328814047', '_widget_1699328834168', '_widget_1699328846432', '_widget_1699328858708', '_widget_1699328897900'],
        departments: {}
      },
      _widget_1699328897900: {
        title: '安装地点',
        posX: 50,
        posY: 0,
        width: 10,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [{ form: '65362eec3761f7f4e9947577', field: '_widget_1698112391941', type: 'combo' }],
        triggers: ['_widget_1699328695657'],
        rely: ['_widget_1699328814047', '_widget_1699328834168', '_widget_1699328846432', '_widget_1699328858708', '_widget_1699328883859'],
        departments: {}
      },
      _widget_1699515323517: {
        title: '已检漏检统计',
        hasExport: true,
        chart_label: { enable: true },
        type: 'pivot_table',
        posX: 0,
        posY: 28,
        width: 60,
        height: 25,
        form: '6540d34b9ecc527e89a520f2',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'L',
        mobile_value_size: 'S',
        fields: [],
        conditionalFormatting: [],
        guideline: [],
        defaultSort: [{ f_1699515350528: -1 }],
        drilldown: 'pc',
        parent: '_widget_1699159776864',
        showSummary: { shouldShowSummaryRow: true, shouldShowSummaryCol: true, sumRowPosition: 'bottom', sumColPosition: 'right' },
        styles: {
          theme: { color: '#CDE3FA' },
          background: { type: 'image', image: 'https://images.jdycdn.com/865f0bae-0f9a-4558-8182-12e218423e74', position: 'stretch' },
          fontSetting: { headColor: '#141E31' }
        },
        mobileStyle: { visible: true, seq: 3, width: 6, height: 6 },
        xFields: [
          { name: '_widget_1699514225059', form: '6540d34b9ecc527e89a520f2', type: 'combo', title: '设备名称', tag: 'f_1699515339004' },
          { name: '_widget_1699514225049', form: '6540d34b9ecc527e89a520f2', type: 'text', title: '设备编码', tag: 'f_1699515340247' },
          { name: '_widget_1699514225070', form: '6540d34b9ecc527e89a520f2', type: 'combo', title: '使用车间', tag: 'f_1699515344867' },
          { name: '_widget_1699514225077', form: '6540d34b9ecc527e89a520f2', type: 'combo', title: '安装地点', tag: 'f_1699515346413' }
        ],
        yFields: [
          {
            groupRule: 'year_month',
            name: '_widget_1699514225050',
            form: '6540d34b9ecc527e89a520f2',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss',
            title: '日期',
            tag: 'f_1699515350528'
          }
        ],
        metrics: [
          { tag: 'f_1699515359230', name: '_widget_1699514225085', form: '6540d34b9ecc527e89a520f2', type: 'number', title: '应检次数', op: 'sum' },
          {
            tag: 'f_1699515365960',
            name: '_widget_1699514346847',
            form: '6540d34b9ecc527e89a520f2',
            type: 'number',
            title: '✅已检次数',
            op: 'sum'
          },
          {
            tag: 'f_1699515367298',
            name: '_widget_1699514313793',
            form: '6540d34b9ecc527e89a520f2',
            type: 'number',
            title: '⛔漏检次数',
            op: 'sum'
          }
        ],
        formulas: []
      },
      _widget_1699972965002: {
        posX: 0,
        posY: 0,
        width: 60,
        height: 16,
        type: 'group_container',
        title: '布局容器',
        titleStyle: { visible: false },
        mobileStyle: { visible: true, seq: 0, width: 6, height: 6 }
      },
      _widget_1700012547190: {
        title: '运行中设备数量分布',
        hasExport: true,
        chart_label: { enable: true },
        type: 'column_chart',
        posX: 0,
        posY: 28,
        width: 30,
        height: 25,
        isShowRawData: true,
        form: '65362eec3761f7f4e9947577',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        drilldown: 'pc',
        fields: [],
        conditionalFormatting: [
          {
            tag: 'f_1700459421898',
            colorType: 'gradation',
            needDetail: true,
            axisPos: 'auto',
            barColor: { left: '#FFD081', right: '#B59EFB' },
            colorRange: [{ condition: ['gte ', 'gt '], color: { color: '#63B2EE' } }],
            colors: [
              { value: '变压器' },
              { value: '灭火器' },
              { value: '切制机' },
              { value: '清洗机' },
              { value: '水泵' },
              { value: '削皮机' },
              { value: '蒸柜' }
            ],
            colorGradation: { color: '#B5E9F5 0%,#0361E5 100%', palette: 'preset_map_1' }
          }
        ],
        filter: {
          cond: [
            {
              name: '_widget_1698112391934',
              text: '设备状态',
              labelHidden: false,
              lineWidth: 6,
              id: '65362eec3761f7f4e9947577',
              form: '65362eec3761f7f4e9947577',
              type: 'text',
              visible: true,
              colorEnable: true,
              rely: null,
              items: [
                { value: '正常运行', text: '正常运行', color: '#46C26F' },
                { value: '带病运行', text: '带病运行', color: '#F0A800' },
                { value: '维修中', text: '维修中', color: '#00AED1' },
                { value: '备用', text: '备用', color: '#C643E0' },
                { value: '停用', text: '停用', color: '#EB5050' },
                { value: '报废', text: '报废', color: '#485970' }
              ],
              title: '设备状态',
              entryId: '65362eec3761f7f4e9947577',
              field: '_widget_1698112391934',
              method: 'in',
              value: ['正常运行', '带病运行'],
              hasEmpty: false
            }
          ],
          rel: 'and'
        },
        defaultSort: [],
        parent: '_widget_1699159776864',
        styles: { background: { type: 'image', image: 'https://images.jdycdn.com/91c4debe-aeb3-4a5e-b933-9ba8080465e4', position: 'stretch' } },
        mobileStyle: { visible: true, seq: 5, width: 6, height: 4 },
        xFields: [{ name: '_widget_1698717074456', form: '65362eec3761f7f4e9947577', type: 'combo', title: '设备名称', tag: 'f_1700012557691' }],
        yFields: [],
        metrics: [
          {
            tag: 'f_1700459421898',
            name: '_widget_1700015628157',
            form: '65362eec3761f7f4e9947577',
            type: 'sn',
            title: '设备数量',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1700012687107: {
        title: '维修中设备数量分布',
        hasExport: true,
        chart_label: { enable: true },
        type: 'column_chart',
        posX: 30,
        posY: 28,
        width: 30,
        height: 25,
        isShowRawData: true,
        form: '65362eec3761f7f4e9947577',
        useMemberFormOpt: true,
        permission: 'all',
        value_size: 'S',
        mobile_value_size: 'S',
        drilldown: 'pc',
        fields: [],
        conditionalFormatting: [
          {
            tag: 'f_1700478747300',
            colorType: 'gradation',
            needDetail: true,
            axisPos: 'auto',
            barColor: { left: '#FFD081', right: '#B59EFB' },
            colorRange: [{ condition: ['gte ', 'gt '], color: { color: '#63B2EE' } }],
            colorGradation: { color: '#B5E9F5 0%,#0361E5 100%', palette: 'preset_map_1' }
          }
        ],
        filter: {
          cond: [
            {
              name: '_widget_1698112391934',
              text: '设备状态',
              labelHidden: false,
              lineWidth: 6,
              id: '65362eec3761f7f4e9947577',
              form: '65362eec3761f7f4e9947577',
              type: 'text',
              visible: true,
              colorEnable: true,
              rely: null,
              items: [
                { value: '正常运行', text: '正常运行', color: '#46C26F' },
                { value: '带病运行', text: '带病运行', color: '#F0A800' },
                { value: '维修中', text: '维修中', color: '#00AED1' },
                { value: '备用', text: '备用', color: '#C643E0' },
                { value: '停用', text: '停用', color: '#EB5050' },
                { value: '报废', text: '报废', color: '#485970' }
              ],
              title: '设备状态',
              entryId: '65362eec3761f7f4e9947577',
              field: '_widget_1698112391934',
              method: 'in',
              value: ['维修中'],
              hasEmpty: false
            }
          ],
          rel: 'and'
        },
        defaultSort: [],
        parent: '_widget_1699159776864',
        styles: { background: { type: 'image', image: 'https://images.jdycdn.com/91c4debe-aeb3-4a5e-b933-9ba8080465e4', position: 'stretch' } },
        mobileStyle: { visible: true, seq: 6, width: 6, height: 4 },
        xFields: [{ name: '_widget_1698717074456', form: '65362eec3761f7f4e9947577', type: 'combo', title: '设备名称', tag: 'f_1700012557691' }],
        yFields: [],
        metrics: [
          {
            tag: 'f_1700478747300',
            name: '_widget_1700015628157',
            form: '65362eec3761f7f4e9947577',
            type: 'sn',
            title: '设备数量',
            op: 'count',
            format: ''
          }
        ],
        formulas: []
      },
      _widget_1700720745327: {
        title: '使用车间',
        posX: 30,
        posY: 22,
        width: 15,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [
          { form: '65362eec3761f7f4e9947577', field: '_widget_1698112391939', type: 'combo' },
          { form: '6540d34b9ecc527e89a520f2', field: '_widget_1699514225070', type: 'combo' },
          { form: '6538baa995fcd5ffa0cdff5e', field: '_widget_1699078114809', type: 'text' }
        ],
        triggers: ['_widget_1698745611699', '_widget_1698745645828', '_widget_1699160785914', '_widget_1699515323517'],
        rely: ['_widget_1699160893386', '_widget_1699160911868', '_widget_1700720767553'],
        departments: {},
        selectedEntry: '65362eec3761f7f4e9947577'
      },
      _widget_1700720767553: {
        title: '安装地点',
        posX: 45,
        posY: 22,
        width: 15,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [
          { form: '65362eec3761f7f4e9947577', field: '_widget_1698112391941', type: 'combo' },
          { form: '6540d34b9ecc527e89a520f2', field: '_widget_1699514225077', type: 'combo' },
          { form: '6538baa995fcd5ffa0cdff5e', field: '_widget_1699078114810', type: 'text' }
        ],
        triggers: ['_widget_1698745611699', '_widget_1698745645828', '_widget_1699160785914', '_widget_1699515323517'],
        rely: ['_widget_1699160893386', '_widget_1699160911868', '_widget_1700720745327'],
        departments: {},
        selectedEntry: '65362eec3761f7f4e9947577'
      },
      _widget_1700720892087: {
        title: '使用车间',
        posX: 30,
        posY: 22,
        width: 15,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [
          { form: '653632f6ff9dba550a215558', field: '_widget_1699081508947', type: 'text' },
          { form: '65362eec3761f7f4e9947577', field: '_widget_1698112391939', type: 'combo' }
        ],
        triggers: ['_widget_1699160203950', '_widget_1699160261738', '_widget_1699160406067', '_widget_1699160551777'],
        rely: ['_widget_1699160678051', '_widget_1699160694698', '_widget_1700720909411'],
        departments: {},
        selectedEntry: '653632f6ff9dba550a215558'
      },
      _widget_1700720909411: {
        title: '安装地点',
        posX: 45,
        posY: 22,
        width: 15,
        height: 6,
        parent: '_widget_1699159776864',
        defaultConfig: {},
        valueMode: 'item',
        method: 'in',
        type: 'text_filter',
        fields: [
          { form: '653632f6ff9dba550a215558', field: '_widget_1699081508948', type: 'text' },
          { form: '65362eec3761f7f4e9947577', field: '_widget_1698112391941', type: 'combo' }
        ],
        triggers: ['_widget_1699160203950', '_widget_1699160261738', '_widget_1699160406067', '_widget_1699160551777'],
        rely: ['_widget_1699160678051', '_widget_1699160694698', '_widget_1700720892087'],
        departments: {},
        selectedEntry: '653632f6ff9dba550a215558'
      }
    },
    createTime: '2024-03-02T02:40:31.716Z',
    updateTime: '2024-03-02T02:40:31.716Z',
    mobileLayout: { enable: true },
    icon: 6,
    color: 3,
    styles: {
      theme: { name: 'preset_style_light_1', highLightColor: '#2F7DEB', palette: 'preset_1', gradation: 'preset_map_1' },
      background: { type: 'color', color: '#F4F6F9' },
      widget: {
        theme: { color: '#E9E9E9', icon: 1, cardName: 'preset_metric_1' },
        background: { type: 'color', color: '#FFFFFF' },
        fontSetting: { titleColor: '#1F2D3D', headColor: '#5E6D82', textColor: '#1F2D3D', textAlign: 'default' }
      }
    },
    mobileStyles: { enable: false },
    isExport: false,
    isPublicExcelExport: false,
    isShowExport: true
  }
}
