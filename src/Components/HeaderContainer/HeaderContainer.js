import React, { Component } from 'react';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';

class HeaderContainer extends Component {
	render() {
		return (
			<div className='header-wrapper'>
				<Header />
				<SideBar />
			</div>
		);
	}
}

export default HeaderContainer;
