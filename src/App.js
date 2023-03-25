// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { useEffect } from 'react';
import { dispatch, store } from "store/index";
import { fetchSecretaries } from 'store/reducers/secretary';
import { fetchSessions } from 'store/reducers/session';
import { fetchStudents } from 'store/reducers/student';
import { fetchTeachers } from 'store/reducers/teacher';
import { fetchSubjects } from 'store/reducers/subject';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {

    
// fetching all data
useEffect(()=>{
        dispatch(fetchStudents());
        dispatch(fetchSubjects());
        dispatch(fetchSessions());
        dispatch(fetchTeachers());
        dispatch(fetchSecretaries());
      
},[])



 return <ThemeCustomization>
        <ScrollTop>
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
};

export default App;
