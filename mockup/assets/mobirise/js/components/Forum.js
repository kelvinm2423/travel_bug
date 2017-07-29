import React, { Component } from 'react';

class Forum extends Component {
    // @todo: set your inital state
    state = {
        salutation: 'Hello World!'
    }


    /**
     * ==================================================
     * Main lifecycle functions
     * ==================================================
     */


    componentDidMount() {
        /**
         * Your component is out there, mounted and ready to be used
         * This function is useful to:
         * * Fetch data from a web API
         */
    }

    /**
     * Other lifecycle events
     * * componentWillReceiveProps
     * * shouldComponentUpdate
     * * componentWillUpdate
     * * componentDidUpdate
     * * componentWillUnmount
     */


    /**
     * ==================================================
     * ==================================================
     * ==================================================
     */

    /**
     * ==================================================
     * Custom functions
     * ==================================================
     */
    sayHi() {
        alert(this.state.salutation);
    }
    /**
     * ==================================================
     * ==================================================
     * ==================================================
     */


    render() {
        return (
            <div>
                {
                    /*YOUR HTML GOES HERE e.g.*/
                    // to read from the current state use: this.state
                    // to read from props use: this.props
                }
                <input
                    type="text"
                    value={this.state.salutation}
                    onChange={event => this.setState({ salutation: event.target.value })}
                />
                <label style={styles.successText}>{this.state.salutation}</label>
                <button onClick={this.sayHi.bind(this)}>Say hi!</button>
            </div>
        );
    }
}

const styles = {
    // STYLE RULES GO HERE e.g.
    successText: {
        fontSize: 25,
        color: 'green'
    }
}

export default Forum;