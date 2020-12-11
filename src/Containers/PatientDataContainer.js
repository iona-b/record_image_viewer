import React, { Component } from "react";
import PatientData from '../Components/PatientData';

class PatientDataContainer extends Component {
  
    render() {

      return (
          <div className="containers" id="patient-data-container">
            {
              this.props.openedPatient === null
              ?
              <h2>Select a Patient</h2>
              :
              <PatientData openedPatient={this.props.openedPatient} />
            }

          </div>
      );
    }
  }
  
  export default PatientDataContainer;