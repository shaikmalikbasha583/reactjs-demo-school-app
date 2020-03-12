import React, { Component } from 'react';
import Schools from './Schools/Schools';
import SchoolSearch from './SchoolSearch/SchoolSearch';
import AddSchool from './AddSchool/AddSchool';

class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schoolsData: [
				{ id: 1, name: 'CDS School', logo: 'logo.png', students: 100, like: true },
				{ id: 2, name: 'ABC School', logo: 'logo.png', students: 100, like: true },
				{ id: 3, name: 'XYZ School', logo: 'logo.png', students: 100, like: true },
				{ id: 4, name: 'PQR School', logo: 'logo.png', students: 100, like: true },
				{ id: 5, name: 'LMN School', logo: 'logo.png', students: 100, like: true }
			],
			searchHint: ''
		};
		this.searchChangeHandler = this.searchChangeHandler.bind(this);
	}

	likeChangeHandler = (schoolIndex) => {
		let updatedState = this.state.schoolsData.map((school) => {
			if (school.id === schoolIndex) {
				school.like = !school.like;
			}
			return school;
		});
		this.setState({ schoolsData: updatedState });
	};

	addNewSchool = (school) => {
		let newState = this.state.schoolsData;
		newState.push(school);
		this.setState(newState);
	};

	searchChangeHandler(searchHint) {
		let newSearchHint = searchHint;
		this.setState({ searchHint: newSearchHint });
	}

	render() {
		let schoolsData = [];
		if (this.state.searchHint !== '') {
			const hint = this.state.searchHint;
			schoolsData = this.state.schoolsData.filter((school) => {
				const schoolName = school.name.toLowerCase();
				if (schoolName.includes(hint.toLowerCase())) {
					return school;
				} else {
					return null;
				}
			});
		} else {
			schoolsData = this.state.schoolsData;
		}

		return (
			<div className='main-wrapper' style={{ marginTop: 15 }}>
				<div className='container'>
					<SchoolSearch handleChange={this.searchChangeHandler} />
				</div>
				<div className='container'>
					<AddSchool length={this.state.schoolsData.length} newSchool={this.addNewSchool} />
				</div>
				<div className='container'>
					<Schools schools={schoolsData} likeHandler={this.likeChangeHandler} />
				</div>
			</div>
		);
	}
}

export default MainContainer;
