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
    console.log(this.state.selectedPatientId)
  }

  updateOpenedPatientId = () => {
    this.setState({
      openedPatientId: this.state.selectedPatientId
    })
  }

  openPatientData = () => {
    if (this.state.selectedPatientId !== 0) {
      fetch(`http://localhost:3000/patients/${this.state.selectedPatientId}`)
      .then(res => res.json())
      .then(json => {
        this.setState ({
          openedPatient: {
            name: json.name,
            type: json.animal_type,
            age: json.age,
            emailAddress: json.email_address
          }
        })
      })
    }
  }

  closePatientData = () => {
    this.setState ({
      openedPatient: null
    })
  }

  render () {

    return (
      <div className="App">
        <header className="Record-Data-Viewer">
        <PatientsListContainer
            patients={this.state.patients}
            openPatientData={this.openPatientData}
            closePatientData={this.closePatientData}
            selectedPatientId={this.state.selectedPatientId}
            changeUserHistoryState={this.changeUserHistoryState}
            updateSelectedPatientId={this.updateSelectedPatientId}
        />
          {
            this.state.userHistoryOpen === true ?
              <UserHistoryContainer user={this.state.user} />
            :
            <PatientDataContainer
              openedPatient={this.state.openedPatient}
            />
          }
        </header>
      </div>
    );

  }

}

export default App;
