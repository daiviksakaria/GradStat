import {findBatch} from '../utils';
import { dataOfStudents, studentCreditRequirement } from './studentDatabase';

export const getCreditRequirementsByBatch = batch => {
  if(studentCreditRequirement[`${batch}`])
    return studentCreditRequirement[`${batch}`];
  return 'Details are not available !';
};

export const getCreditRequirements = id => {
  const batch = findBatch(id);
  if(studentCreditRequirement[`${batch}`])
    return studentCreditRequirement[`${batch}`];
  return 'Details are not available !';
};

export const getStudentDetails = id => {
  const batch = findBatch(id);
  if(dataOfStudents[`${batch}`] && dataOfStudents[`${batch}`][`${id}`])
    return dataOfStudents[`${batch}`][`${id}`];
  return 'Details are not available !';
};
 


