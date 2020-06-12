import React, { Component } from 'react';

import RenderFilteredStudents from '../../renderFilteredStudents/RenderFilteredStudents';

import './setCustomFilter-styles.css';
import {filterBySubject} from '../../../data/admin/adminHelpers';
import cancelbutton from './redcrossbutton.png';
import {
  getCreditRequirements,
  getCreditRequirementsByBatch,
  getStudentDetails
} from '../../../data/student/studentHelpers';
import RenderIndividualStudentReport from '../../renderIndividualStudentReport/RenderIndividualStudentReport';
class SetCustomFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coursesSelected: [],
      batch: '',
      CPI: '',
      defaultValueForCourses: '',
      filteredStudents: [],
      renderResult: false,
      renderStudent: false,
      studentDetail: '',
      creditRequirementDetailsForStudent: '',
      creditRequirementDetailsOfBatch: '',
      setcustomfilterbuttonclicks:false,
    }
  }

  addSelectedCourse = (e) => {
    e.persist();
    if(e.nativeEvent.key === 'Enter') {
      this.setState((prevState) => ({
        coursesSelected: [...prevState.coursesSelected, e.nativeEvent.target.value],
        defaultValueForCourses: '',
      }))
    }
  };

  showStudentDetail = (id) => {
    this.setState(() => ({
      renderStudent: true,
      studentDetail: getStudentDetails(id),
      creditRequirementDetailsForStudent: getCreditRequirements(id),
    }))
  };

  componentWillReceiveProps(nextProps) {
    if(!nextProps.renderSetCustomFilterResult) {
        this.setState(() => ({
            coursesSelected: [],
            batch: '',
            CPI: '',
            defaultValueForCourses: '',
            filteredStudents: [],
            renderResult: false,
            renderStudent: false,
            studentDetail: '',
            creditRequirementDetailsForStudent: '',
            creditRequirementDetailsOfBatch: '',
            setcustomfilterbuttonclicks:false,
          })
        )
    }
  }

  render() {
    return (
      <>
        {!this.state.renderResult || !this.props.renderSetCustomFilterResult ?
          <div className='admin--set_custom_filter--container'>
            <div className='admin--set_custom_filter--wrapper'>
              <div className='admin--set_custom_filter--batch' style={{fontWeight: 'bold'}}>&nbsp;&nbsp;&nbsp;
            <span>
              Batch : <br/>
              <span style={{
                      fontSize: '12px',
                  }}> *Mandatory field
                       </span>
            </span>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <div class="form-group">
                      <select class="form-control" id="exampleFormControlSelect1"value={this.state.batch}
                        onChange={(e) => {
                          e.persist();
                          this.setState(() => ({batch: e.nativeEvent.target.value}))
                        }}>
                  <option>SELECT</option>
                  <option>BTech 2016</option>
                  <option>BTech 2017</option>
                  <option>BTech 2018</option>
                  <option>BTech 2019</option>
                  <option>MTech 2018</option>
                  <option>MTech 2019</option>
                  <option>MScIT 2018</option>
                  <option>MScIT 2019</option>
                </select>
              </div>
            </div>    
            

                  {/*</select>
            <input
              type="text"
              value={this.state.batch}
              onChange={(e) => {
                e.persist();
                this.setState(() => ({batch: e.nativeEvent.target.value}))
              }}
            />*/}

            <div className='admin--set_custom_filter--CPI'>
            <span className='admin--set_custom_filter--CPI--text'>
                <span style={{fontWeight: 'bold'}}>CPI Criteria :         </span>
              </span>
                
              
                  &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="form-group">
              <input type="text" className="form-control admin--set_custom_filter--CPI--input" id="exampleFormControlInput1" 
              placeholder="Leave blank if none" value={this.state.CPI}
              onChange={(e) => {
                e.persist();
                this.setState(() => ({CPI: e.nativeEvent.target.value}))
              }}
            />
            </div>
              </div>


              <div className="admin--courses">
              <span>
                <span style={{fontWeight: 'bold'}}>Courses Taken :             </span>
              </span>

                  &nbsp;
                  &nbsp;
              <div className="form-group">
                  <input type="text" className="form-control"
                  placeholder="Leave blank if none"
                  value={this.state.defaultValueForCourses}
                  onChange={(e) => {
                    e.persist();
                    this.setState(() => ({defaultValueForCourses: e.nativeEvent.target.value}))
                  }}
                  onKeyPress={this.addSelectedCourse}
                />
              </div>
              </div> <br/><br/>
              <div>
                <div>
                  <ul className="admin--set_custom_filter--selectedcourses">
                    {this.state.coursesSelected.map((course, i) => (
                      <li
                        onClick={() => {
                          this.setState((prevState) => ({
                            coursesSelected: prevState.coursesSelected.filter((courses, index) => index !== i),
                          }));
                        }}
                      >
                        {course} <span><img src={cancelbutton} width="15px" height="15px"/></span>

                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="admin--set_custom_filter--submitbutton"
                      onClick={() => {
                        this.setState(() => ({
                          filteredStudents: filterBySubject(this.state.batch, this.state.coursesSelected, this.state.CPI),
                          renderResult: !!filterBySubject(this.state.batch, this.state.coursesSelected, this.state.CPI).length,
                          creditRequirementDetailsOfBatch: getCreditRequirementsByBatch(this.state.batch),
                            setcustomfilterbuttonclicks: true,
                        }));
                        this.props.handleOnClickSetCustomFilterResult();
                      }
                      }
              >
                <b>Submit</b>
              </button>
              <div className='error'>
                {(this.state.setcustomfilterbuttonclicks)?<span className={'denied'}>No student satisfies the  given criteria!</span>:<span> </span>}
              </div>
            </div>
            
          </div> : !this.state.renderStudent ?
          <div className='admin--set_custom_filter--detail_component'>
            <RenderFilteredStudents studentDetails={this.state.filteredStudents}
                                    creditRequirementDetails={this.state.creditRequirementDetailsOfBatch}
                                    onStudentClick={this.showStudentDetail}/>
          </div> : <div className='admin--view_individual_report--detail_component'>
          <RenderIndividualStudentReport
          studentDetail={this.state.studentDetail}
          creditRequirementDetails={this.state.creditRequirementDetailsForStudent}
          />
          </div>
        }
      </>
    )
  }
}

export default SetCustomFilter;
