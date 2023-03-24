// import { useDemoData } from '@mui/x-data-grid-generator';
import Table from "../util-components/table";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { dispatch, store } from "store/index";
import teacher from "./../../store/reducers/teacher";
import { fetchTeachers } from "./../../store/reducers/teacher";

// ==============================|| STUDENT PROFILE PAGE ||============================== //

const TeacherProfile = () => {
  const teachers = useSelector((state) => state.teacher.teacher);
  console.log(teachers);
  useEffect(() => {
    // dispatch(fetchTeachers());
  }, []);
  if (!teachers) {
    return <></>; //TODO
  }

  return (
    <div>
      <Table data={teachers} objName={"teaProfile"} />
    </div>
  );
};

export default TeacherProfile;
