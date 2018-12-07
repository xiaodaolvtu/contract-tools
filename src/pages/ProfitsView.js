import React, { Component } from 'react'
import ContractTab from '../components/ContractTab'
import {
  Label,
  Segment,
  Tab,
  List,
  Input,
  Button,
  Message
} from 'semantic-ui-react'
import   formulas  from '../datas/formulas'
const types = ['多单', '空单']
const leverages = ['10x', '20x']
class ProfitsView extends Component {
	state = {contractType:'多单',leverage:'10x',openPrice:0,closePrice:0,amount:0,type:'btc'}
	setOpenPrice= (e, { value }) => this.setState({ openPrice : value })
	setClosePrice= (e, { value }) => this.setState({ closePrice : value })
	setAmount= (e, { value }) => this.setState({ amount : value })
	onClick= (e) => {
		const getProfits = this.state.contractType==='多单'?formulas.profit_long:formulas.profit_short
		const p = getProfits(this.state.type, this.state.closePrice,this.state.openPrice,this.state.amount)
		console.log(p)
		this.setState({Result:p})
	}
    render() {
  	  return (
		<Tab.Pane>
			  <List>
			    <List.Item>
					<ContractTab 
						title="合约类型"
						SetContractType = {(value)=>this.setState({contractType:value})} 
						values={types}
						defaultValue={types[0]}/>
					<ContractTab 
						title="杠杆倍数"
						SetLeverage = {(value)=>this.setState({leverage:value})} 
						values={leverages} 
						defaultValue={leverages[0]}/>
					<Segment>
						<Label style={{width:'130px'}}> 开仓价格:{"("+(this.state.openPrice||0)+")"} </Label>
						<Input 
							label={{ basic: true, content: '$' }}
							style={{marginLeft:  '20px' }} 
							onChange={this.setOpenPrice}
							placeholder='0' />
					</Segment>
					<Segment>
						<Label style={{width:'130px'}}> 平仓价格:{"("+(this.state.closePrice||0)+")"} </Label>
						<Input 
							label={{ basic: true, content: '$' }}
							style={{marginLeft:  '20px' }} 
							onChange={this.setClosePrice}
							placeholder='0' />
					</Segment>
					<Segment>
						<Label style={{width:'130px'}}> 开仓数量:{"("+(this.state.amount||0)+")"} </Label>
						<Input 
							label={{ basic: true, content: '张' }}
							labelPosition='right'
							style={{marginLeft:  '20px' }} 
							onChange={this.setAmount}
							placeholder='0' />
					</Segment>
					
						{
							this.state.Result?	<Segment><Message> <Message.Header>在该位置平仓可获得收：</Message.Header>{this.state.Result+' '+this.state.type}</Message></Segment>
							:null
						}
					
			    </List.Item>
			  </List>
			   <Button color='green' style={{display: 'flex',alignItems: 'center'}} onClick={this.onClick}>计算收益</Button>
		</Tab.Pane>
  	  )
    }
}
export default ProfitsView