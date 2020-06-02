import React, { Component } from 'react';
// import rd3 from 'react-d3-library';
import PageStyle from '../../hoc/PageStyle';
import styles from './Home.module.css';
import globalStyles from '../../global/styles.module.css';

class Home extends Component {
	render() {
		return (
			<PageStyle>
				<div className={styles.Home}>
					<h1 className={[globalStyles.primaryTextColor, styles.textSize].join(" ")}>
						Hello, I'm <span className={globalStyles.primaryColorDark}>Brenden.</span><br/><br />
						I'm a <span className={globalStyles.primaryColorMedium}>full stack web developer</span><br /> and I make <span className={globalStyles.primaryColorMedium}>cool projects</span>
					</h1>
				</div>
			</PageStyle>
		);
	}
}

export default Home;