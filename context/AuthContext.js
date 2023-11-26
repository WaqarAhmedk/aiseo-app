import React, { useContext, createContext, useState, useEffect } from 'react';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useCookies } from "react-cookie";
import axios from 'axios';
import address from '../address';
import { useRouter } from 'next/router';
import jwtDecode from "jwt-decode";





const successToast = (message) => {
    Toastify({
        text: message,
        position: "right",
        className: "info",
        offset: {
            x: 0,
            y: 40,
        },
        style: {
            background: "#AAE460",
            color: 'black'
        },
    }).showToast();
}
const failToast = (message) => {
    Toastify({
        text: message,
        position: "right",
        className: "error",
        offset: {
            x: 0,
            y: 40,
        },
        style: {
            background: "#FF0000",
            color: 'black'
        },
    }).showToast();
}
const AuthContext = createContext();

export default function useAuth() {
    return useContext(AuthContext)
}
export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [cookies, setCookies, removeCookie] = useCookies();
    const router = useRouter();
    const [gkeywords, setgKeywords] = useState(null);


    const logIn = async (email, password) => {
        setLoading(true);

        axios.post(`${address}/user/signin`, { email: email, password: password }).
            then((res) => {

                if (res.data.success === true) {
                    setCookies("AuthToken", res.data.authToken, { path: '/' });
                    setUser(res.data.user);
                    setLoading(false)

                    successToast("welcome " + res.data.user.name);
                    router.push("/");
                    setLoading(false)
                } else if (res.data.success === false) {
                    failToast(res.data.message);
                    setLoading(false)
                }
            }).catch((err) => {
                console.log(err);
                for (var i = 0; i < err.response.data.errors.length; i++) {
                    failToast(err.response?.data.errors[i].msg)
                }
                setLoading(false)
            })

    }

    const logout = async () => {

        removeCookie("AuthToken");

        setUser(null)
        router.push("/login")

    };

    const SignUpwithGoogle = async (data) => {
        setLoading(true)
        const d = jwtDecode(data.credential);

        await axios.post(address + '/user/googlesignup', {
            name: d.name, email: d.email

        }).then((res) => {
            if (res.data.success) {
                setCookies("AuthToken", res.data.authToken, { path: '/' });
                setUser(res.data.user);
                setLoading(false)

                if (res.data.already) {
                    successToast('Welcome  Back ' + res.data.user.name);

                } else {
                    successToast('Welcome' + res.data.user.name);

                }

                router.push("/")

            } else {
                failToast(res.data.message);
                setLoading(false)

            }



        }).catch((error) => {
            console.log(error);
            failToast(error.message)
            setLoading(false)

        })




        // console.log('sadadsadadsa');
        // await axios.post(address + '/user/googlelogin', {
        //     name: name,
        //     email: email,

        // }).then((res) => {
        //     console.log(res.data);
        //     console.log('dsds');


        // }).catch((error) => {
        //     console.log(error);
        // })
    }
    const TrialCompleted = () => {
        setTimeout(() => {
            successToast('Trial Completed Please Subscribe to a package to continue');
            removeCookie("AuthToken");

            setUser(null)
            router.push('/login');
        }, 300000)
    }

    useEffect(() => {

        const checkUser = (req, res) => {
            if (cookies.AuthToken) {
                setLoading(true)

                axios.get(address + "/user/getuser", {
                    headers: {
                        'authtoken': cookies.AuthToken,
                    }
                }).then((res) => {

                    if (res.data.success === true) {
                        setUser(res.data.user);
                        setLoading(false)
                    } else {
                        setLoading(false);
                        router.push('/');
                    }
                }).catch((err) => {
                    console.log("Error in the loading user from cookies catch", err.message)
                    failToast(err.message)
                });
            }
        }


        checkUser();
    }, [])


    const value = { gkeywords, setgKeywords, logIn, SignUpwithGoogle, user, setUser, error, setError, loading, logout, TrialCompleted };
    return <AuthContext.Provider children={children} value={value} />
}
