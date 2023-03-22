// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

import * as React from 'react';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// ==============================|| SAMPLE PAGE ||============================== //

const TeacherRegistration = ({ handleTeacher, teacher }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => handleTeacher(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={(e) => handleTeacher(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="PhoneNumber"
                        name="phone"
                        label="PhoneNumber"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={(e) => handleTeacher(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="BirthDay" name="birthDate" onChange={(e) => handleTeacher('birthDate', e.$d)} />
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TeacherRegistration;
