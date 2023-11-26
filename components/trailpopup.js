import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import emoji from '../public//new/giphy.gif'
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Image from 'next/image';
import axios from 'axios';
import address from '../address';
import useAuth from '../context/AuthContext';
import { useCookies } from "react-cookie";
import Login from '../pages/login';
import { useRouter } from 'next/router';
import Slide from '@mui/material/Slide';

const style = {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.25) !important',
    backdropFilter: 'blur(11px) !important',
    top: '40%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflow: 'scroll !important',
};


const successToast = (message) => {
    Toastify({
        text: message,
        position: "center",
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
        position: "center",
        className: "info",
        offset: {
            x: 0,
            y: 40,
        },
        style: {
            background: "red",
            color: 'black'
        },
    }).showToast();
}


export default function TrialPopup(props) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { setUser, TrialCompleted } = useAuth();
    const [cookies, setCookies, removeCookie] = useCookies();
    const router = useRouter();

    const StartTrial = () => {

        axios.post(`${address}/trial/start-trial`, {
            name, email
        }).then((res) => {
            if (res.data.success) {
                setUser(res.data.user);
                setCookies("AuthToken", res.data.AuthToken, { path: '/' });
                successToast(res.data.message)
                TrialCompleted();
                router.push('/dashboard')

            } else {
                failToast(res.data.message)
            }
        }).catch((err) => {
            console.log(err);
            for (var i = 0; i < err.response.data.errors.length; i++) {
                failToast(err.response?.data.errors[i].msg)
            }
            console.log('Error in Starttrial', err.message);
        })
    }
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} in='checked' {...props} />;
    });

    return (
        <div >
            <Modal
                {...props}
                aria-labelledby="child-modal-title"
                TransitionComponent={Transition}
                aria-describedby="child-modal-description"
            >


                <Box sx={{ ...style, }}  >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h1 style={{ fontSize: '20px', fontWeight: '' }}>Get Our Free Trial for 5 Minutes by just Providing your Good Name and Email </h1>
                        <CloseIcon style={{ cursor: 'pointer' }} onClick={() => {
                            props.close();
                        }} />
                    </div>
                    <div className='mt-10 mb-10 flex justify-center  grid grid-cols-12 '>


                        <div className='col-span-6 mt-5'>
                            <label className="not-italic font-bold text-lg leading-6 text-white">Name </label>
                            <input
                                style={{
                                    backgroundColor: '#2A2A2A',
                                    height: '40px',
                                    color: 'white',
                                    width: '100%'
                                }}
                                type="text"
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg p-1"
                                placeholder="Name"
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className='col-span-6 mt-5'>
                            <label className="not-italic font-bold text-lg leading-6 text-white ">Email      </label>
                            <input
                                style={{
                                    backgroundColor: '#2A2A2A',
                                    height: '40px',
                                    color: 'white',
                                    width: '100%'

                                }}
                                type="email"
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg p-1"
                                placeholder="yourmail@example.com"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <button
                            style={{
                                borderRadius: "4px",
                                background: "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
                            }}
                            type="button"
                            className="w-40 h-10 font-normal text-base leading-7 text-white ml-10 p-2 mt-5 "
                            onClick={StartTrial}
                        >
                            Get a Free Demo
                        </button>
                    </div>

                    {/* <div className='flex justify-center'>
                        <Image src={emoji} style={{
                            height: '100px',
                            width: '100px'
                        }} />
                        Why not to Happy when you get something frre

                    </div> */}
                </Box>
            </Modal>
        </div>
    )
}
