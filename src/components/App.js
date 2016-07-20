import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

import {login} from "../ducks/userDuck";
import StockList from "./StockList"

class App extends React.Component{

	constructor(props){
		super(props)

		this.state={
			username: ""
		}
	}

	handleChange(event){
		this.setState({
			username: event.target.value
		})
	}

	login(){
		if (this.state.username) {
			this.props.dispatch(login(this.state.username));
		}
	}

	render(){
		return(
			<div>
				<Link to={"/account"}>Account</Link>
				{ this.props.user.loggedIn
						?
							<h1>Good morning, {this.props.user.username}</h1>
						: 
							<div>	
								<input 
									placeholder="Username"
									type="text"
									value={this.state.username}
									onChange={this.handleChange.bind(this)}
								/>
								<button onClick={this.login.bind(this)}>Login</button>
							</div>
				}
				<StockList />
			</div>




		)
	}
}

export default connect( state =>(
	{
		user: state.user,
	}
))(App);