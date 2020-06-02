import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import globalStyles from '../../global/styles.module.css';

const Header = () => {
	return (
		<div className={["Header", globalStyles.primaryTextColor].join(" ")}>
			<nav>
				<ul>
					<li><NavLink to="/" 
								exact
								activeStyle={{
									fontWeight: '700'
								}}>Home</NavLink></li>
					<li>
						<NavLink to={{
										pathname: '/about',
										hash: '#submit'
									}} exact
									activeStyle={{
										fontWeight: '700'
									}}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to='/projects' exact
									activeStyle={{
										fontWeight: '700'
									}}>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact' exact
									activeStyle={{
										fontWeight: '700'
									}}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;