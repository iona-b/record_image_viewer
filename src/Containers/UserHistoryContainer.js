import React, { Component } from "react";
import UserHistoryCard from '../Components/UserHistoryCard';

class UserHistoryContainer extends Component {

  createUserHistoryList = () => {
    return this.props.user.userHistories.map(history => {
       return (
          <UserHistoryCard
            key={history.id}
            patientName={history.patient_name}
            action={history.user_action}
          />
       )

     })
  }
  
    render() {
      return (
          <div id="user-history-container">
              <h1>{this.props.user.name}'s User History</h1>
              {this.createUserHistoryList()}
          </div>
      );
    }
  }
  
  export default UserHistoryContainer;