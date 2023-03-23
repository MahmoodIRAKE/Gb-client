// material-ui
import { Typography } from "@mui/material";

// project import
import MainCard from "components/MainCard";

import { Avatar } from "@mui/material";
import avatar1 from "../../assets/images/users/avatar-1.png";
import { Divider, Chip } from "@mui/material";
import "./style.css";
import Table from "../util-components/table";
import { useLocation } from "react-router-dom";

// ==============================|| SAMPLE PAGE ||============================== //

const Teacher = () => {
  const location = useLocation();
  //   console.log(location.state?.id);
  return (
    <>
      <MainCard title="Sample Card">
        <div id="personal-info">
          <Avatar
            alt="profile user"
            src={avatar1}
            sx={{ width: 70, height: 70 }}
          />
          <Typography id="info">ID</Typography>
          <Typography id="info">FullName</Typography>
          <Typography id="info">PhoneNumber</Typography>
          <Typography id="info">Email</Typography>
        </div>
      </MainCard>
      <div id="tables">
        <Divider id="divider">
          <Chip label="Sessions" />
        </Divider>
        <div id="sessions">
          <Table />
        </div>
        <Divider id="divider">
          <Chip label="Sessions" />
        </Divider>
        <div id="sessions">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Teacher;
