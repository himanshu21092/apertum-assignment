import React from 'react';
import './App.scss';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { UsersPage } from './pages/UsersPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={LoginPage}></Route>
				<Route exact path="/users" component={UsersPage}></Route>
				<Redirect to='/login' />
			</Switch>
		</Router>
	);
}

export default App;
