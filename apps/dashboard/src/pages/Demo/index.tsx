import React from 'react'
import * as _ from 'lodash-es'
import GL, { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
// import './index.css'
const ResponsiveReactGridLayout = WidthProvider(GL)

export default class DragFromOutsideLayout extends React.Component {
  static defaultProps = {
    className: 'layout',
    rowHeight: 30,
    onLayoutChange: function () {},
    cols: 12
  }

  state = {
    currentBreakpoint: 'lg',
    compactType: 'vertical',
    mounted: false,
    layouts: { lg: generateLayout() }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function (l, i) {
      return (
        <div key={i} className={l.static ? 'static' : ''}>
          {l.static ? (
            <span className="text" title="This item is static and cannot be removed or resized.">
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      )
    })
  }

  //   onBreakpointChange = (breakpoint) => {
  //     this.setState({
  //       currentBreakpoint: breakpoint
  //     })
  //   }

  onCompactTypeChange = () => {
    const { compactType: oldCompactType } = this.state
    const compactType = oldCompactType === 'horizontal' ? 'vertical' : oldCompactType === 'vertical' ? null : 'horizontal'
    this.setState({ compactType })
  }

  onLayoutChange = (layout, layouts) => {
    console.log(layout, 'layout')
    console.log(layouts, 'layouts')
    this.props.onLayoutChange(layout, layouts)
  }

  onNewLayout = () => {
    this.setState({
      layouts: { lg: generateLayout() }
    })
  }

  render() {
    return (
      <div>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} ({this.props.cols[this.state.currentBreakpoint]} columns)
        </div>
        <div>Compaction type: {_.capitalize(this.state.compactType) || 'No Compaction'}</div>
        <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>Change Compaction Type</button>
        <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          // this is a hack for firefox
          // Firefox requires some kind of initialization
          // which we can do by adding this attribute
          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
          onDragStart={(e) => e.dataTransfer.setData('text/plain', '')}
        >
          Droppable Element (Drag me!)
        </div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
          isDroppable={true}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    )
  }
}

function generateLayout() {
  return _.map(_.range(0, 25), function (item, i) {
    const y = Math.ceil(Math.random() * 4) + 1
    return {
      x: Math.round(Math.random() * 5) * 2,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    }
  })
}
