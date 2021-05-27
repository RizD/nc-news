import React from 'react';
import '../css/topic.css';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api.js';

const Topic = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);
	const params = useParams();

	useEffect(() => {
		getArticles(params.topic).then((articlesFromApi) => {
			setArticles(articlesFromApi);
			setIsLoading(false);
		});
	}, [params]);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<div className="container articles">
			{articles.map((article) => {
				return (
					<div id="article" className="row" key={article.article_id}>
						<div className="col-1 seperator text-center">
							<button className="btn">
								<i className="fas fa-angle-up"></i>
							</button>
							{article.votes}
							<button className="btn">
								<i className="fas fa-angle-down"></i>
							</button>
						</div>
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

export default Topic;
