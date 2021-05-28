import React, { useState } from 'react';
import { updateVotesByArticleId } from '../utils/api.js';

const Votes = ({ currentVotes, articleId }) => {
	const [votes, setVotes] = useState(currentVotes);

	const updateVotes = (vote) => {
		updateVotesByArticleId(articleId, vote).then((updatedVoteCount) => {
			setVotes(updatedVoteCount);
		});
	};

	return (
		<div className="col-1 seperator text-center">
			<button
				className="btn"
				onClick={() => {
					updateVotes(1);
				}}
			>
				<i className="fas fa-angle-up"></i>
			</button>
			{votes}
			<button
				className="btn"
				onClick={() => {
					updateVotes(-1);
				}}
			>
				<i className="fas fa-angle-down"></i>
			</button>
		</div>
	);
};

export default Votes;
