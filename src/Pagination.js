import React, { Component } from 'react';

class Pagination extends Component{
	
	handleNext(page) {
		this.props.nextResults(page);
	}

	handlePrevious(page) {
		this.props.previousResults(page);
	}
	
	render() {
		var prev = this.props.showPrevious ? <div className="nav-item" onClick={() => this.handlePrevious(this.props.previous)}>Prev</div> : <div className="nav-item disabled">Prev</div>;
		var next = this.props.showNext ? <div className="nav-item" onClick={() => this.handleNext(this.props.next)}>Next</div> : <div className="nav-item disabled">Next</div>
		return (
			<div>
				{prev}
	          	<div className="nav-item">|</div>
	          	{next}
			</div>
		);
	}
}

export default Pagination;

