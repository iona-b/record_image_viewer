import React, { Component } from "react";

class PatientData extends Component {
  
    render() {

      return (
          <div id="patient-data">
                <h2>{this.props.openedPatient.name}</h2>
                <h3>Animal Type: {this.props.openedPatient.type}</h3>
                <h3>Age: {this.props.openedPatient.age}</h3>
                <h3>Email Address: {this.props.openedPatient.emailAddress}</h3>
          </div>
      );
    }
}
  
export default PatientData;