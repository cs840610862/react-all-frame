import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../actions';

class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = 　{
      change: false,
    }
  }
  componentDidMount() {
    const { getXhrReq } = this.props;
    getXhrReq();
  }

  render() {
    const { reqData } = this.props;
    return (
      <div>
        <h1>page2</h1>
        <h2>reqData：{JSON.stringify(reqData)}</h2>
        <Link to="/page1">go to page1</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    Test,
    reqData,
  } = state;
  return {
    Test,
    reqData,
  };
};

const {
  func,
  getXhrReq,
} = actions;
const mapDispatchToProps = {
  func,
  getXhrReq,
};
export default connect(mapStateToProps, mapDispatchToProps)(Page2)
