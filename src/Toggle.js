import React, { Component } from 'react';

class Toggle extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleToggle}>Click me</button>
      </div>
    );
  }
}

export default Toggle;