import React, { Component } from 'react';
import PageStyle from '../../hoc/PageStyle';
import './About.css';


class About extends Component {
	render() {
		return (
			<PageStyle>
				<div className="Intro">
					<div className="PersonalPhoto">
						<img src="https://via.placeholder.com/150" />
					</div>
					<div className="AboutSummary">
						<h2 style={{color: '#3AAFA9'}}>About Me</h2>
						<hr />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div className="Skills">
				</div>
				<div className="Interests">
				</div>
			</PageStyle>
		);
	}
}

export default About;