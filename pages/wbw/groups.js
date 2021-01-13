import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import Layout from '../../components/Layout'
import { testGroupsRoute } from '../../utils/groupsAPI';

function GroupsPage() {

    const accessToken = useSelector(state => state.accessToken);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (! accessToken) {
            setData(null);
        } else {
            console.log("Access token working!");
            console.log(accessToken);
            getData(accessToken);
        }
    }, [accessToken]);

    const getData = async (accessToken) => {
        const response = await testGroupsRoute(accessToken);
        if (response.success) {
            setData(response.data);
        }
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
        </Layout>
    )
}

export default GroupsPage