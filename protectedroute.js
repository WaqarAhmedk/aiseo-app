import React from 'react'
import useAuth from './context/AuthContext'
import { useRouter } from 'next/router';
import { Link } from '@mui/icons-material';

import Login from './pages/login';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProtectedRoutes({ children }) {

    // const { pathname } = useRouter();
    const router = useRouter();


    const { loading, user } = useAuth();


    if (user || loading === false || router.pathname == "/login"
        || router.pathname == "/sign-up" || router.pathname == "/") {



        return children
    } else if (loading) {



        return <><CircularProgress /> </>

    }
    return <Login />
}