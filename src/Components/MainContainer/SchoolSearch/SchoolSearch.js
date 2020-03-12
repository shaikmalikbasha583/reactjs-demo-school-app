import React, { Component } from 'react';

class SchoolSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchHint: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		let newHint = e.target.value;
		this.setState({ searchHint: newHint });
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.handleChange(this.state.searchHint);
	}
	render() {
		return (
			<div className='row'>
				<div className='col s12' align='left'>
					<b>Search School :</b>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className='col s8' align='center'>
						<input
							type='text'
							value={this.state.searchHint}
							onChange={this.handleChange}
							placeholder='Type school name here...'
						/>
					</div>
					<div className='col s4' align='center'>
						<button type='submit' className='waves-effect waves-dark btn-small'>
							Search
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SchoolSearch;
