import React, { Component } from "react";

class PatientData extends Component {
  
    render() {

      return (
          <div id="patient-data">
                <h2>{this.props.openedPatient.name}</h2>
                <img src={this.props.openedPatient.image} className="images" />
          </div>
      );
    }
}
  
export default PatientData;