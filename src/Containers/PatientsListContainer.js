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
          <div id="patients-list-container">
            <h1>Patients List</h1>
            {this.createPatientsList()}
            <button className="button" onClick={this.props.openPatientData} >Open Patient Data</button>
            <button className="button" onClick={this.props.closePatientData}>Close Patient Data</button>
            <button className="button" onClick={this.props.changeUserHistoryState}>Open User History</button>
          </div>
      );
    }
  }
  
  export default PatientsListContainer;