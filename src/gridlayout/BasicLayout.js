import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "./basiclayout.css";

const ReactGridLayout = WidthProvider(RGL);

class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 10,
    rowHeight: 100,
    onLayoutChange: function() {},
    cols: 12
  };

  constructor(props) {
    super(props);
    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    const arr = this.props.arr
    return  _.map(_.range(arr.length), function(i) {
      return (
        <div key={i}>
          <span className="object-text">{arr[i].name} </span>
          <img className="object-img" src={ arr[i].iconUri } alt="" /> 
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 3) % 12,
        y: Math.floor(i / 4) * y,
        w: 3,
        h: 1,
        i: i.toString()
      };
    });
    // var arr = []
    // for(i=0; i<this.props.resp.objects; i++){
    //   arr.push({x:i, y:0})
    // }

  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (    
        <ReactGridLayout
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>
    );
  }
}

// if (require.main === module) {
//   require("../test-hook.jsx")(module.exports);
// }

export default BasicLayout