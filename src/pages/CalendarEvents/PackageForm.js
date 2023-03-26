import * as React from "react";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import "./styles.css";
import SaveIcon from "@mui/icons-material/Save";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MainCard from "components/MainCard";
import { Button, Box, Alert } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSelector } from "react-redux";
import { dispatch } from "store/index";
function PackageDialog({ onClose, selectedValue, open }) {
  //   const { onClose, selectedValue, open } = props;
  const teachers = useSelector((state) => state.teacher.teacher);
  const subjects = useSelector((state) => state.subject.subject);
  const [teacherId, setTeacher] = React.useState("");
  const [subjectId, setSubjectId] = React.useState("");

  const [Package, setPackage] = React.useState({
    id: "00000000-0000-0000-0000-000000000000",
    name: "", //
    numberOfSessions: 0, //
    discountId: 0, //
    price: 0, //
    dynamicPrice: 0,
    created: new Date(),
    updatedAt: new Date(),
    active: true,
    subjectId: "", //
    hours: 0, //
    teacherId: "", //
  });
  const handlePackage = (name, value) => {
    if (name === "teacherId") setTeacher(value);
    if (name === "subjectId") setSubjectId(value);
    setPackage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handlePackageRegistration = async () => {
    console.log("success", Package);
    // let x = await dispatch(PackagePOST(Package));
    // if (!x?.payload) {
    //   setError(true);
    // } else {
    //   setSuccess(true);
    // }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>הוספת חבילה</DialogTitle>
      <div id="dialogContinaer">
        <div id="formContinaer">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="PackageName"
                name="name"
                label="Package Name"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  handlePackage(e.target.name, parseInt(e.target.value));
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Hours"
                name="hours"
                label="Hours"
                type="number"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  handlePackage(e.target.name, parseInt(e.target.value));
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="numberOfSessions"
                name="numberOfSessions"
                label="Number Of Sessions"
                type="number"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  handlePackage(e.target.name, parseInt(e.target.value));
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="price"
                name="price"
                label="Price"
                type="number"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  handlePackage(e.target.name, parseInt(e.target.value));
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Session Date"
                  name="SessionDate"
                  onChange={(e) => {
                    handlePackage("date", e.$d);
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={teacherId}
                  name="teacherId"
                  label="Teacher"
                  onChange={(e) => {
                    handlePackage(e.target.name, e.target.value);
                  }}
                >
                  {/* {teachers.map((t) => (
                    <MenuItem value={t.firstName} key={t.firstName}>
                      {t.firstName}
                    </MenuItem>
                  ))} */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subjectId}
                  name="subjectId"
                  label="Subject"
                  onChange={(e) => {
                    handlePackage(e.target.name, e.target.value);
                  }}
                >
                  {/* {subjects.map((s) => (
                    <MenuItem value={s.name} key={s.name}>
                      {s.name}
                    </MenuItem>
                  ))} */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div id="formBtns">
          <Box
            m={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              key="hello"
              alignItems="center"
              size="medium"
              variant="contained"
              onClick={handlePackageRegistration}
              endIcon={<SaveIcon />}
              sx={{ textTransform: "capitalize" }}
              id="btnStyleSave"
            >
              Save
            </Button>
          </Box>
        </div>
      </div>
    </Dialog>
  );
}
export default PackageDialog;
