import React from 'react';
import userIcon from './images/userIcon.png';
import officeImage from './images/officeImg.jpg';

const sidebar = (props) => (
	<ul id='slide-out' className='sidenav'>
		<li>
			<div className='user-view'>
				<div className='background'>
					<img src={officeImage} alt='Logo' width='100%' />
				</div>
				<a href='#user'>
					<img className='circle' src={userIcon} alt='UserImage' />
				</a>
				<a href='#name'>
					<span className='pink-text name'>John Doe</span>
				</a>
				<a href='#email'>
					<span className='pink-text email'>jdandturk@gmail.com</span>
				</a>
			</div>
		</li>
		<li>
			<a href='#!'>
				<i className='material-icons'>cloud</i>First Link With Icon
			</a>
		</li>
		<li>
			<a href='#!'>Second Link</a>
		</li>
		<li>
			<div className='divider' />
		</li>
		<li>
			<a href='!#' className='subheader'>
				Subheader
			</a>
		</li>
		<li>
			<a className='waves-effect' href='#!'>
				Third Link With Waves
			</a>
		</li>
	</ul>
);
export default sidebar;
