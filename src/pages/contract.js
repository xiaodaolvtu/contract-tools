import React, { Component } from 'react'
import ContractTab from '../components/ContractTab'
import ProfitsView from './ProfitsView'
import ClosePriceView from './ClosePriceView'
import AveragePriceView from './AveragePriceView'
import {
  Button,
  Container, 
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
  Input,
  Tab,
  List,
  Form,
  Checkbox
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  last: {
    marginBottom: '300px',
  },
}
  
  
// const Profits = (props)=> (
// 	<Tab.Pane>
// 		  <List>
// 		    <List.Item>
// 				<ContractTab SetContractType={(value)=>props.SetContractType(value)}/>
// 		    </List.Item>
// 		  </List>
// 	</Tab.Pane>
// )
const panes = [
  { menuItem: '撮合均价计算', render: (props) => <AveragePriceView {...props}/> },
  { menuItem: '收益计算', render: (props) => <ProfitsView {...props}/> },
 // { menuItem: '平仓价格计算', render: (props) => <ClosePriceView {...props}/>  },
]
class ResponsiveLayout extends Component {
    state = {contractType:'多单', leverage: '10x'}
    handleChange = (e, { value }) => this.setState({ value })
	SetContractType = (value) => this.setState({contractType:value})
	SetLeverage = (value) => this.setState({leverage:value})
    render() {
  	  return (
		  <div>
		    <Container text>
		      <Segment.Group>
				<Tab
					SetContractType={(value)=>this.SetContractType(value)} 
					SetLeverage={(value)=>this.SetLeverage(value)} 
					panes={panes}/>
		      </Segment.Group>
		    </Container>
		  </div>
  	  )
    }
}

export default ResponsiveLayout