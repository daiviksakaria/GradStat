import Student from '../components/student/Student';
import Admin from '../components/admin/Admin';
import ThirdParty from '../components/thirdparty/ThirdParty';
import SetCustomFilter from '../components/admin/setCustomFilter/SetCustomFilter';
import ViewIndividualReport from '../components/admin/viewIndividualReport/ViewIndividualReport';
import ViewBatchReport from '../components/admin/viewBatchReport/ViewBatchReport';

export const getComponent = componentToRender => {
  if(componentToRender === 'student')
    return Student;
  if(componentToRender === 'admin')
    return Admin;
  if(componentToRender === 'ThirdParty')
    return ThirdParty;
  if(componentToRender === 'Set Custom Filters')
    return SetCustomFilter;
  if(componentToRender === 'View Report Of An Individual Student')
    return ViewIndividualReport;
  if(componentToRender === 'View Batch Report')
    return ViewBatchReport;
  return false;
};
