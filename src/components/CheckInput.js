import React, { Component } from 'react'
import ContractTab from '../components/ContractTab'
import {
  Label,
  Segment,
  Tab,
  List,
  Divider,
  Input,
  Button,
  Message
} from 'semantic-ui-react'

class CheckInput extends Component {
	  constructor(props) {
	    super(props);
	    this.state ={price:0,count:0}
	    this.index = props.index;
	    this.price = props.price;
		this.label = this.index+'：价格'
	  }
	  
	setPrice = (e, {value})=>{
		if(! /^d*(?:.d{0,4})?$/.test(value)) console.log("aaa")
		this.setState({price:value})
	}
	setCount = (e, {value})=>this.setState({count:value})
	handleClick = ()=>{
		const {price,count} = this.state;
		console.log('@CheckInput:handleClick'+price+' '+count+' '+this.index)
		this.props.addContract&&this.props.addContract(price, count,this.index)
	} 
    render() {
    	//const callback = (price,count)=>this.props.addContract(price,count,this.index)
  	  return (
  	  	<Segment>
  	  	<Label attached='top'>{"加仓"+(this.index+1)}</Label>
			<Input 
				style={{width:'110px'}}
				size='mini' 
				label={'价格'} 
				onChange={this.setPrice}
				placeholder={this.price||0} />
			<Input 
				style={{width:'70px'}}
				size='mini' 
				action={ <Button color='teal'  size='mini'  content='确定' onClick={ ()=>this.handleClick() } />} 
				label={'张数'} 
				onChange={this.setCount}
				placeholder={0}/>
			</Segment>
  	  )
    }
}
export default CheckInput