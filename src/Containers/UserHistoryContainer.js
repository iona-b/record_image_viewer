import React, { Component } from "react";
import UserHistoryCard from '../Components/UserHistoryCard';

class UserHistoryContainer extends Component {

  componentDidMount() {
    this.props.fetchUser();
  };

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
          <div className="containers" id="user-history-container">
              <h2>{this.props.user.name}'s User History</h2>
              {this.createUserHistoryList()}
          </div>
      );
    }
  }
  
  export default UserHistoryContainer;