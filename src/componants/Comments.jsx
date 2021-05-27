import React from 'react';
import '../css/comments.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCommentsByArticleId } from '../utils/api.js';

const Comments = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [comments, setComments] = useState([]);
	const { article_id } = useParams();

	useEffect(() => {
		getCommentsByArticleId(article_id).then((commentsFromApi) => {
			console.log(commentsFromApi);
			setComments(commentsFromApi);
			setIsLoading(false);
		});
	}, []);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<div className="container article">
			{comments.map((comment) => {
				return (
					<div>
						<div className="row seperator">
							<div className="col-1 text-center">
								<button className="btn">
									<i className="fas fa-angle-up"></i>
								</button>
								100
								<button className="btn">
									<i className="fas fa-angle-down"></i>
								</button>
							</div>
							<div className="col">{comment.body}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Comments;
{
	/* 
<div className="row">
<div className="col-1 text-center">
	<button className="btn">
		<i className="fas fa-angle-up"></i>
	</button>
	100
	<button className="btn">
		<i className="fas fa-angle-down"></i>
	</button>
</div>
<div className="col">Comment Body</div>
</div>
<div className="row">
<div className="col-1"></div>
<div className="col">Author Info</div>
</div>
 */
}
