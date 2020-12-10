import React, { Component } from "react";
import PatientData from '../Components/PatientData';

class PatientDataContainer extends Component {

  state = {
    openedPatient: {
      id: 1,
      name: "",
      type: "",
      age: 0,
      email_address: ""
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/patients/${this.props.openedPatientId}`)
    .then(res => res.json())
    .then(json => {
      this.setState ({
        openedPatient: {
          name: json.name,
          type: json.animal_type,
          age: json.age,
          email_address: json.email_address
        }
      })
    })
  }
  
    render() {
      return (
          <div id="patient-data-container">
              <h1>{this.state.openedPatient.name}</h1>
          </div>
      );
    }
  }
  
  export default PatientDataContainer;