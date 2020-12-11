import { Component } from 'react';
import './App.css';
import PatientsListContainer from './Containers/PatientsListContainer';
import UserHistoryContainer from './Containers/UserHistoryContainer';
import PatientDataContainer from './Containers/PatientDataContainer';

class App extends Component {

  state = {
    user: {
      id: 1,
      name: "",
      userHistories: []
    },
    patients: [],
    selectedPatientId: 0,
    openedPatientId: 0,
    openedPatient: null,
    userHistoryOpen: false
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchPatients();
  }

  fetchUser = () => {
    fetch('http://localhost:3000/users/1')
    .then(res => res.json())
    .then(json => {
      this.setState ({
        user: {
          id: json.id,
          name: json.name,
          userHistories: json.user_histories
        }
      })
    })
  }

  fetchPatients = () => {
    fetch('http://localhost:3000/patients')
    .then(res => res.json())
    .then(json => {
      this.setState ({
        patients: json
      })
    })
  }

  changeUserHistoryState = () => {
    this.setState ({
      userHistoryOpen: !this.state.userHistoryOpen
    })
  }

  updateSelectedPatientId = (event) => {
    this.setState({
      selectedPatientId: event.target.id
    })
  }

  updateOpenedPatientId = () => {
    this.setState({
      openedPatientId: this.state.selectedPatientId
    })
  }

  openPatientData = () => {

    this.setState ({
      userHistoryOpen: false
    })

    if (this.state.selectedPatientId !== 0) {
      fetch(`http://localhost:3000/patients/${this.state.selectedPatientId}`)
      .then(res => res.json())
      .then(json => {
        this.setState ({
          openedPatient: {
            name: json.name,
            image: json.image
          }
        })
      })

      let data = {
        user_id: 1,
        patient_id: this.state.selectedPatientId,
        user_action: "Opened"
      }

      fetch(`http://localhost:3000/user_histories`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
    }

  }

  closePatientData = () => {

    this.setState ({
      openedPatient: null
    })

    let data = {
      user_id: 1,
      patient_id: this.state.selectedPatientId,
      user_action: "Closed"
    }

    fetch(`http://localhost:3000/user_histories`,{
      method:"POST",
      headers:{
          'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

  render () {

    return (
      <div className="App">
        <header id="app-header">Patient Image Viewer</header>
        <PatientsListContainer
            patients={this.state.patients}
            openPatientData={this.openPatientData}
            closePatientData={this.closePatientData}
            selectedPatientId={this.state.selectedPatientId}
            userHistoryOpen={this.state.userHistoryOpen}
            changeUserHistoryState={this.changeUserHistoryState}
            updateSelectedPatientId={this.updateSelectedPatientId}
        />
          {
            this.state.userHistoryOpen === true ?
              <UserHistoryContainer
                user={this.state.user}
                fetchUser={this.fetchUser}
                userHistoryOpen={this.state.userHistoryOpen}
              />
            :
            <PatientDataContainer
              openedPatient={this.state.openedPatient}
            />
          }
      </div>
    );

  }

}

export default App;
