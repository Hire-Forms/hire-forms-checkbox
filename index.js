"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require("../../constants");

var Checkbox = (function (_React$Component) {
	function Checkbox() {
		_classCallCheck(this, Checkbox);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Checkbox, _React$Component);

	_createClass(Checkbox, [{
		key: "handleClick",
		value: function handleClick() {
			this.props.onChange(!this.props.value);
		}
	}, {
		key: "render",
		value: function render() {
			var label = undefined;

			if (this.props.label) {
				label = _react2["default"].createElement(
					"label",
					null,
					this.props.label
				);
			}

			return _react2["default"].createElement(
				"div",
				{
					className: (0, _classnames2["default"])(_constants.CHECKBOX, { checked: this.props.value }),
					onClick: this.handleClick.bind(this) },
				_react2["default"].createElement(
					"svg",
					{ viewBox: "0 0 220 220" },
					_react2["default"].createElement("rect", {
						fillOpacity: "0",
						height: "190",
						rx: "20",
						ry: "20",
						stroke: "black",
						strokeWidth: "20",
						width: "190",
						x: "15",
						y: "15" }),
					_react2["default"].createElement(
						"g",
						{ transform: "rotate(45) translate(40, -80)" },
						_react2["default"].createElement("rect", {
							height: "200",
							width: "20",
							x: "180",
							y: "0" }),
						_react2["default"].createElement("rect", {
							height: "20",
							width: "200",
							x: "0",
							y: "180" })
					)
				),
				label
			);
		}
	}]);

	return Checkbox;
})(_react2["default"].Component);

Checkbox.defaultProps = {
	value: false
};

Checkbox.propTypes = {
	label: _react2["default"].PropTypes.string,
	onChange: _react2["default"].PropTypes.func.isRequired,
	value: _react2["default"].PropTypes.bool
};

exports["default"] = Checkbox;
module.exports = exports["default"];
