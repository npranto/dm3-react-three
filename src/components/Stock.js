import React from "react";
import {connect} from "react-redux";
import {buyStock} from "../ducks/accountDuck";
import {findStockById} from "../services/stockService";

class Stock extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			company: "",
			price: "",
			about: ""
		};
	}

	componentWillMount(){
		const {company, price, about} = findStockById(this.props.params.stockId);
		this.setState({
			company,
			price,
			about
		})
	}

	buy(){
		if (this.props.account.balance < 100) {
			alert("No Stocks for you");
			return 
		}
		this.props.dispatch(buyStock({
			company: this.state.company,
			price: this.state.price,
			about: this.state.about,
			_id: this.props.params.stockId
		}))
	}

	render(){
		return (
			<div>
				<h1>{this.state.company}</h1>
				<h3>{this.state.price}</h3>
				<p>{this.state.about}</p>

				<button onClick={this.buy.bind(this)}>Buy Stock</button>
			</div>
			

		)
	}
}

export default connect( state =>(
	{
		account: state.account,
	}
))(Stock);