import {checkSubset} from '../utils';
import {getCreditRequirements, getStudentDetails} from '../student/studentHelpers';
import {dataOfStudents} from '../student/studentDatabase';


export const checkEligibility = id => {
  const studentCreditDetails = getStudentDetails(id);
  const creditRequirements = getCreditRequirements(id);
  // further implementation details
};


export const filterByCPI = (batch, targetCPI) => {
  const allStudentIds = dataOfStudents[`${batch}`]['all students'];
  const filteredStudent = allStudentIds.filter(studentId => {
    const studentCPI = dataOfStudents[`${batch}`][`${studentId}`]['cpi'];
    return studentCPI >= targetCPI;
  });
  return filteredStudent.map(studentId => getStudentDetails(studentId));
};

export const filterBySubject = (batch, targetSubjects, targetCPI = 0) => { // targetSubjects should be an array of subjects(string)
  if (!batch) {
    return [];
  }
  const allStudentIds = dataOfStudents[`${batch}`]['all students'];
  const filteredStudent = allStudentIds
    .filter(studentId => {
      const studentCPI = dataOfStudents[`${batch}`][`${studentId}`]['cpi'];
      return studentCPI >= targetCPI;
    })
    .filter(studentId => {
    const studentSubjects = dataOfStudents[`${batch}`][`${studentId}`]['subjects'];
    return checkSubset(studentSubjects, targetSubjects);
  });
  return filteredStudent.map(studentId => getStudentDetails(studentId));
};

export const getAllStudentsDetails = batch => 
(dataOfStudents[`${batch}`] ? dataOfStudents[`${batch}`]['all students'].map(studentId => getStudentDetails(studentId)) : []);