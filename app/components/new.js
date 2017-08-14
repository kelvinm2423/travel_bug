import React, {Component} from 'react';

class Child extends Component {
 constructor(props){
super(props);
  this.state = {
firstName: '',
lastName: '',
userName: '',
passWord: ''
  }

 }

  render() {
    return (<div>
      <h1> Create an account </h1>
<form type="text">
                        First Name:
                        <br/>
                        <input type="text" value={this.state.firstName} onChange={(event)=>this.setState({firstName: event.target.value})} id="first" name="first"/>
                        <br/> Last Name:
                        <br/>
                        <input type="text" value={this.state.lastName} onChange={(event)=>this.setState({lastName: event.target.value})} id="last" name="last"/>
                        <br/> Make a UserName:
                        <br/>
                        <input type="text" value={this.state.userName} onChange={(event)=>this.setState({userName: event.target.value})} id="userName" name="userName"/>
                        <br/> Make a Password:
                        <br/>
                        <input type="text" value={this.state.passWord} onChange={(event)=>this.setState({passWord: event.target.value})} id="passWord" name="passWord"/>
                      
                        <input type="submit" value="Submit" id="newSubmit" onClick={this.submit.bind(this)}/>
                        <br/>
                    </form>
      </div>);
  }
  submit(event) {
    event.preventDefault();
var first = this.state.firstName;
var last = this.state.lastName;
var user = this.state.userName;
var password = this.state.passWord;
console.log(first);
console.log(last);
console.log(user);
console.log(password);
sessionStorage.setItem('userName', user);

fetch('/Users', {
  method: 'POST',
   mode: 'cors',
   cache: 'default',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
 body: JSON.stringify({
    First: first,
    Last: last,
    Username: user,
    Password: password

  })
}).then(() => {this.props.history.push('/welcome')});

  }

};

export default Child;

