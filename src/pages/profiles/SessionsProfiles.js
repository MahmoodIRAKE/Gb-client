// import { useDemoData } from '@mui/x-data-grid-generator';
import Table from "../util-components/table";
import session from "./../../store/reducers/session";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { dispatch, store } from "store/index";
import { fetchSessions } from "./../../store/reducers/session";

// ==============================|| STUDENT PROFILE PAGE ||============================== //

const SessionsProfile = () => {
  const sessions = useSelector((state) => state.session.session);
  useEffect(() => {
    // dispatch(fetchSessions());
  }, []);
  if (!sessions) {
    return <></>; //TODO
  }
  return (
    <div>
      <Table data={sessions} objName={"sessProfile"} />
    </div>
  );
};

export default SessionsProfile;
