import React, { Component } from "react";
import PatientsListCard from '../Components/PatientsListCard';

class PatientsListContainer extends Component {

    createPatientsList = () => {
        return this.props.patients.map(patient => {
           return (
            <PatientsListCard
              key={patient.id}
              patient={patient}
              selectedPatientId={this.props.selectedPatientId}
              updateSelectedPatientId={this.props.updateSelectedPatientId}
            />
           )

         })
    }
  
    render() {
      return (
          <div className="containers" id="patients-list-container">
            <h2>Patients List</h2>
            {this.createPatientsList()}
            <div id="buttons-div">
              <button className="buttons" onClick={this.props.openPatientData} >Open Patient Data</button>
              <button className="buttons" onClick={this.props.closePatientData}>Close Patient Data</button>
              <button className="buttons" onClick={this.props.changeUserHistoryState} >
                {this.props.userHistoryOpen ? "Close User History" : "Open User History"}
              </button>
            </div>
          </div>
      );
    }
  }
  
  export default PatientsListContainer;