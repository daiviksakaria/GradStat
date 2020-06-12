import React, { PureComponent } from 'react';
import RenderIndividualStudentReport from '../renderIndividualStudentReport/RenderIndividualStudentReport';

import './student-styles.css';
import {getCreditRequirements, getStudentDetails} from '../../data/student/studentHelpers';

class Student extends PureComponent {
  render() {
    return (
      <div className='student--container'>
        <div className='student--options--container'>

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

          <div className='student--nohover' > 
          &nbsp;
          <div className='student--nohover--icon'>{this.props.id} &nbsp; <i className="fa fa-user fa-2x" aria-hidden="true"></i>
        </div>
        </div>
          

          

        </div>
      
        <div className='student--view_individual_report--detail_component'>
          <RenderIndividualStudentReport studentDetail={getStudentDetails(this.props.id)}
                                         creditRequirementDetails={getCreditRequirements(this.props.id)}
          />
        </div>

        <div className='student--options--container'>
           <button
            className='student--options student--logoutbold btn btn-danger'
            onClick={this.props.handleLogOut}
          >
            LogOut
          </button>    </div>
      </div>
    )
  }
}

export default Student;
