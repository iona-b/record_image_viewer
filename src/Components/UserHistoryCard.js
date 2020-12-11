import React, { Component } from "react";

class UserHistory extends Component {
  
    render() {

      return (
          <div id="user-history">
            <h3>{this.props.patientName}: {this.props.action}</h3>
          </div>
      );
    }
}
  
export default UserHistory;