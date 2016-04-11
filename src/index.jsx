import React from "react";
import cx from "classnames";

// import {CHECKBOX} from "../../constants";
const CHECKBOX = "hire-checkbox"

class Checkbox extends React.Component {
	handleClick() {
		this.props.onChange(!this.props.value);
	}

	render() {
		let label;

		if (this.props.label) {
			label = (<label>{this.props.label}</label>);
		}

		return (
			<div
				className={cx(
					CHECKBOX,
					{checked: this.props.value}
				)}
				onClick={this.handleClick.bind(this)}>
				<svg viewBox="0 0 240 220">
					<g className="box">
						<rect
							fillOpacity="0"
							height="190"
							rx="20"
							ry="20"
							stroke="black"
							strokeWidth="20"
							width="190"
							x="15"
							y="15" />
					</g>
					<g className="checkmark">
						<rect
							fill="#00BFA5"
							height="212"
							rx="10"
							ry="10"
							transform="rotate(45)"
							width="60"
							x="150"
							y="-130" />
						<rect
							fill="#00BFA5"
							height="120"
							rx="10"
							ry="10"
							transform="rotate(-45)"
							width="60"
							x="-90"
							y="90" />
					</g>
				</svg>
				{label}
			</div>
		);
	}
}

Checkbox.defaultProps = {
	value: false
};

Checkbox.propTypes = {
	label: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired,
	value: React.PropTypes.bool
};

export default Checkbox;
