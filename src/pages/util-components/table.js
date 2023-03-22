import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import throttle from 'lodash/throttle';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import s from './styles.css';
import { Box } from '@mui/material';
import { useState } from 'react';
import { secretaryTable } from './table-headers';

const Table = ({ data }) => {
    const [allData, setAllData] = useState(data);
    const countPerPage = 10;
    const [value, setValue] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const [collection, setCollection] = React.useState(cloneDeep(allData?.slice(0, countPerPage)));
    const searchData = React.useRef(
        throttle((val) => {
            const query = val.toLowerCase();
            setCurrentPage(1);
            const data = cloneDeep(allData?.filter((item) => item.name.toLowerCase().indexOf(query) > -1).slice(0, countPerPage));
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

    const handleProfile = (e, key) => {
        console.log('shit profile ' + key);
    };

    const tableRows = (rowData) => {
        const { key, index } = rowData;

        const tableCell = Object.keys(allData[0]);
        const columnData = tableCell.map((keyD, i) => {
            if (secretaryTable[keyD]) {
                return (
                    <td key={i} id="tabletd">
                        <span key={i} id="profile-Item" onClick={(e) => handleProfile(e, i)} onKeyDown={handleProfile} role="presentation">
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
            if (secretaryTable[title]) {
                return (
                    <td key={index} id="tabletd">
                        {secretaryTable[title]}
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
                <Pagination pageSize={countPerPage} onChange={updatePage} current={currentPage} total={allData.length} />
            </Box>
        </>
    );
};
export default Table;
