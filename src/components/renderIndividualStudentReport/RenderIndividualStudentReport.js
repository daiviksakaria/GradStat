import React, {PureComponent} from 'react';
import './renderIndividualStudentReport-styles.css';
import redcross from './redcrossbutton.jpg';
import greentick from './greentick.jpg'

class RenderIndividualStudentReport extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {studentDetail} = this.props;
    return (


        <div className={'main-container'}>
          
            <span><h4 style={{marginBottom:'1vh', marginTop: '30px', color: '#000000', fontWeight: 'bold'}}> Name: {studentDetail.name}</h4></span>
            {/*<br/>*/}
            <span><h4 style={{marginBottom:'2vh', color: '#000000', fontWeight: 'bold'}}> StudentID: {studentDetail.id}</h4></span>
            <br/>
            <div className={'flex-container'}>
             
              <div style={{flex: '3'}}>
                CPI - {studentDetail.cpi}/10 <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['cpi'] >= this.props.creditRequirementDetails['cpi']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2vw', height: '2vw'}} alt={'No'}/>}

              </div>
            </div>


            <div className={'flex-container'}>
              
              <div style={{flex: '3'}}>
                {/*CPI - {` ${studentDetail.cpi}`} <br/>*/}
                Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['active backlog'] === false) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2vw', height: '2vw'}} alt={'No'}/>}

              </div>
            </div>

            <div className={'flex-container'}>
             
              <div style={{flex: '3'}}>
                Total Credits Earned - {studentDetail['total credits']}/{this.props.creditRequirementDetails['total credits']} <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['total credits'] >= this.props.creditRequirementDetails['total credits']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2vw', height: '2vw'}} alt={'No'}/>}

              </div>
            </div>

            <div className={'flex-container'}>
              
              <div style={{flex: '3'}}>
                ICT Elective Credits - {studentDetail['ict elective']}/{this.props.creditRequirementDetails['ict elective']}<br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['ict elective'] >= this.props.creditRequirementDetails['ict elective']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2vw', height: '2vw'}} alt={'No'}/>}

              </div>
            </div>


            <div className={'flex-container'}>
             
              <div style={{flex: '3'}}>
                Technical Elective Credits - {studentDetail['tech elective']}/{this.props.creditRequirementDetails['tech elective']} <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['tech elective'] >= this.props.creditRequirementDetails['tech elective']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2vw', height: '2vw'}} alt={'No'}/>}
              </div>
            </div>

            <div className={'flex-container'}>
              
               
              <div style={{flex: '3'}}>
                Open Elective Credits - {studentDetail['open elective']}/{this.props.creditRequirementDetails['open elective']} <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['open elective'] >= this.props.creditRequirementDetails['open elective']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2vw', height: '2vw'}} alt={'No'}/>}

              </div>
            </div>
            <br/>
            <div>

              {((studentDetail['tech elective'] >= this.props.creditRequirementDetails['tech elective']) &&
                (studentDetail['ict elective'] >= this.props.creditRequirementDetails['ict elective']) &&
                (studentDetail['open elective'] >= this.props.creditRequirementDetails['open elective']) &&
                (studentDetail['total credits'] >= this.props.creditRequirementDetails['total credits']) &&
                (studentDetail['cpi'] >= this.props.creditRequirementDetails['cpi']) &&
                (studentDetail['active backlog'] === false)) ?
                <div style={{color: 'green', fontWeight: 'bold', textAlign: 'center',marginBottom: '20px', marginLeft: '-200px'}}>Eligible for Degree!</div> :
                <div style={{color: 'red', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', marginLeft: '-200px'}}>NOT eligible for Degree!</div>}
            </div>

            <div>

              {((studentDetail['tech elective'] >= this.props.creditRequirementDetails['tech elective']) &&
                (studentDetail['ict elective'] >= this.props.creditRequirementDetails['ict elective']) &&
                (studentDetail['open elective'] >= this.props.creditRequirementDetails['open elective']) &&
                (studentDetail['total credits'] >= this.props.creditRequirementDetails['total credits']) &&
                (studentDetail['cpi'] >= this.props.creditRequirementDetails['cpi']) &&
                (studentDetail['active backlog'] === false)) ?
                <div style={{color: 'green', fontWeight: 'bold', textAlign: 'center',marginBottom: '20px', marginLeft: '-200px'}}>BEST OF LUCK!
                </div> :
                
                <div className={'flex-container'}>
                  <div style={{flex: '3', marginRight: '80px' }}>Below are the courses suggestion to fullfill credit requirements : 
                    <br/>
                    {(studentDetail['courses'])}
                  </div>
                </div>} 
                
            </div>

        </div>


    )
  }
}


export default RenderIndividualStudentReport;
