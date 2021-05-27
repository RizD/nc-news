import React from 'react';
import '../css/article.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticlesById } from '../utils/api.js';

const Article = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);
	const { article_id } = useParams();

	useEffect(() => {
		getArticlesById(article_id).then((articleFromApi) => {
			setArticles(articleFromApi.article[0]);
			setIsLoading(false);
		});
	}, []);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<div className="container article">
			<div className="row">
				<div className="col-1 text-center">
					<button className="btn">
						<i className="fas fa-angle-up"></i>
					</button>
					{articles.votes}
					<button className="btn">
						<i className="fas fa-angle-down"></i>
					</button>
				</div>
				<div className="col">
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
					<p>Info</p>
				</div>
			</div>
		</div>
	);
};

export default Article;
