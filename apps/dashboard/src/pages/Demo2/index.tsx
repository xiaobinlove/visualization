import './index.less'

const DemoFunnel = () => {
  const data = [
    { stage: '简历筛选', number: 253 },
    { stage: '初试人数', number: 151 },
    { stage: '复试人数', number: 113 },
    { stage: '录取人数', number: 87 },
    { stage: '入职人数2', number: 59 },
    { stage: '入职人数3', number: 59 },
    { stage: '入职人数4', number: 59 }
  ]

  const config = {
    data,
    xField: 'stage',
    yField: 'number',
    label: {
      text: (d) => `${d.stage}\n${d.number}`
    },
    legend: {
      color: {
        layout: {
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }
      }
    }
  }

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-blue-500 size-[500px] pt-[10px] mx-auto">ddd</div>
      <div className="space-x-4">
        <div className="inline-block bg-slate-400">1</div>
        <div className="inline-block bg-slate-500">1</div>
        <div className="inline-block bg-slate-600">1</div>
        <div className="inline-block bg-slate-700">1</div>
      </div>
      <div className="border-blue-500 border-solid border mt-4 size-24">dd22</div>
      <div className="grid grid-cols-3 divide-x font-mono text-sm text-center font-bold leading-6 rounded-6 shadow-lg">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <button className="outline outline-offset-2 outline-1">buttona</button>
      <div className="pt-[20px]">ddd</div> */}
      <div className="grid grid-cols-4 gap-4" style={{ columns: 2 }}>
        {new Array(6).fill(0).map((_, index) => {
          return (
            <div key={index} className=" bg-slate-400">
              {index}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DemoFunnel
