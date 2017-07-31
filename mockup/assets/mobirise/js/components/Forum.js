import React, { Component } from 'react';
    // state = {
    //     salutation: 'Hello World!'
    // }


    // /**
    //  * ==================================================
    //  * Main lifecycle functions
    //  * ==================================================
    //  */


    // componentDidMount() {
    //     /**
    //      * Your component is out there, mounted and ready to be used
    //      * This function is useful to:
    //      * * Fetch data from a web API
    //      */
    // }

    // *
    //  * Other lifecycle events
    //  * * componentWillReceiveProps
    //  * * shouldComponentUpdate
    //  * * componentWillUpdate
    //  * * componentDidUpdate
    //  * * componentWillUnmount
     


    // /**
    //  * ==================================================
    //  * ==================================================
    //  * ==================================================
    //  */

    // /**
    //  * ==================================================
    //  * Custom functions
    //  * ==================================================
    //  */
    // sayHi() {
    //     alert(this.state.salutation);
    // }
    // /**
    //  * ==================================================
    //  * ==================================================
    //  * ==================================================
    //  */

// --------------------------------------------------------------------
// class Forum extends Component {
//     // @todo: set your inital state
//    constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//     render() {
//         return (
//             <div>
//                 {
//                     /*YOUR HTML GOES HERE e.g.*/
//                     // to read from the current state use: this.state
//                     // to read from props use: this.props

//                 <form method="POST" action="/post-feedback" onSubmit={this.handleSubmit}>
//                     <label> Name:
//                         <input type="text" value={this.state.value} onChange={this.handleChange} />
//                     </label>
//                         <input type="submit" value="Submit" />
//                     <label> Comment:
//                         <input type="text" value={this.state.value} onChange={this.handleChange} />
//                     </label>
//                         <input type="submit" value="Submit" />
//                 </form>
//                 }
//             </div>
//         );
//     }
// }
//----------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// //creating a react component
var ContactItem = React.createClass({
  //onchange event
  propTypes: {
    name: React.PropTypes.string.isRequired,
    comment: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('li', {className: 'ContactItem'},
        React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
        React.createElement('div', {className: 'ContactItem-comment'}, this.props.comment)
      )
    );
  },
});

var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },

  render: function() {
    var oldContact = this.props.value;
    var onChange = this.props.onChange;
    
    return (
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          value: this.props.value.name,
          onChange: function(e) {
            onChange(Object.assign({}, oldContact, {name: e.target.value}));
          },
        }),
        React.createElement('textarea', {
          placeholder: 'Comment',
          value: this.props.value.comment,
          onChange: function(e) {
            onChange(Object.assign({}, oldContact, {comment: e.target.value}));
          },
        }),
        React.createElement('button', {type: 'submit'}, "Add Comment")
      )
    );
  },
});

var ContactView = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
  },

  render: function() {
    var contactItemElements = this.props.contacts
      .filter(function(contact) { return contact.email; })
      .map(function(contact) { return React.createElement(ContactItem, contact); });

    return (
      React.createElement('div', {className: 'ContactView'},
        React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
        React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
        React.createElement(ContactForm, {
          value: this.props.newContact,
          onChange: function(contact) { console.log(contact); },
        })
      )
    );
  },
});


/*
 * Model
 */

var newContact = {name: "", comment: ""};


/*
 * Entry point
 */

ReactDOM.render(
  React.createElement(ContactView, {
    newContact: newContact,
  }),
  document.getElementById('react-app')
);
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