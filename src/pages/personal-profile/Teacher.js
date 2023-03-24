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
import { useSelector } from "react-redux";
// ==============================|| SAMPLE PAGE ||============================== //

const Teacher = () => {
  const location = useLocation();
  const teachers = useSelector((state) => state.teacher.teacher);
  const sessions = useSelector((state) => state.session.session);

  console.log(teachers);
  useEffect(() => {
    // dispatch(fetchTeachers());
    const teacher = getTeacher(location.state?.id);
    const teacherSessions = getTeacherSessions(teacher?.id);
  }, []);
  if (!teachers) {
    return <></>; //TODO
  }

  const getTeacher = (id) => {
    return teachers.filter((t) => t.id === id);
  };

  const getTeacherSessions = (id) => {
    return sessions.filter((s) => s.teacherId === id);
  };
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
          <Typography id="info">ID:</Typography>
          <Typography id="info">FullName: {teacher.firstName}</Typography>
          <Typography id="info">PhoneNumber {teachers.lastName}</Typography>
          <Typography id="info">Email {teacher.phone}</Typography>
        </div>
      </MainCard>
      <div id="tables">
        <Divider id="divider">
          <Chip label="Sessions" />
        </Divider>
        <div id="sessions">
          <Table data={teacherSessions} objName={"sessProfile"} />
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
