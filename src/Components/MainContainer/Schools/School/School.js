import React from 'react';
import logo from './images/userIcon.png';
import './School.css';

const school = (props) => {
	var likeStatus = props.school.like ? 'favorite' : 'favorite_border';
	return (
		<div
			className='col s12 valign-wrapper'
			style={{ boxShadow: '0px 1px 2px 2px #cccccc', marginBottom: 10, display: 'block' }}>
			<div className='row customStyle valign-wrapper'>
				<div className='col s3'>
					<img src={logo} alt='SchoolLogo' width='70px' height='70px' />
				</div>
				<div className='col s6'>{props.school.name}</div>
				<div className='col s3'>
					<button className='btn-small white' onClick={props.likeHandler}>
						<i className='small material-icons red-text'>{likeStatus}</i>
					</button>
					<div>
						Contact : <i className='tiny material-icons purple-text'>add_circle_outline</i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default school;
