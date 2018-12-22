import React, { Component } from 'react'
import ContractTab from '../components/ContractTab'
import {
  Label,
  Segment,
  Tab,
  List,
  Divider,
  Input,
  Button
} from 'semantic-ui-react'
const types = ['多单', '空单']
const leverages = ['10x', '20x']
class ClosePriceView extends Component {
	state = {contractType:'多单',leverage:'10x',openPrice:0,closePrice:0,amount:0}
	setOpenPrice= (e, { value }) => this.setState({ openPrice : value })
	setProfits= (e, { value }) => this.setState({ profits : value })
	setAmount= (e, { value }) => this.setState({ amount : value })
	onClick= (e) => {
		console.log(' '+this.state.contractType+this.state.leverage+this.state.openPrice+this.state.profits+this.state.amount)
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
						style={{marginTop : "20px"}}
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
						<Label style={{width:'130px'}}> 开仓数量:{"("+(this.state.amount||0)+")"} </Label>
						<Input 
							label={{ basic: true, content: '张' }}
							labelPosition='right'
							style={{marginLeft:  '20px' }} 
							onChange={this.setAmount}
							placeholder='0' />
					</Segment>
					<Segment>
						<Label style={{width:'130px'}}> 收益:{"("+(this.state.profits||0)+")"} </Label>
						<Input 
							label={{ basic: true, content: '$' }}
							style={{marginLeft:  '20px' }} 
							onChange={this.setProfits}
							placeholder='0' />
					</Segment>
			    </List.Item>
			  </List>
			   <Button color='violet' onClick={this.onClick}>Violet</Button>
		</Tab.Pane>
  	  )
    }
}
export default ClosePriceView