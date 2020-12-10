import React, { Component } from "react";

class PatientsList extends Component {
  
    render() {
      return (
          <div id="patients-list">
            {this.props.patient.name}
          </div>
      );
    }
  }
  
  export default PatientsList;