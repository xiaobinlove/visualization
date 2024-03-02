export default {
  appId: '65e2919f562ee4862b839628',
  entryId: '65362eec3761f7f4e9947577',
  name: '设备档案',
  type: 'form',
  parent: '1',
  hasCoop: true,
  seq: 640,
  icon: 1,
  color: 1,
  is_system_form: false,
  fields: [
    {
      name: '_widget_1698112391937',
      text: '设备类型',
      labelHidden: false,
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'combo',
      async: { data: { formId: '6537758b31c2ecaae47a227b', field: '_widget_1698133388407' } },
      visible: true,
      colorEnable: false,
      rely: null,
      linkFilter: [],
      linkFilterRel: 'and'
    },
    {
      name: '_widget_1699105544270',
      text: '设备类型编码',
      labelHidden: false,
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: false,
      rely: {
        filter: {
          rel: 'and',
          cond: [{ field: '_widget_1698133388407', mode: 'depend', type: 'text', method: 'eq', depend: { field: '_widget_1698112391937' } }]
        },
        data: { formId: '6537758b31c2ecaae47a227b', field: '_widget_1699105441969' }
      }
    },
    {
      name: '_widget_1698717074456',
      text: '设备名称',
      labelHidden: false,
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'combo',
      async: { data: { formId: '65377f58cec6c9332d87cfcc', field: '_widget_1698135896870' } },
      visible: true,
      colorEnable: false,
      rely: {
        filter: {
          rel: 'and',
          cond: [{ field: '_widget_1698135896868', mode: 'depend', type: 'text', method: 'eq', depend: { field: '_widget_1698112391937' } }]
        },
        data: { formId: '65377f58cec6c9332d87cfcc', field: '_widget_1698135896870' }
      }
    },
    {
      name: '_widget_1699105544271',
      text: '设备名称编码',
      labelHidden: false,
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: false,
      rely: {
        filter: {
          rel: 'and',
          cond: [
            { field: '_widget_1698135896870', mode: 'depend', type: 'text', method: 'eq', depend: { field: '_widget_1698717074456' } },
            { field: '_widget_1698135896868', mode: 'depend', type: 'text', method: 'eq', depend: { field: '_widget_1698112391937' } }
          ]
        },
        data: { formId: '65377f58cec6c9332d87cfcc', field: '_widget_1699105476073' }
      }
    },
    {
      name: '_widget_1700015628157',
      text: '设备编码',
      labelHidden: false,
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'sn',
      visible: true
    },
    {
      name: '_widget_1698112391934',
      text: '设备状态',
      labelHidden: false,
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'combo',
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
      ]
    },
    {
      name: '_widget_1698112391936',
      text: '规格型号',
      labelHidden: false,
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true
    },
    {
      name: '_widget_1698112391939',
      text: '使用车间',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'combo',
      async: { data: { formId: '653778ef135f4098cfce6a42', field: '_widget_1698134256208' } },
      visible: true,
      colorEnable: false,
      rely: null,
      linkFilter: [],
      linkFilterRel: 'and'
    },
    {
      name: '_widget_1698112391941',
      text: '安装地点',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'combo',
      async: { data: { formId: '653789d200467f801c751f99', field: '_widget_1698138578838' } },
      visible: true,
      colorEnable: false,
      rely: null,
      linkFilter: [],
      linkFilterRel: 'and'
    },
    {
      name: '_widget_1698976586071',
      text: '设备负责人',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'user',
      visible: true
    },
    {
      name: '_widget_1698112391944',
      text: '设备负责人联系方式',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true
    },
    {
      name: '_widget_1698112391945',
      text: '生产厂商',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true
    },
    {
      name: '_widget_1698112391947',
      text: '购买日期',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      visible: true
    },
    {
      name: '_widget_1699858236560',
      text: '选择供应商',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'linkfield',
      visible: true,
      linkFilter: [],
      linkFilterRel: 'and',
      linkFieldsFormShow: [],
      buttonStyle: null,
      linkForm: '653902193a9caa478b1cf310',
      linkFields: [
        { text: '供应商编码', type: 'sn', name: '_widget_1699857561417' },
        { text: '供应商名称', type: 'text', name: '_widget_1698234906476' },
        { text: '供应商联系人', type: 'text', name: '_widget_1699858378644' },
        { text: '供应商联系人手机', type: 'text', name: '_widget_1698234906477' }
      ],
      sort: { _widget_1699857561417: 1 },
      showDataLabel: true
    },
    {
      name: '_widget_1699858520423',
      text: '供应商编码',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true
    },
    {
      name: '_widget_1698112391946',
      text: '供应商名称',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true
    },
    {
      name: '_widget_1698112391948',
      text: '启用日期',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      visible: true
    },
    {
      name: '_widget_1700446816465',
      text: '设备购置单编号',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true
    },
    {
      name: '_widget_1700446816473',
      text: '设备验收单编号',
      labelHidden: false,
      tab: 'tab_1698049799576',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true
    },
    {
      name: '_widget_1698049926862',
      text: '最近点检时间',
      labelHidden: false,
      tab: 'tab_1698049799577',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      visible: true
    },
    {
      name: '_widget_1698140727359',
      text: '点检标准名称',
      labelHidden: false,
      tab: 'tab_1698049799577',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'combo',
      async: { data: { formId: '653631079a031652146e85ba', field: '_widget_1698050316421' } },
      visible: true,
      colorEnable: false,
      rely: null,
      linkFilter: [],
      linkFilterRel: 'and'
    },
    {
      name: '_widget_1699874410033',
      text: '点检标准编码',
      labelHidden: false,
      tab: 'tab_1698049799577',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true,
      rely: {
        filter: {
          rel: 'and',
          cond: [{ field: '_widget_1698050316421', mode: 'depend', type: 'text', method: 'eq', depend: { field: '_widget_1698140727359' } }]
        },
        data: { formId: '653631079a031652146e85ba', field: '_widget_1699863655365' }
      }
    },
    {
      name: '_widget_1698049926863',
      text: '最近巡检日期',
      labelHidden: false,
      tab: 'tab_1698049799578',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      visible: true
    },
    {
      name: '_widget_1699519044826',
      text: '下次巡检日期',
      labelHidden: false,
      tab: 'tab_1698049799578',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      visible: true
    },
    {
      name: '_widget_1698214498899',
      text: '巡检方案名称',
      labelHidden: false,
      tab: 'tab_1698049799578',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'combo',
      async: { data: { formId: '6538b414c872e939611be715', field: '_widget_1698214933921' } },
      visible: true,
      colorEnable: false,
      rely: null,
      linkFilter: [],
      linkFilterRel: 'and'
    },
    {
      name: '_widget_1699878352380',
      text: '巡检方案编码',
      labelHidden: false,
      tab: 'tab_1698049799578',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'text',
      visible: true,
      rely: {
        filter: {
          rel: 'and',
          cond: [{ field: '_widget_1698214933921', mode: 'depend', type: 'text', method: 'eq', depend: { field: '_widget_1698214498899' } }]
        },
        data: { formId: '6538b414c872e939611be715', field: '_widget_1699865501964' }
      }
    },
    {
      name: '_widget_1698747430891',
      text: '当天规定巡检次数',
      labelHidden: false,
      tab: 'tab_1698049799578',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'number',
      visible: true,
      rely: {
        filter: {
          rel: 'and',
          cond: [{ field: '_widget_1698214933921', mode: 'depend', type: 'text', method: 'eq', depend: { field: '_widget_1698214498899' } }]
        },
        data: { formId: '6538b414c872e939611be715', field: '_widget_1698747483770' }
      },
      displayMode: 'number',
      precision: null,
      thousandsSeparator: false
    },
    {
      name: '_widget_1698049926864',
      text: '最近维修日期',
      labelHidden: false,
      tab: 'tab_1698049799579',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      visible: true
    },
    {
      name: '_widget_1698049926865',
      text: '最近保养日期',
      labelHidden: false,
      tab: 'tab_1698049799580',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      visible: true
    },
    {
      name: '_widget_1698049926867',
      text: '设备图片',
      labelHidden: false,
      tab: 'tab_1698049799583',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'image',
      visible: true,
      maxFileCount: 10
    },
    {
      name: '_widget_1698049926868',
      text: '设备技术手册',
      labelHidden: false,
      tab: 'tab_1698049799583',
      lineWidth: 6,
      id: '65362eec3761f7f4e9947577',
      form: '65362eec3761f7f4e9947577',
      type: 'upload',
      visible: true,
      maxFileCount: 10
    },
    { name: 'creator', type: 'user', form: '65362eec3761f7f4e9947577', text: '提交人' },
    { name: 'createTime', type: 'datetime', form: '65362eec3761f7f4e9947577', format: 'yyyy-MM-dd HH:mm:ss', text: '提交时间' },
    { name: 'updateTime', type: 'datetime', form: '65362eec3761f7f4e9947577', format: 'yyyy-MM-dd HH:mm:ss', text: '更新时间' }
  ]
}
