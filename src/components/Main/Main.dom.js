import React, { Component } from 'react';

class Main extends Component {
    // @todo: set your inital state
    state = {};

    render() {
        return (
            <div>
                {
                    /*YOUR HTML GOES HERE e.g.*/
                    // to read from the current state use: this.state
                    // to read from props use: this.props
                }
                <label style={styles.successText}>Success :)</label>
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

export default Main;