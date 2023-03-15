// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import StudentRegistration from './../newMembersRegistration/StudentRegistration';
import TeacherRegistration from './../newMembersRegistration/TeacherRegistration';
import { Button, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import classes from './style.module.css';
import ClassRegistration from 'pages/newMembersRegistration/ClassRegistration';
// ==============================|| SAMPLE PAGE ||============================== //

const NewMembersRegistration = () => (
    <div>
        <div className={classes.insideContainer}>
            <div className={classes.btnStyle}>
                <Button size="medium" variant="contained" className={classes.btnStyle}>
                    Students
                </Button>
            </div>
            <div className={classes.btnStyle}>
                <Button size="medium" variant="contained" className={classes.btnStyle}>
                    Teachers
                </Button>
            </div>
            <div className={classes.btnStyle}>
                <Button size="medium" variant="contained" className={classes.btnStyle}>
                    Classes
                </Button>
            </div>
        </div>
        <MainCard title="Sample Card">
            <Typography variant="body2">
                <StudentRegistration />
                {/* <TeacherRegistration /> */}
                {/* <ClassRegistration /> */}
            </Typography>
        </MainCard>
        <Box m={10} display="flex" justifyContent="center" alignItems="center">
            <Button alignItems="center" size="medium" variant="contained" endIcon={<SaveIcon />} sx={{ textTransform: 'capitalize' }}>
                Save
            </Button>
        </Box>
    </div>
);

export default NewMembersRegistration;
