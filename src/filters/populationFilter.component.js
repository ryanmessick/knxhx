import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// import * as ServicesActions from '../services.actions';
import { COL_SPAN } from '../config/constants/serviceFiltersColumnSpan.constants';

const Option = Select.Option;

class PopulationFilter extends Component {

  componentDidMount() {
  
  }

  onChange = (value) => {
    // this.props.servicesActions.setPopulationFilters(value);
  }

  render() {
    return (
        <Col span={COL_SPAN}>
      <div className="service-selected-filter">
      <div>Population</div>
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Different shelters house different communities. What community do you fit into?"
    defaultValue={[]}
    onChange={(v) => this.onChange(v)}
  >
    <Option value="foster">Foster or Former Foster Youth</Option>
    <Option value="lgbtq">LGBTQ</Option>
    <Option value="parenting">Parenting or Pregnant</Option>
    <Option value="probation">Probation/Parole/Re-entering</Option>
  </Select>
      </div>
      
</Col>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state tops...')
  return {
      paging: state.paging,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      // servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PopulationFilter));
