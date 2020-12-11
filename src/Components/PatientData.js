import React, { Component } from "react";

class PatientData extends Component {
  
    render() {

      return (
          <div id="patient-data-container">
                <h1>{this.props.openedPatient.name}</h1>
                <h2>Animal Type: {this.props.openedPatient.type}</h2>
                <h2>Age: {this.props.openedPatient.age}</h2>
                <h2>Email Address: {this.props.openedPatient.emailAddress}</h2>
          </div>
      );
    }
}
  
export default PatientData;