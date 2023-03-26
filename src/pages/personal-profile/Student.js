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
import Button from "./../../themes/overrides/Button";
import { useNavigate } from "react-router-dom";
import StudentMainInfo from "./components/mainInfo";
import AnalyticEcommerce from "components/cards/statistics/AnalyticEcommerce";

// ==============================|| SAMPLE PAGE ||============================== //

const Student = () => {
  const location = useLocation();
  const history = useNavigate();
  console.log(location.state);
  return (
    <>
      <div id="firstBlock">
      <StudentMainInfo student={location.state?.student}/>
      <div id="incomeBlock">
      <AnalyticEcommerce title="לתשלום" count="4,42,236" />
      <div id="income" ></div>
      <AnalyticEcommerce title="שולם" count="4,42,236"/>
      </div>
      </div>


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

export default Student;
