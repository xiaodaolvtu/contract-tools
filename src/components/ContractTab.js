import React, { Component } from 'react'
import { Form, Checkbox, Label,Segment,Container } from 'semantic-ui-react'
const firstNode = { marginLeft:  '20px' };
export default class CheckboxExampleRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.ckRef = React.createRef();
  }
  state = {value:this.props.defaultValue||''}
  callback = this.props.SetContractType||this.props.SetLeverage||this.props.SetCurrency||null
  handleChange = (e, { value }) => this.setState({ value },this.callback( value ))
  clear(){
  	// const values = this.props.values || []
  	// const v = values[0]||''
  	// this.setState({value:v||''},this.ckRef.current.value=v)
  }
  render() {
  	const values = this.props.values || []
  	var MContainer = Segment
	if(this.props.group)  MContainer = Container
  	if(values.length>0){
  		//		          <Label style={{width:'130px',marginLeft:'-9px'}}>{this.props.title}: <b>{"("+this.state.value+")"}</b> : </Label>

	    return (
	      <MContainer style={this.props.style||null}>
		          <Label style={{width:'130px',marginLeft:'-9px'}}>{this.props.title}: </Label>
		          {values.map((v)=><Checkbox
		        	ref={this.ckRef} 
		            style={firstNode}
		            radio
		            label={v}
		            name='checkboxRadioGroup'
		            value={v}
		            checked={this.state.value === v}
		            onChange={this.handleChange}
		          />)}
	      </MContainer>
	    )
  	}
  	else return null
  }
}
