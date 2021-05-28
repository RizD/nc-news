import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCommentsByArticleId } from '../utils/api.js';
import VotesComments from './VotesComments';

const Comments = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [comments, setComments] = useState([]);
	const { article_id } = useParams();

	useEffect(() => {
		getCommentsByArticleId(article_id).then((commentsFromApi) => {
			setComments(commentsFromApi);
			setIsLoading(false);
		});
	}, [article_id]);
	if (isLoading) {
		return <p>.</p>;
	}
	return (
		<div className="container article">
			{comments.map((comment) => {
				return (
					<div className="comment-section" key={comment.comment_id}>
						<div className="row">
							<VotesComments
								currentVotes={comment.votes}
								commentId={comment.comment_id}
							/>
							<div className="col comment-body">{comment.body}</div>
						</div>
						<div className="row">
							<div className="col-1 empty-col"></div>
							<div className="col comment-col-1 comment-info">
								{`Created by ${comment.author} on ${new Date(
									comment.created_at
								).toDateString()}`}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Comments;
