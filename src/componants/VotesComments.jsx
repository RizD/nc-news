import React, { useState } from 'react';

const VotesComments = ({ currentVotes, commentId }) => {
	const [votes] = useState(currentVotes);

	return (
		<div className="col-1 comment-col-1 text-center">
			<button className="btn">
				<i className="fas fa-angle-up"></i>
			</button>
			{votes}
			<button className="btn">
				<i className="fas fa-angle-down"></i>
			</button>
		</div>
	);
};

export default VotesComments;
