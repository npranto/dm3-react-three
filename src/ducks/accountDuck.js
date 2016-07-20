const BUY_STOCK = "accout/BUY_STOCK";

const initialState = {
	ownedStocks: [],
	balance: 1000
}

export default function reducer(state = initialState, action){
	switch(action.type){
		case BUY_STOCK:{
			return{
				ownedStocks : [...state.ownedStocks, action.stock],
				balance : state.balance - 100
			}
		}
	}
	return state;
}

export function buyStock(stock){
	return {
		type: BUY_STOCK, stock
	}
}