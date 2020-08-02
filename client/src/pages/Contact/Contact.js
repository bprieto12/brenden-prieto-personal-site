import React, { Component } from 'react';
import PageStyle from '../../hoc/PageStyle';
import globalStyles from '../../global/styles.module.css';
import styles from './Contact.module.css';

class Contact extends Component {
	render() {
		return (
			<PageStyle>
				<div className={[globalStyles.primaryTextColor, styles.Contact].join(" ")}>
					<h2 className={globalStyles.primaryColorDark}><b>Let's Talk!</b></h2>
					<p>
						If you have any questions or would like some help with a web development project, please feel free to contact me!
					</p>
					<p>
						<b>714-600-0577<br/>
						12bprieto@gmail.com</b>
					</p>
				</div>
			</PageStyle>
		);
	}
}

export default Contact;