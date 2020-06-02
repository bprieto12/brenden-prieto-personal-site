import React from 'react';
import './PageStyle.css';

const pageStyle = props => {
	return (
		<div className="PageStyle">
			<div className="PageWidth">
				{props.children}
			</div>
		</div>
	)
}

export default pageStyle;