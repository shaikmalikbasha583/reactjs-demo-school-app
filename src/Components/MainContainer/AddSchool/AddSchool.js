import React, { Component } from 'react';

class AddSchool extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			id: props.length + 1,
			students: 0,
			logo: 'logo.png',
			like: true
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(key) {
		return function(event) {
			let updatedState = {};
			updatedState[key] = event.target.value;
			this.setState(updatedState);
		}.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		return this.props.newSchool(this.state);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='row valign-wrapper' style={{ boxShadow: '0px 1px 2px 2px #cccccc' }}>
					<div className='col s5'>
						<input
							type='text'
							placeholder='Enter School Name'
							value={this.state.name}
							onChange={this.handleChange('name')}
						/>
					</div>
					<div className='col s5'>
						<input
							type='number'
							placeholder='no of students'
							value={this.state.students}
							onChange={this.handleChange('students')}
						/>
					</div>
					<div className='col s2'>
						<button type='submit' className='btn-small green'>
							<b>
								<i className='tiny white-text material-icons'>add_circle_outline</i>
							</b>
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default AddSchool;
