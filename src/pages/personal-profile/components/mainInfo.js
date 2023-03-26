// material-ui
import { Typography } from "@mui/material";

// project import
import MainCard from "components/MainCard";
import "./style.css";
import { Avatar } from "@mui/material";
import avatar1 from "../../../assets/images/users/avatar-1.png";



// ==============================|| SAMPLE PAGE ||============================== //

const StudentMainInfo = ({student}) => {

  console.log(location.state);
  return (
    <div id="container">


<MainCard id="maincard3">

    <div id="personal-info3">
    <Avatar
        alt="profile user"
        src={avatar1}
        sx={{ width: 120, height: 120 }}
    />

    <div id="info-block3">
    <Typography id="info3">{student?.firstName+ " "+ student?.lastName}</Typography>
    <Typography id="info3">{student?.signInStatus}</Typography>
    </div>

    </div>
    </MainCard>
      <MainCard>

        <div id="personal-info">
         <div id="mainInfoBlock">
     

          <div  id="info-block">
          
          <Typography id="info">{student?.studentId}</Typography>
          <Typography id="info">{student?.firstName+ " "+ student?.lastName}</Typography>
          <Typography id="info">{student?.phone}</Typography>
          <Typography id="info">{student?.parentPhone}</Typography>
          </div>
          <div id="info-block">
          <Typography id="info2">{'ת"ז'}</Typography>
          
          <Typography id="info2">{"שם"}</Typography>
          
          <Typography id="info2">{"טלפון"}</Typography>
          
          <Typography id="info2">{"טלפון הורה"}</Typography>
        
          </div>
          </div>

        </div>
      </MainCard>
 
    
    </div>
  );
};

export default StudentMainInfo;
