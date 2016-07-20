import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import {Provider} from "react-redux";

import store from "./store";
import App from "./components/App";
import Stock from "./components/Stock";
import Account from "./components/Account";

document. addEventListener("DOMContentLoaded", ()=>{
	const reactNode = document.getElementById("react-node");
	if (reactNode) {
		ReactDOM.render(

			<Provider store = {store}>
				<Router history = {browserHistory}>
					<Route path="/" component={App} />
					<Route path="/stock/:stockId" component={Stock} />
					<Route path="/account" component={Account} />
				</Router>
			</Provider>


		, reactNode);
	}
})