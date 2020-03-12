import React from 'react';

const header = (props) => (
	<nav className='purple'>
		<div className='nav-wrapper'>
			<ul className='left'>
				<li>
					<a href='!#' data-target='slide-out' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</a>
				</li>
				<li>
					<a href='/' className='brand-logo' style={{ paddingLeft: 10 }}>
						Logo
					</a>
				</li>
			</ul>
			<ul className='right'>
				<li>
					<a href='/'>
						<i className='material-icons'>search</i>
					</a>
				</li>
				<li>
					<a href='/'>
						<i className='material-icons'>notifications</i>
					</a>
				</li>
			</ul>
		</div>
	</nav>
);

export default header;
