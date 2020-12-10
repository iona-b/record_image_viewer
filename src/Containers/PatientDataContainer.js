import React, { Component } from "react";
import PatientData from '../Components/PatientData';

class PatientDataContainer extends Component {
  
    render() {

      return (
          <div id="patient-data-container">
            {
              this.props.openedPatient === null
              ?
              <h1>Select a Patient To View</h1>
              :
              <h1>{this.props.openedPatient.name}</h1>
            }

          </div>
      );
    }
  }
  
  export default PatientDataContainer;