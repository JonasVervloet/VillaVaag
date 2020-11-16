import React from 'react'
import Link from 'next/link';
import Layout from '../../components/Layout';

function Home() {
    return (
        <Layout>
            <br />
            <h1>This is the home page!!</h1>
            <Link href='login'>
                <a>Click here to login!</a>
            </Link>
        </Layout>
    )
}

export default Home
