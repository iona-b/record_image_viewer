import React, { Component } from "react";

class PatientsList extends Component {
  
    render() {
      return (
          <div className={this.props.selectedPatientId == this.props.patient.id ? "patients-list-card active" : "patients-list-card"}
            id={this.props.patient.id}
            onClick={this.props.updateSelectedPatientId}
          >
            {this.props.patient.name}
          </div>
      );
    }
  }
  
  export default PatientsList;