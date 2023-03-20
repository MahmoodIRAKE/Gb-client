// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import StudentRegistration from './../newMembersRegistration/StudentRegistration';
import TeacherRegistration from './../newMembersRegistration/TeacherRegistration';
import SecretaryRegistration from './../newMembersRegistration/SecretaryRegistration';
import { Button, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import classes from './style.module.css';
import ClassRegistration from 'pages/newMembersRegistration/SecretaryRegistration';
import { useState } from 'react';
// ==============================|| SAMPLE PAGE ||============================== //

export const INSERT_TYPES = {
    STUDENT: 0,
    TEACHER: 1,
    SECRETARY: 2,
    CLASSES: 3
};

export const INSERT_TYPES_BY_VALUE = {
    0: 'Student Registration',
    1: 'Teacher Registration',
    2: 'Secretary Registration',
    3: 'Classes Registration'
};

const NewMembersRegistration = () => {
    const [insertType, setInsertType] = useState(INSERT_TYPES.STUDENT);
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        parentPhone: '',
        birthDate: '',
        signUpDate: '',
        signInStatus: 0,
        isListedInCourse: 0,
        active: true,
        createdAt: '',
        updatedAt: '',
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
        active: true,
        firstName: '',
        lastName: '',
        phone: '',
        createdAt: '',
        updatedAt: '',
        birthDate: '',
        teacherDaysJson: ''
    });

    const [secretary, setSecretary] = useState({
        firstName: '',
        lastName: '',
        active: true,
        createdAt: '',
        updatedAt: '',
        secretaryId: ''
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

    const typeClickHandler = (value) => {
        setInsertType(value);
    };

    return (
        <div>
            <div className={classes.insideContainer}>
                <div className={classes.btnStyle}>
                    <Button
                        size="medium"
                        variant="contained"
                        className={classes.btnStyle}
                        onClick={() => typeClickHandler(INSERT_TYPES.STUDENT)}
                    >
                        Students
                    </Button>
                </div>
                <div className={classes.btnStyle}>
                    <Button
                        size="medium"
                        variant="contained"
                        className={classes.btnStyle}
                        onClick={() => typeClickHandler(INSERT_TYPES.TEACHER)}
                    >
                        Teachers
                    </Button>
                </div>
                <div className={classes.btnStyle}>
                    <Button
                        size="medium"
                        variant="contained"
                        className={classes.btnStyle}
                        onClick={() => typeClickHandler(INSERT_TYPES.CLASSES)}
                    >
                        Classes
                    </Button>
                </div>
                <div className={classes.btnStyle}>
                    <Button
                        size="medium"
                        variant="contained"
                        className={classes.btnStyle}
                        onClick={() => typeClickHandler(INSERT_TYPES.SECRETARY)}
                    >
                        Secretary
                    </Button>
                </div>
            </div>
            <MainCard title={INSERT_TYPES_BY_VALUE[insertType]}>
                {insertType === INSERT_TYPES.STUDENT && <StudentRegistration handleStudent={handleStudent} student={student} />}
                {insertType === INSERT_TYPES.TEACHER && <TeacherRegistration handleTeacher={handleTeacher} teacher={teacher} />}
                {insertType === INSERT_TYPES.CLASSES && <ClassRegistration />}
                {insertType === INSERT_TYPES.SECRETARY && <SecretaryRegistration handleSecretary={handleSecretary} secretary={secretary} />}
            </MainCard>
            <Box m={10} display="flex" justifyContent="center" alignItems="center">
                <Button alignItems="center" size="medium" variant="contained" endIcon={<SaveIcon />} sx={{ textTransform: 'capitalize' }}>
                    Save
                </Button>
            </Box>
        </div>
    );
};

export default NewMembersRegistration;
