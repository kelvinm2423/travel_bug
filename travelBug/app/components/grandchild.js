import React, {Component} from "react";

export default class grandkid extends Component{
	render(){
		return(
<div>
<h1> I am a grandchild </h1>
<button onClick={this.props.joker}> Click me please </button>
</div>
			);
	}
}