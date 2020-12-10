import React, { Component } from "react";
import PatientsListCard from '../Components/PatientsListCard';

class PatientsListContainer extends Component {

    createPatientsList = () => {
        return this.props.patients.map(patient => {
           return <PatientsListCard key={patient.id} patient={patient} className="Patients-List-Card"/>
         })
    }
  
    render() {
      return (
          <div id="patients-list-container">
            <h1>Patients List</h1>
            {this.createPatientsList()}
            <button onClick={this.props.changeUserHistoryState}>Open User History</button>
          </div>
      );
    }
  }
  
  export default PatientsListContainer;