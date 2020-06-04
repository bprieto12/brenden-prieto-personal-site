import React, { Component } from 'react';
import PageStyle from '../../hoc/PageStyle';
import globalStyles from '../../global/styles.module.css';
import styles from './Contact.module.css';

class Contact extends Component {
	render() {
		return (
			<PageStyle>
				<div className={[globalStyles.primaryTextColor, styles.Contact].join(" ")}>
					<h1><b>Let's Talk!</b></h1>
					<p>
						If you have any questions or would like some help with a web development project, please feel free to contact me!
					</p>
					<p>
						714-600-0577<br/>
						12bprieto@gmail.com
					</p>
				</div>
			</PageStyle>
		);
	}
}

export default Contact;