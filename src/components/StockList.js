import React from "react";
import {Link} from "react-router";

import {getStocks} from "../services/stockService"

export default class StockList extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			stocks: []
		}
	}

	componentWillMount(){
		this.setState({
			stocks: getStocks()
		})
	}


	render(){
		const stocks = this.state.stocks.map((stock)=>(
			<li key={stock._id}>
				<Link to={`/stock/${stock._id}`}>{stock.company} ---------- {stock.price}</Link>
			</li>
		))
		return(
			<div>
				<h1>Stock list</h1>
				<ul>
					{stocks}
				</ul>
			</div>
			
		)
	}
}