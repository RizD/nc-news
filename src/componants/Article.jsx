import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticlesById } from '../utils/api.js';
import Votes from './Votes';

const Article = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);
	const { article_id } = useParams();

	useEffect(() => {
		getArticlesById(article_id).then((articleFromApi) => {
			setArticles(articleFromApi.article[0]);
			setIsLoading(false);
		});
	}, [article_id]);
	if (isLoading) {
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}
	return (
		<div className="container article">
			<div className="row">
				<Votes currentVotes={articles.votes} articleId={articles.article_id} />
				<div className="col border-left">
					<h1>{articles.title}</h1>
				</div>
			</div>
			<div className="row">
				<div className="col article-body">
					<p>{articles.body}</p>
				</div>
			</div>
			<div className="row article-info">
				<div className="col">
					<p>
						<Link to={`/articles/${articles.article_id}`} className="link">
							{`${articles.comment_count} comments `}
						</Link>
						<Link to={`/topics/${articles.topic}`} className="link">
							{`/topics/${articles.topic}`}
						</Link>
						{`
						created by ${articles.author}
						on ${new Date(articles.created_at).toDateString()}`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Article;
