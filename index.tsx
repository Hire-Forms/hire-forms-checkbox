import * as React from "react";
import * as cx from "classnames";


interface IProps {
	label: string;
	onChange: (value: boolean) => void;
	value: boolean;
}

class Checkbox extends React.Component<IProps, null> {
	private handleClick = () => {
		this.props.onChange(!this.props.value);
	};

	public render() {
		const label = (this.props.label) ?
			<label>{this.props.label}</label> :
			null;

		return (
			<div
				className={cx(
					"hire-forms-checkbox",
					{checked: this.props.value}
				)}
				onClick={this.handleClick}
			>
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

export default Checkbox;
