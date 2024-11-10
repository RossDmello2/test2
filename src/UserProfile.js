import React, { Component } from 'react';

class UserProfile extends Component {
  static defaultProps = {
    name: "Anonymous",
    age: "Unknown",
    location: "Unknown"
  };

  render() {
    const { name, age, location } = this.props;
    return (
      <div>
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
    );
  }
}

export default UserProfile;