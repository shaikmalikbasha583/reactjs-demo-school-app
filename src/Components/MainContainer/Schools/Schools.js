import React from 'react';
import School from './School/School';

const schools = (props) => {
	const schoolsList = props.schools.map((school) => (
		<School key={school.id} school={school} likeHandler={() => props.likeHandler(school.id)} />
	));
	return <div className='row'>{schoolsList}</div>;
};

export default schools;
