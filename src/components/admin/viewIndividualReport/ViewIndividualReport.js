import React, { PureComponent } from 'react';
import {getStudentDetails} from '../../../data/student/studentHelpers';
import {getCreditRequirements} from '../../../data/student/studentHelpers';

import './viewIndividualReport-styles.css';

import RenderIndividualStudentReport from "../../renderIndividualStudentReport/RenderIndividualStudentReport";

class ViewIndividualReport extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      batch: '',
      studentId: '',
      studentDetail: '',
      creditRequirementDetails: {},
      renderStudentDetail: false,
      isGone:false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.renderViewIndividualReportStudentDetail) {
      this.setState(() => ({
        batch: '',
        studentId: '',
        studentDetail: '',
        creditRequirementDetails: {},
        renderStudentDetail: false,
        isGone:false,
      }))
    }
  }

  render() {

    return ( !this.state.renderStudentDetail ?
      <div className='admin--view_individual_report--container'>
        <div className='admin--view_individual_report--batch'>
          <span className='admin--view_individual_report--text'>
        <span style={{fontWeight: 'bold'}}>StudentID  :  </span>
        </span>
        &nbsp;
        &nbsp;

        <div class="form-group">
              <input type="text" className="form-control admin--view_indvidual_report--detail_component" id="exampleFormControlInput1" 
              placeholder="Enter StudentID" value={this.state.studentId}
              onChange={(e) => {
                e.persist();
                this.setState(() => ({studentId: e.nativeEvent.target.value}))
              }}
            />
            </div>
          </div>
      
        <button
            className="admin--view_individual_report--submitbutton"  onClick={() => {
              this.setState(() => ({
            studentDetail: getStudentDetails(this.state.studentId),
            creditRequirementDetails:getCreditRequirements(this.state.studentId),
            renderStudentDetail: typeof getStudentDetails(this.state.studentId) === 'object',
                  isGone:true

          }));
              this.props.handleOnClickViewIndividualReportStudentDetail();
        }}
        >
          Submit
        </button>
        <br/><br/>
        <div className='error'>
          {(this.state.isGone)?<span className={'denied'}>No student with entered ID exist in database!</span>:<span></span>}
        </div>
      </div> :
      <div className='admin--view_individual_report--detail_component'>

          <RenderIndividualStudentReport studentDetail={this.state.studentDetail} creditRequirementDetails={this.state.creditRequirementDetails}/>

      </div>
    )
  }
}

export default ViewIndividualReport;
