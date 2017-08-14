var React = require("react");


var Child = React.createClass({
  render: function() {
    return (<div>
<form type="text">
                       Username:
                        <br/>
                         <input type="text" id="userNameExist" name="userNameExist"/>
                        <br/> Password:
                        <br/>
                          <input type="text" id="passWord" name="passWord"/>
                        <input type="submit" value="Submit" id="oldSubmit" onClick={this.oldSubmit}/>
                        <br/>
                    </form>
    	</div>);
  },
	oldSubmit: function(){

var dog= "ruby";
console.log("You clicked " + dog);

	}
});

var ExistingUser = React.createClass({
  getInitialState: function () {
    return { childVisible: false };
  },
  
  render: function() {
    return(
      <div>
        <button onClick={this.onClick}>
         Existing User
        </button>
        {
          this.state.childVisible
            ? <Child />
            : null
        }
      </div>
    )
  },
  
  onClick: function() {
    this.setState({childVisible: !this.state.childVisible});
  }
});
 
 module.exports = ExistingUser;
// React.render(<ShowHide />, document.getElementById('container'));
