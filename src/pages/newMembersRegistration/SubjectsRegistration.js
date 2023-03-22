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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// ==============================|| SAMPLE PAGE ||============================== //

const SubjectsRegistration = ({ handleSubject, subject }) => {
    const [age, setAge] = React.useState('');

    const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const handleChange = (event) => {
        setAge(event.target.value);
        handleSubject('gradeId', event.target.value);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="SubjectName"
                        name="subjectname"
                        label="SubjectName"
                        fullWidth
                        variant="standard"
                        onChange={(e) => handleSubject(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            name="gradeId"
                            label="Age"
                            onChange={handleChange}
                        >
                            {GRADES.map((g) => (
                                <MenuItem value={g}>{g}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SubjectsRegistration;
