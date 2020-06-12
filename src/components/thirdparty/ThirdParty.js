import React, { PureComponent } from 'react';
import SetCustomFilter from '../admin/setCustomFilter/SetCustomFilter';

import { getComponent } from '../../helpers/helpers';

import './thirdparty-styles.css';

class ThirdParty extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ComponentToRender: SetCustomFilter,
      renderSetCustomFilterResult: false,
      renderViewIndividualReportStudentDetail: false,
      renderViewBatchReport: false,
    }
  }

  handleOnClick = (e) => {
    e.persist();
    this.setState(() => ({
      ComponentToRender: getComponent(e.nativeEvent.target.innerText),
      renderSetCustomFilterResult: false,
      renderViewIndividualReportStudentDetail: false,
      renderViewBatchReport: false,
    }));
  };

  handleOnClickSetCustomFilterResult = () => (
    this.setState(() => ({
      renderSetCustomFilterResult: true,
    }))
  );

  handleOnClickViewIndividualReportStudentDetail = () => (
    this.setState(() => ({
      renderViewIndividualReportStudentDetail: true,
    }))
  );

  handleOnClickViewBatchReport = () => (
    this.setState(() => ({
      renderViewBatchReport: true,
    }))
  );

  render() {

    const Component = this.state.ComponentToRender;

    return (
      <div className='thirdparty--container'>
        <div className='thirdparty--options--container'>
        
        <div class="gslogo">
          <span className="login100-form-title p-b-48">
            <i className="fa fa-graduation-cap fa-lg" style={{fontSize: 44}} aria-hidden="true"></i>
            </span>	&nbsp;&nbsp;
            <div>
              <b style={{fontSize: 26, fontWeight: 'bold', color: 'white',  fontFamily: 'Helvetica'}}>
              GRADSTAT
              </b>
            </div>             
        </div> 
          
          
          <button
            className='thirdparty--options btn btn-dark'
            onClick={this.handleOnClick}
          >
            <b>View Batch Report</b>
          </button>
          <button
            className='thirdparty--options btn btn-dark'
            onClick={this.handleOnClick}
          >
            <b>View Report Of An Individual Student</b>
          </button>
          <button
            className='thirdparty--options btn btn-dark'
            onClick={this.handleOnClick}
          >
            <b>Set Custom Filters</b>
          </button>

        </div>

        <Component
          handleOnClickSetCustomFilterResult={this.handleOnClickSetCustomFilterResult}
          renderSetCustomFilterResult={this.state.renderSetCustomFilterResult}
          handleOnClickViewIndividualReportStudentDetail={this.handleOnClickViewIndividualReportStudentDetail}
          renderViewIndividualReportStudentDetail={this.state.renderViewIndividualReportStudentDetail}
          handleOnClickViewBatchReport={this.handleOnClickViewBatchReport}
          renderViewBatchReport={this.state.renderViewBatchReport}
        />
        <div className='thirdparty--options--container'>
        <button
            className='thirdparty--options thirdparty--logoutbold btn btn-danger'
            onClick={this.props.handleLogOut}
          >
            LogOut as Third Party
          </button>
        </div>
      </div>
    )
  }
}

export default ThirdParty;
