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
    openedPatientId: 1,
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

  render () {

    return (
      <div className="App">
        <header className="Record-Data-Viewer">
        <PatientsListContainer patients={this.state.patients} changeUserHistoryState={this.changeUserHistoryState} />
          {
            this.state.userHistoryOpen === true ?
              <UserHistoryContainer user={this.state.user} />
            :
            <PatientDataContainer openedPatientId={this.state.openedPatientId} />
          }
        </header>
      </div>
    );

  }

}

export default App;
