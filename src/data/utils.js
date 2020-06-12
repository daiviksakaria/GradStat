import {dataOfStudents} from './student/studentDatabase';
import {getCreditRequirements, getStudentDetails} from './student/studentHelpers';

export const findBatch = id => {
  const year = findYear(id);
  const degree = findDegree(id);
  return `${degree} ${year}`;
};

export const findYear = id => id.substring(0, 4);

export const checkSubset = (bigArray, smallArray) => {
  const booleans = smallArray.map(element => !!bigArray.includes(element));
  for(let i=0; i<booleans.length; i++)
  {
    if(!booleans[i])
      return false;
  }
  return true;
};

export const findDegree = id => {
  const degree = id.substring(4, 6);
  if(degree === '01')
    return 'BTech';
  if(degree === '11')
    return 'MTech';
  if(degree === '21')
    return 'MScIT';
};
