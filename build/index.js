(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsCheckbox = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

// import {CHECKBOX} from "../../constants";
var CHECKBOX = "hire-checkbox";

var Checkbox = (function (_React$Component) {
	_inherits(Checkbox, _React$Component);

	function Checkbox() {
		_classCallCheck(this, Checkbox);

		_get(Object.getPrototypeOf(Checkbox.prototype), "constructor", this).apply(this, arguments);
	}

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
					className: (0, _classnames2["default"])(CHECKBOX, { checked: this.props.value }),
					onClick: this.handleClick.bind(this) },
				_react2["default"].createElement(
					"svg",
					{ viewBox: "0 0 240 220" },
					_react2["default"].createElement(
						"g",
						{ className: "box" },
						_react2["default"].createElement("rect", {
							fillOpacity: "0",
							height: "190",
							rx: "20",
							ry: "20",
							stroke: "black",
							strokeWidth: "20",
							width: "190",
							x: "15",
							y: "15" })
					),
					_react2["default"].createElement(
						"g",
						{ className: "checkmark" },
						_react2["default"].createElement("rect", {
							fill: "#00BFA5",
							height: "212",
							rx: "10",
							ry: "10",
							transform: "rotate(45)",
							width: "60",
							x: "150",
							y: "-130" }),
						_react2["default"].createElement("rect", {
							fill: "#00BFA5",
							height: "120",
							rx: "10",
							ry: "10",
							transform: "rotate(-45)",
							width: "60",
							x: "-90",
							y: "90" })
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

},{"classnames":"classnames","react":"react"}]},{},[1])(1)
});