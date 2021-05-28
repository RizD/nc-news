import axios from 'axios';

const api = axios.create({
	baseURL: 'https://riz-nc-news.herokuapp.com/api',
});

export const getTopics = async () => {
	const { data } = await api.get('/topics');
	return data.topics;
};

export const getArticles = async (topicToGet) => {
	const { data } = await api.get('/articles', {
		params: {
			topic: topicToGet,
		},
	});
	return data.articles;
};

export const getArticlesById = async (Id) => {
	const { data } = await api.get(`/articles/${Id}`);
	return data;
};

export const getCommentsByArticleId = async (Id) => {
	const { data } = await api.get(`/articles/${Id}/comments`);
	return data.comments;
};

export const updateVotesByArticleId = async (Id, votes) => {
	const { data } = await api.patch(`/articles/${Id}`, { inc_votes: votes });
	return data.article.votes;
};
