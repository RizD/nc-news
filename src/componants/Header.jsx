import React from 'react';
import '../css/header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api.js';

const Header = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);

	return (
		<nav className="navbar navbar-expand">
			<Link to="/" className="navbar-brand">
				NC News
			</Link>
			<ul className="navbar-nav ml-auto pr-5 mr-5">
				{topics.map((topic) => {
					return (
						<li className="nav-item" key={topic.slug}>
							<Link to={`/topics/${topic.slug}`} className="nav-link">
								{topic.slug.toUpperCase()}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Header;

{
	/* <li className="nav-item">
<Link to="" className="nav-link">
	Link
</Link>
</li> */
}
