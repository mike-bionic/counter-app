import React, { Component } from 'react';

// changed to functional component
// THIS.props is not working here we just pass the props

// if I use (props) i write {props.totalCounters}
// but we can destruct it and get just totalCounters:

const NavBar = ({totalCounters}) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar{" "}
				<span className="badge badge-pill badge-secondary">
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;