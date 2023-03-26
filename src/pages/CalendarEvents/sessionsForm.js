import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import "./styles.css";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MainCard from "components/MainCard";

function SessionsDialog({ onClose, selectedValue, open }) {
  //   const { onClose, selectedValue, open } = props;

  const [Session, setSession] = React.useState({
    id: "string",
    name: "string",
    date: "2023-03-25T04:57:03.649Z",
    hours: 0,
    created: "2023-03-25T04:57:03.649Z",
    updatedAt: "2023-03-25T04:57:03.649Z",
    active: true,
    extraIndicator: true,
    teacherId: "string",
    classId: "string",
    packageId: "string",
    subjectId: "string",
    discountId: "string",
    priceForSession: 0,
  });
  const handleSession = (value, name) => {
    setSession((prevState) => ({
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

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>הוספת שיעור</DialogTitle>
      <div id="dialogContinaer">
        <div id="formContinaer">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="SubjectName"
                name="name"
                label="SubjectName"
                fullWidth
                variant="standard"
                onChange={(e) => {}}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  name="gradeId"
                  label="Age"
                  onChange={() => {}}
                >
                  {/* {GRADES.map((g) => (
                                <MenuItem value={g.id} key={g.id}>{g.grade}</MenuItem>
                            ))} */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </div>
    </Dialog>
  );
}
export default SessionsDialog;
