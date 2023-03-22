// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import StudentRegistration from './../newMembersRegistration/StudentRegistration';
import TeacherRegistration from './../newMembersRegistration/TeacherRegistration';
import SecretaryRegistration from './../newMembersRegistration/SecretaryRegistration';
import SubjectsRegistration from 'pages/newMembersRegistration/SubjectsRegistration';
import { Button, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import classes from './style.module.css';
import { useState } from 'react';
import { SecretaryPOST } from '../../store/reducers/secretary';
import { TeacherPOST } from '../../store/reducers/teacher';
import { StudentPOST } from '../../store/reducers/student';
import { SubjectPOST } from '../../store/reducers/subject';

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
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        subjectname: '',
        gradeId: ''
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

    const typeClickHandler = (value) => {
        setInsertType(value);
    };

    const handleRegistration = () => {
        switch (insertType) {
            case 0:
                dispatch(StudentPOST(student));
                break;

            case 1:
                dispatch(TeacherPOST(teacher));
                break;

            case 2:
                dispatch(SecretaryPOST(secretary));
                break;

            case 3:
                dispatch(SubjectPOST(subject));
                break;
        }
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
                        onClick={() => typeClickHandler(INSERT_TYPES.SUBJECT)}
                    >
                        Subject
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
                {insertType === INSERT_TYPES.SUBJECT && <SubjectsRegistration handleSubject={handleSubject} subject={subject} />}
                {insertType === INSERT_TYPES.SECRETARY && <SecretaryRegistration handleSecretary={handleSecretary} secretary={secretary} />}
            </MainCard>
            <Box m={10} display="flex" justifyContent="center" alignItems="center">
                <Button
                    key="hello"
                    alignItems="center"
                    size="medium"
                    variant="contained"
                    onClick={handleRegistration}
                    endIcon={<SaveIcon />}
                    sx={{ textTransform: 'capitalize' }}
                >
                    Save
                </Button>
            </Box>
        </div>
    );
};

export default NewMembersRegistration;
