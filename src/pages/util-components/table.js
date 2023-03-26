import React from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import s from "./styles.css";
import { Box } from "@mui/material";
import { useState } from "react";
import { secretaryTable } from "./table-headers";
import { sessionTable } from "./table-headers";
import { studentTable } from "./table-headers";
import { teacherTable } from "./table-headers";
import { useNavigate } from "react-router-dom";

const Table = ({ data, objName }) => {
  const INSTANT_TYPE = {
    secProfile: secretaryTable,
    stuProfile: studentTable,
    teaProfile: teacherTable,
    sessProfile: sessionTable,
  };
  const history = useNavigate();
  const [allData, setAllData] = useState(data);
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(allData?.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        allData
          ?.filter((item) => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData?.slice(from, to)));
  };

  const handleProfile = (e, id) => {
    history("/" + objName, { state: { id: id ,student:} });
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;

    const tableCell = Object.keys(allData[0]);
    const columnData = tableCell.map((keyD, i) => {
      if (INSTANT_TYPE[objName][keyD]) {
        return (
          <td key={i} id="tabletd">
            <span
              key={i}
              id="profile-Item"
              onClick={(e) => handleProfile(e, key["id"])}
              onKeyDown={handleProfile}
              role="presentation"
            >
              {key[keyD]}
            </span>
          </td>
        );
      }
    });

    return (
      <tr key={index} id="tabletr">
        {columnData}
      </tr>
    );
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.keys(allData[0]).map((title, index) => {
      if (INSTANT_TYPE[objName][title]) {
        return (
          <td key={index} id="tabletd">
            {INSTANT_TYPE[objName][title]}
          </td>
        );
      }
    });
  };

  if (!data) {
    return <></>;
  }

  return (
    <>
      <div id="search" class="search">
        <input
          placeholder="Search Campaign"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <table>
        <thead>
          <tr className={s.tabletr}>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Box id="pagination">
        <Pagination
          pageSize={countPerPage}
          onChange={updatePage}
          current={currentPage}
          total={allData.length}
        />
      </Box>
    </>
  );
};
export default Table;
