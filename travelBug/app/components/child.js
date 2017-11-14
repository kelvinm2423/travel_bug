import React, {Component} from 'react';
import Grandkid from "./grandchild.js";

export default class child extends Component{


render(){
	return(
		<div>
			<h1> 
			child
			</h1>
			
			<Grandkid joker={this.props.ruby} />
		</div>
		);
	}
}