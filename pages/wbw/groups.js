import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { invalidateAccessToken } from '../../actions';

import Layout from '../../components/Layout'
import { testGroupsRoute } from '../../utils/groupsAPI';

function GroupsPage() {

    const accessToken = useSelector(state => state.accessToken);
    const [data, setData] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (! accessToken) {
            setData(null);

        } else {
            getData(accessToken);
        }
    }, [accessToken]);

    const getData = async (accessToken) => {
        const response = await testGroupsRoute(accessToken);
        if (response.success) {
            setData(response.data);
        }
    }

    const handleClick = () => {
        dispatch(invalidateAccessToken());
    }

    return (
        <Layout>
            <h1>
                Group Page
            </h1>
            <h6>
                |------- UNDER CONSTRUCTION -------|
            </h6>
            <div>
                {data? data : "LOADING...."}
            </div>
            <button onClick={handleClick}>
                click to revoke access token
            </button>
        </Layout>
    )
}

export default GroupsPage