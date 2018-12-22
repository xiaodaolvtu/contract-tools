//合约面值 单位：美元
const ContractSize = {
	btc: 100,
	ltc: 10,
	other: 10
}


/*
type :'btc', 'ltc'...
count : total count of contract
//deals struction
{
	成交数量 ：count
	成交价格 ：price 
}
*/

const formulas ={
		//撮合均价计算
		//合约面值*总持仓量/（（合约面值*成交1持仓量）/开仓价格1）+ （2）+ （3））
		average_price : (type, count, deals) => {
			const size = ContractSize[(''+type).toLowerCase()||'btc'];
			var result = 0;
			var count = 0;
			deals.forEach(function(deal){
				if(deal.price) {
					count = count +parseInt(deal.count)
					result = parseFloat(result) + (size*parseFloat(deal.count)/parseFloat(deal.price));
					console.log("@@"+result)
				}
			})
			return {price:parseFloat(size*count/result).toFixed(4),count:count}
		},
		//初始保证金计算
		//币种，开仓价，合约数量
		//合约面值*持仓量/（合约面值*持仓量）
		original_margin : (type, price, count,lever) => {
			const l = lever ||10
			const size = parseInt(ContractSize[type||'btc']);
			const m = parseFloat((size*count)/price).toFixed(4)
			console.log("original_margin:"+m)
			return  m/parseInt(lever)
		},
		//收益计算(多)
		// (合约价值 / 开仓价价 – 合约价值 / 最新成交价) * 持仓量 = profit
		profit_long : (type, close_price,  price, count) => {
			const size = ContractSize[type||'btc'];
			return (size/price - size/close_price)*count
			
		},
		profit_short : (type, close_price,  price, count) => {
			const size = ContractSize[type||'btc'];
			return (size/close_price - size/price)*count
			
		},
		//爆仓价计算
		//币种，杠杆倍数，开仓价，合约数量，保证金（为空计算初始爆仓价位）
		// 爆仓价 = 合约价值/（合约价值 / 开仓价价  - profit/持仓量 ）
		//10倍杠杆用户，保证金的10%，即保证金率小于等于10%；
		//20倍杠杆用户，合约账户权益小于等于保证金的20%，即保证金率小于等于20%
		//永续合约保证金100%
		liquidation_price_long : (type, lever,  price, count, margin, contractType) => {
			const size = parseInt(ContractSize[type||'btc']);
			const liquidation_proportion = contractType=='noend'?1:1-(parseInt(lever||10)/100);
			const m = margin || formulas.original_margin (type, price, count,lever)
			const liquidation_position = -m*liquidation_proportion;
			return size/((size/price)-(liquidation_position/count))
		},
		liquidation_price_short : (type, lever,  price, count, margin,contractType) => {
			const size = parseInt(ContractSize[type||'btc']);
			const liquidation_proportion = contractType=='noend'?1:1-(parseInt(lever||10)/100);
			const m = margin || formulas.original_margin (type, price, count,lever)
			const liquidation_position = -m*liquidation_proportion;

			return size/((size/price)+(liquidation_position/count))
		},
		
}

export default formulas