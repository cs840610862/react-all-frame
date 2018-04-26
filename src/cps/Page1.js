import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state =　{
      change: false,
    }
  }
  componentDidMount() {
    const { func } = this.props;
    debugger
    func();
  }

  render() {
    return (
      <div>
        <h1>page1</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(Page1)
