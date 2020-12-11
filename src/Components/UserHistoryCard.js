import React, { Component } from "react";

class UserHistory extends Component {
  
    render() {

      return (
          <div id="user-history">
            <h4>{this.props.patientName}: {this.props.action}</h4>
          </div>
      );
    }
}
  
export default UserHistory;