// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import StudentRegistration from './../newMembersRegistration/StudentRegistration';
import TeacherRegistration from './../newMembersRegistration/TeacherRegistration';
import SecretaryRegistration from './../newMembersRegistration/SecretaryRegistration';
import SubjectsRegistration from 'pages/newMembersRegistration/SubjectsRegistration';
import { Button, Box,Alert } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import classes from './style.module.css';
import { useEffect, useState } from 'react';
import { SecretaryPOST ,fetchSecretaries} from '../../store/reducers/secretary';
import { TeacherPOST ,fetchTeachers} from '../../store/reducers/teacher';
import { StudentPOST ,fetchStudents} from '../../store/reducers/student';
import { SubjectPOST ,fetchSubjects} from '../../store/reducers/subject';

import { dispatch } from 'store/index';
// ==============================|| SAMPLE PAGE ||============================== //

export const INSERT_TYPES = {
    STUDENT: 0,
    TEACHER: 1,
    SECRETARY: 2,
    SUBJECT: 3
};

export const INSERT_TYPES_BY_VALUE = {
    0: 'Student Registration',
    1: 'Teacher Registration',
    2: 'Secretary Registration',
    3: 'Subject Registration'
};

const NewMembersRegistration = () => {
    const [insertType, setInsertType] = useState(INSERT_TYPES.STUDENT);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [student, setStudent] = useState({
        id: '00000000-0000-0000-0000-000000000000',
        firstName: '',
        lastName: '',
        phone: '',
        parentPhone: '',
        birthDate: '',
        signUpDate: new Date(),
        signInStatus: 0,
        isListedInCourse: 0,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        schoolName: '',
        subjectsJson: '',
        studentId: '',
        studentClass: '',
        sigingNotes: '',
        favoriteMeetingTime: '',
        allTakenClasses: 0,
        paidClasses: 0,
        toPayClasses: 0,
        packagesNumber: 0,
        hasBratohers: true
    });

    const [teacher, setTeacher] = useState({
        id: '00000000-0000-0000-0000-000000000000',
        active: true,
        firstName: '',
        lastName: '',
        phone: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        birthDate: '',
        teacherDaysJson: ''
    });

    const [secretary, setSecretary] = useState({
        id: '00000000-0000-0000-0000-000000000000',
        firstName: '',
        lastName: '',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        secretaryId: ''
    });

    const [subject, setSubject] = useState({
        id: '00000000-0000-0000-0000-000000000000',
        // active: true,
        // createdAt: new Date(),
        // updatedAt: new Date(),
        name: '',
        age: ''
    });

    const handleStudent = (name, value) => {
        setStudent((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleTeacher = (name, value) => {
        setTeacher((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSecretary = (name, value) => {
        setSecretary((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubject = (name, value) => {
        setSubject((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const typeClickHandler =  (value) => {
        setInsertType(value);
    };

    const handleRegistration =async () => {
        setLoading(true)
        switch (insertType) {
            case 0:
               let x= await dispatch(StudentPOST(student));
               if(!x?.payload){
                setError(true)
               }else{
                setSuccess(true)
               }
                break;

            case 1:
                let t=await dispatch(TeacherPOST(teacher));
                if(!t?.payload){
                    setError(true)
                   }else{
                    setSuccess(true)
                   }
                break;

            case 2:
                let c=await dispatch(SecretaryPOST(secretary));
                if(!c?.payload){
                    setError(true)
                   }else{
                    setSuccess(true)
                   }
                break;

            case 3:
                subject.age=subject.age.toString();
                let a=await dispatch(SubjectPOST(subject));
                if(!a?.payload){
                    setError(true)
                   }else{
                    setSuccess(true)
                   }
              
                break;
        }
        setLoading(false)
        
    };
  
    useEffect(()=>{if(error || success){
        setTimeout(()=>setError(false),3000)
        setTimeout(()=>setSuccess(false),3000)
    }
    if(success){
        dispatch(fetchStudents());
        dispatch(fetchSubjects());
        dispatch(fetchTeachers());
        dispatch(fetchSecretaries());
    }
},[error,success])
    return (
        <div>
             <div id={classes.mainConatiner}>
       
            <div className={classes.insideContainer}>
                <div className={classes.btnStyle}>
                    <Button
                        size="medium"
                        variant={insertType === INSERT_TYPES.STUDENT? "contained":"outlined"}
                        className={classes.btnStyle}
                        onClick={() => typeClickHandler(INSERT_TYPES.STUDENT)}
                    >
                        Students
                    </Button>
                </div>
                <div className={classes.btnStyle}>
                    <Button
                        size="medium"
                        variant={insertType === INSERT_TYPES.TEACHER? "contained":"outlined"}
                        className={classes.btnStyle}
                        onClick={() => typeClickHandler(INSERT_TYPES.TEACHER)}
                    >
                        Teachers
                    </Button>
                </div>
                <div className={classes.btnStyle}>
                    <Button
                        size="medium"
                        variant={insertType === INSERT_TYPES.SUBJECT? "contained":"outlined"}
                        className={classes.btnStyle}
                        onClick={() => typeClickHandler(INSERT_TYPES.SUBJECT)}
                    >
                        Subject
                    </Button>
                </div>
                <div className={classes.btnStyle}>
                    <Button
                        size="medium"
                        variant={insertType === INSERT_TYPES.SECRETARY? "contained":"outlined"}
                        className={classes.btnStyle}
                        onClick={() => typeClickHandler(INSERT_TYPES.SECRETARY)}
                        
                    >
                        Secretary
                    </Button>
                </div>
            </div>
            
            <MainCard id={classes.formContainer} title={INSERT_TYPES_BY_VALUE[insertType]}>
                {insertType === INSERT_TYPES.STUDENT && <StudentRegistration handleStudent={handleStudent} student={student} />}
                {insertType === INSERT_TYPES.TEACHER && <TeacherRegistration handleTeacher={handleTeacher} teacher={teacher} />}
                {insertType === INSERT_TYPES.SUBJECT && <SubjectsRegistration handleSubject={handleSubject} subject={subject} />}
                {insertType === INSERT_TYPES.SECRETARY && <SecretaryRegistration handleSecretary={handleSecretary} secretary={secretary} />}
            </MainCard>
            </div>
            <div id={classes.alerts}>
            {!loading && error &&<Alert severity="error">An Error Went Down Please Check Again!</Alert>}
            {loading &&<Alert severity="info">Info Is Being Added Please Wait ...</Alert>}
            {!loading && success&& <Alert severity="success">{INSERT_TYPES_BY_VALUE[insertType] +" Was Done Successfully"}</Alert>}
            </div>
            <Box m={10} display="flex" justifyContent="center" alignItems="center">
            
                <Button
                    key="hello"
                    alignItems="center"
                    size="medium"
                    variant="contained"
                    onClick={handleRegistration}
                    endIcon={<SaveIcon />}
                    sx={{ textTransform: 'capitalize' }}
                    className={classes.btnStyleSave}
                >
                    Save
                </Button>
            </Box>
            
        </div>
    );
};

export default NewMembersRegistration;
