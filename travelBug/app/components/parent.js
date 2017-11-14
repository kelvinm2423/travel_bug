import React, {Component} from 'react';
import Child from './child.js';


export default class parent extends Component {
  
  dosomething(){

alert("its working!");
  }

  render() {
    return (
	<div>
<h1> hi there </h1>

<Child ruby={this.dosomething} />
</div>
    );
  }
}
