import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = 　{
      change: false,
    }
  }

  render() {
    return (
      <div>
        <h1>page2</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    Test
  } = state;
  return {
    Test
  };
};

const {
  func
} = actions;
const mapDispatchToProps = {
  func
};
export default connect(mapStateToProps, mapDispatchToProps)(Page2)
