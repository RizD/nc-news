import React from 'react';
import '../css/articles.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api.js';
import Votes from './Votes';

const Articles = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles().then((articlesFromApi) => {
			setArticles(articlesFromApi);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}
	return (
		<div className="container articles">
			{articles.map((article) => {
				return (
					<div id="article" className="row" key={article.article_id}>
						<Votes
							currentVotes={article.votes}
							articleId={article.article_id}
						/>
						<div className="col seperator">
							<div className="title">
								<Link to={`/articles/${article.article_id}`} className="link">
									<p>
										<span className="left">{article.title}</span>
									</p>
								</Link>
							</div>
							<div className="info">
								<p>
									<Link to={`/articles/${article.article_id}`} className="link">
										{`${article.comment_count} comments `}
									</Link>
									<Link to={`/topics/${article.topic}`} className="link">
										{`/topics/${article.topic}`}
									</Link>
									{`
									created by ${article.author}
									on ${new Date(article.created_at).toDateString()}`}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Articles;
