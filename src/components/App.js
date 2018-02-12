import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class App extends Component {
	render() {
		return (
			<div className="page">
				<div className="nav">
					<Header />
					<User />
				</div>
				<div className="main">
					<ActionsBar />
					<ProjectCard />
					<PaginationBar />
				</div>
			</div>
		);
	}
}

export default App;
