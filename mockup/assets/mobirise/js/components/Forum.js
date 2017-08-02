import React from 'react';
import Axios from 'axios';

class Forum extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: ''
 }
}
  render() {
    return (    <div>
                  <form type="text" action="/post-feedback">
                    <label for="name">Name</label>
                    <input type="text" value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})} id="name" name="name"/>
                    <label for="comment">comment</label>
                    <input type="text" value={this.state.comment} onChange={(event)=>this.setState({comment: event.target.value})} id="comment" name="comment"/>
                    <br/>
                    <input type="submit" value="Submit" id="newSubmit" onClick={this.submit.bind(this)}/>
                  </form>
                </div>
            );
  }

  submit(event) {
    event.preventDefault();
    // axios.post('/whatever'.then)
    var name = this.state.name;
    var comment = this.state.comment;

    Axios({
        method: 'post',
        url: '/post-feedback',
        data: {
        name: name,
        comment: comment,
        }, 
        success: function(res){
      console.log(res);    if (res.success) {
            window.location = res.redirect;
          }
        }
    });

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