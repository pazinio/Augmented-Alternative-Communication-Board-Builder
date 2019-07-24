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
    const resp = this.props.resp
    return  _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i}>
          <span className="object-text">{resp.objects[i].name}
            <img className="object-img" src={ resp.objects[i].iconUri } alt="" /> 
          </span>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 8,
        y: Math.floor(i / 4) * y,
        w: 2,
        h: 2,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <div>
        <div> 
         <p> {this.props.resp.subject} </p>
           Subject:
          <img className="subject-img" src={this.props.resp.iconUri } alt=''/> 

          Original:
          <img className="subject-img" src={this.props.resp.originalImageUri } alt=''/> 

        </div>
        <ReactGridLayout
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>
      </div>
    );
  }
}

// if (require.main === module) {
//   require("../test-hook.jsx")(module.exports);
// }

export default BasicLayout