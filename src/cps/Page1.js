import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    func();
  }

  render() {
    return (
      <div>
        <h1>page1</h1>
        <Link to="/page2">跳转到Page2</Link>
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
