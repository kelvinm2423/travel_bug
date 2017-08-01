import React from 'react';
import Axios from 'axios';

class Child extends React.Component {
 constructor(props){
super(props);
  this.state = {
name: '',
comment: ''
  }

 }

  render() {
    return (<div>
<form type="text" action="/post-feedback">
                        Name:
                        <br/>
                        <input type="text" value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})} id="name" name="name"/>
                        <br/> Comment:
                        <br/>
                        <input type="text" value={this.state.comment} onChange={(event)=>this.setState({comment: event.target.value})} id="comment" name="comment"/>
                        <br/>
                      
                        <input type="submit" value="Submit" id="newSubmit" onClick={this.submit.bind(this)}/>
                        <br/>
                    </form>
      </div>);
  }
  submit(event) {
    // axios.post('/whatever'.then)
var name = this.state.name;
var comment = this.state.comment;

axios({
  event.preventDefault;
  method: 'post',
  url: '/post-feedback',
  data: {
    name: name,
    comment: comment
  }
});
     // console.log(dog);
// console.log(this.state.firstName);

  }

};
 
//-------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
const styles = {
    // STYLE RULES GO HERE e.g.
    successText: {
        fontSize: 25,
        color: 'green'
    }
}

export default Forum;