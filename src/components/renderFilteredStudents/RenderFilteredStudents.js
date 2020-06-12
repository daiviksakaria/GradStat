import React, { PureComponent } from 'react';
import './RenderFilteredStudents.css';

class RenderFilteredStudents extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    console.log(this.props),

      <table className="admin--renderfilteredstudents_table" style={{fontWeight: 'bold'}}>
        <thead>
        <tr className="admin--renderfilteredstudents_table_thead" style={{backgroundColor:'rgb(31,121,121)',color:'#FDFDFE',fontWeight:'normal'}}>
          <th>Student ID</th>
          <th>Name</th>
          <th>Total Credits <br/>Earned
            <br/>(Required {this.props.creditRequirementDetails['total credits']})</th>
          <th>CPI</th>
          <th>Active <br/>Backlog</th>
            <th>Qualified to <br/>get a <br/>Degree?</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.studentDetails.map(studentDetail => (
              <>

              <tr onClick={() => this.props.onStudentClick(studentDetail.id)}>
                  <td>{` ${studentDetail.id}`}</td>
                  <td>{` ${studentDetail.name}`}</td>
                  <td>{`${studentDetail['total credits']}`}</td>
                  <td>{` ${studentDetail.cpi}`}</td>
                  <td className={` ${studentDetail['active backlog'] ? 'denied' : 'process'}`}>{` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}</td>
                  <td>{((studentDetail['tech elective'] >= this.props.creditRequirementDetails['tech elective']) &&
                      (studentDetail['ict elective'] >= this.props.creditRequirementDetails['ict elective']) &&
                      (studentDetail['open elective'] >= this.props.creditRequirementDetails['open elective']) &&
                      (studentDetail['total credits'] >= this.props.creditRequirementDetails['total credits']) &&
                      (studentDetail['cpi'] >= this.props.creditRequirementDetails['cpi']) &&
                      (studentDetail['active backlog'] === false)) ?
                      <div style={{color: 'green', fontWeight: 'bold', textAlign: 'left'}}>Yes </div> :
                      <div style={{color: 'red', fontWeight: 'bold',textAlign: 'left'}}> No</div>}</td>
        </tr>
              </>
          ))
        }
        </tbody>
      </table>

    )
  }
}

export default RenderFilteredStudents;
