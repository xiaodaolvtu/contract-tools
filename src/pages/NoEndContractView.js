import React, { Component } from 'react'
import {
  Label,
  Segment,
  Tab,
  List,
  Divider,
  Input,
  Button,
  Message,
  Container
} from 'semantic-ui-react'
import { Slider } from 'react-semantic-ui-range'
import ContractTab from '../components/ContractTab'
import CheckInput from '../components/CheckInput'
import   formulas  from '../datas/formulas'

const types = ['多单', '空单']
const leverages = ['10x', '20x']
const currencys = ['btc']


class NoEndContractView extends Component {
    handleChange = (e) => this.setState({ leverage: e.target.value+'x' })
	state = {contractType:'多单',leverage:2, rate : 2,openPrice:0,closePrice:0,amount:0,
		currency:'btc',liquidationPrice:0,inputs:[],finalPrice:0,finalAmount:0,
		finalLiquidationPrice:0,hidden:true, message:''}
	setOpenPrice= (e, { value }) => this.setState({ openPrice : value })
	//SetCurrency= (e, { value }) => this.setState({ currency : value })
	setProfits = (e, { value }) => this.setState({ profits : value })
	setAmount = (e, { value }) => this.setState({ amount : value })
	onClick = (e) => {
		if(this.state.openPrice&&this.state.amount){
			this.setState({inputs:[].concat(this.state.inputs,{})})
		}else{
			this.myAlert("请填写仓位信息！")
		}
	}
	clear = ()=> {
		this.setState({inputs:[]})
		//this.ref1.current.clear()
	//	this.setState({contractType:'多单',leverage:'10x',openPrice:0,closePrice:0,amount:0,currency:'btc',luquidationPrice:0})
	}
	checkInitialInfo = ()=>{const p = this.getLiquidationPrice();this.setState({liquidationPrice:p})}
	checkfinalInfo = (price,count)=>{const p = this.getLiquidationPrice(price,count);this.setState({finalLiquidationPrice:p})}
	getLiquidationPrice = (price, count)=>{
		let liquidation, p = price||this.state.openPrice,c = count ||this.state.amount;
		this.state.contractType ==='多单' ? liquidation = formulas.liquidation_price_long : liquidation =formulas.liquidation_price_short;
		const result= liquidation(this.state.currency, this.state.leverage, p, c,null,'noend')
		return result
	}
    handleValueChange(e, {value}){
    	const v = parseInt(value) >100?100:value
    	this.setState({
    	leverage: v
    	})
	}
	
	//更新最终仓位信息
	updateInputs = (price, count ,index)=>{
		let inputs =  this.state.inputs;
		let result = [];
		const len = inputs.length;
		if(len==1) {
			if(index == 0) result = [].concat({price,count})
		}
		else if(len == 2){
			if(index == 0) result = [].concat({price,count},inputs[1])
			else result = [].concat(inputs[0],{price,count})
		}
		else if(index == 0) result = [].concat({price,count},inputs.slice(1,len))
		else if(index == (len-1)) result = [].concat(inputs.slice(0,index),{price,count})
		else result = [].concat(inputs.slice(0,index),{price,count},inputs.slice(index+1,len))

		this.setState({inputs:[].concat(result)})
		return result
		
	}
	addContract = (price, count,index)=> {
		
		const {openPrice, amount,currency} = this.state;
		const inputs = this.updateInputs(parseFloat(price), parseFloat(count),index);
		const deals = [].concat({price:parseFloat(openPrice),count:parseFloat(amount)},inputs)
		const average = formulas.average_price(currency,parseFloat(amount), deals)
		
		this.setState({finalPrice:average.price,finalAmount:average.count},this.checkfinalInfo(average.price,average.count))
	}
	
	addInput = (index,  luquidation_price)=>{
		if(this.state.openPrice||this.state.amount){
			return <CheckInput index={index}  price={luquidation_price}/>
		}
	
		
	}
	myAlert = (message) =>{
		this.setState({hidden:false,message:message})
		var that = this
		setTimeout(function(){ that.setState({hidden:true,message:''}); }, 3000);
	}
    render() {
      const { leverage ,inputs} = this.state
      const settings = { start: this.state.leverage, min:2,max:100,step:1, onChange: (value) => {
      	this.setState({leverage:value})
      } }
  	  return (   
			<Tab.Pane style={{paddingBottom:'60px'}}>
			  {!this.state.hidden&&<Message Floating>{this.state.message}</Message>}
			  <Segment>OK未公布太多永续细节，请小心使用！</Segment>
				  <List >
				    <List.Item >
					  <Container>
							<Label style={{width:'80px',marginRight:'20px'}}> 合约币种: </Label>
							<div class="ui red label small">BTC</div>
							<br/>
						</Container>
						<ContractTab 
							group
							style={{marginLeft:'-4px',paddingLeft:'0px',marginTop : "5px"}}
							ref={this.ref1}
							title="合约类型"
							SetContractType = {(value)=>this.setState({contractType:value})} 
							values={types}
							defaultValue={types[0]}/>

				    <Container>
							<Label style={{width:'80px'}}> 开仓价格: </Label>
							<Input 
								size='mini' 
								style={{width:'100px',marginLeft:'10px'}}
								label={{ basic: true, content: '$' }}
								onChange={this.setOpenPrice}
								placeholder='0' />
							<br/>
							<Label style={{width:'80px'}}> 开仓数量: </Label>
							<Input 
								size='mini' 
								style={{width:'100px',marginLeft:'10px',marginRight:'20px'}}
								label={{ basic: true, content: '张' }}
								labelPosition='right'
								onChange={this.setAmount}
								placeholder='0' />
								' '
							
							 <Segment>
					          <h3 style={{color:'gray'}}>杠杆倍数</h3>
					          <p>
					              <Slider value={this.state.leverage} color="red" inverted={false} settings={settings}/>
					            </p>
					            <Input placeholder="请输入杠杆倍数" onChange={this.handleValueChange.bind(this)} value={this.state.leverage}/>
					        	<Button color='green' size='mini' style={{borderRadius:0}} content='确定' onClick={ this.checkInitialInfo } />
					        </Segment>
							<Message info > 
								<b>{"初始仓位信息："}</b><br/>
								{"开仓价格："}<b style={{color:'red'}}>{this.state.openPrice}</b>
									{"  |  合约类型："}<b style={{color:'red'}}>{this.state.contractType}</b>
								{"  |  杠杆倍数："}<b style={{color:'red'}}>{this.state.leverage}</b>
								{"  |  合约币种："}<b style={{color:'red'}}>{this.state.currency}</b>
								{"  |  持仓数量："}<b style={{color:'red'}}>{this.state.amount}</b>
								{"  |  爆仓价格："}<b style={{color:'red'}}>{this.state.liquidationPrice}</b>
								{this.state.finalPrice?<p>
									<b>{"最终仓位信息："}</b><br/>
									{"平均价格："}<b style={{color:'red'}}>{this.state.finalPrice}</b>
									{"  |  合约类型："}<b style={{color:'red'}}>{this.state.contractType}</b>
									{"  |  杠杆倍数："}<b style={{color:'red'}}>{this.state.leverage}</b>
									{"  |  合约币种："}<b style={{color:'red'}}>{this.state.currency}</b>
									{"  |  持仓数量："}<b style={{color:'red'}}>{this.state.finalAmount}</b>
									{"  |  爆仓价格："}<b style={{color:'red'}}>{this.state.finalLiquidationPrice}</b>
								</p>
								:null}
							</Message>
							
							</Container>
				    </List.Item>
				  </List>
				    <Container>
				    <Button.Group >
					    <Button onClick={this.clear}>清空</Button>
					    <Button.Or />
					    <Button positive onClick={this.onClick}>加仓</Button>
					  </Button.Group>
					  <br/>
				{inputs.length||0?inputs.map((input,index)=><CheckInput index={index} addContract={(price,count,index)=>this.addContract(price,count,index)}/>):null}

				    </Container>
			</Tab.Pane>
  	  )
    }
}

export default NoEndContractView