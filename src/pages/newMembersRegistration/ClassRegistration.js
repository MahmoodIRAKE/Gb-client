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

const ClassRegistration = () => (
    <React.Fragment>
        <CssBaseline />
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
            <Grid item xs={12} sm={4}>
                <TextField required id="Name" name="Name" label="Name" fullWidth variant="standard" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField required id="Subject" name="Subject" label="Subject" fullWidth autoComplete="family-name" variant="standard" />
            </Grid>
        </Grid>
    </React.Fragment>
);

export default ClassRegistration;
