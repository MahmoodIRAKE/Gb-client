// import { useDemoData } from '@mui/x-data-grid-generator';
import Table from "../util-components/table";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { dispatch, store } from "store/index";
import student from "./../../store/reducers/student";
import { fetchStudents } from "./../../store/reducers/student";

// ==============================|| STUDENT PROFILE PAGE ||============================== //

const StudentProfile = () => {
  const students = useSelector((state) => state.student.student);
  useEffect(() => {
    // dispatch(fetchStudents());
  }, []);
  if (!students) {
    return <></>; //TODO
  }

  return (
    <div>
      <Table data={students} objName={"stuProfile"} />
    </div>
  );
};

export default StudentProfile;
