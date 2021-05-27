import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Article from './componants/Article';
import Articles from './componants/Articles';
import Comments from './componants/Comments';
import Header from './componants/Header';
import NewComment from './componants/NewComment';
import Topic from './componants/Topic';

function App() {
	return (
		<div className="container-fluid">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Articles />
					</Route>
					<Route exact path="/articles/:article_id">
						<Article />
						<Comments />
					</Route>
					<Route exact path="/articles/:article_id/reply">
						<Article />
						<NewComment />
					</Route>
					<Route exact path="/topics/:topic">
						<Topic />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
