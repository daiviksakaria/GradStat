import { loginCredentialsForStudents, loginCredentialsForAdmin, loginCredentialsForThirdParty } from './loginDatabase';

export const authoriseUser = (id, password) => {
  if(loginCredentialsForStudents[`${id}`] && loginCredentialsForStudents[`${id}`] === password)
    return 'student';
  if(loginCredentialsForAdmin[`${id}`] && loginCredentialsForAdmin[`${id}`] === password)
    return 'admin';
  if(loginCredentialsForThirdParty[`${id}`] && loginCredentialsForThirdParty[`${id}`] === password)
    return 'ThirdParty';
  return false;
};
