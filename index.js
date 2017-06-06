"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cx = require("classnames");
class Checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = () => {
            this.props.onChange(!this.props.value);
        };
    }
    render() {
        const label = (this.props.label) ?
            React.createElement("label", null, this.props.label) :
            null;
        return (React.createElement("div", { className: cx("hire-forms-checkbox", { checked: this.props.value }), onClick: this.handleClick },
            React.createElement("svg", { viewBox: "0 0 240 220" },
                React.createElement("g", { className: "box" },
                    React.createElement("rect", { fillOpacity: "0", height: "190", rx: "20", ry: "20", stroke: "black", strokeWidth: "20", width: "190", x: "15", y: "15" })),
                React.createElement("g", { className: "checkmark" },
                    React.createElement("rect", { fill: "#00BFA5", height: "212", rx: "10", ry: "10", transform: "rotate(45)", width: "60", x: "150", y: "-130" }),
                    React.createElement("rect", { fill: "#00BFA5", height: "120", rx: "10", ry: "10", transform: "rotate(-45)", width: "60", x: "-90", y: "90" }))),
            label));
    }
}
exports.default = Checkbox;
