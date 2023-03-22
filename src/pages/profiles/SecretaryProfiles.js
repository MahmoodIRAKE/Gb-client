// import { useDemoData } from '@mui/x-data-grid-generator';
import Table from '../util-components/table';
import secretary from './../../store/reducers/secretary';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { dispatch, store } from 'store/index';
import { fetchSecretaries } from './../../store/reducers/secretary';

// ==============================|| STUDENT PROFILE PAGE ||============================== //

const SecretaryProfile = () => {
    const secretaries = useSelector((state) => state.secretary.secretary);

    useEffect(() => {
        dispatch(fetchSecretaries());
    }, []);
    if (!secretaries) {
        return <></>; //TODO
    }
    return (
        <div>
            <Table data={secretaries} />
        </div>
    );
};

export default SecretaryProfile;
