import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { connect } from "react-redux"
import { getRecord } from '../../actions/appActions'

class App extends Component {
  componentDidMount() {
    this.props.getRecord()
  }

  render() {
    console.log(this.props.recordList)
    return (
      <div className="App">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">Name</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">City</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">State</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">Picure</div>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">Name</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">City</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">State</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">Picure</div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recordList:state.AppReducer.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecord: () => dispatch(getRecord())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
