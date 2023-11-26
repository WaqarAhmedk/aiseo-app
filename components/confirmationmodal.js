import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import dashstyling from '../styles/Dashboard.module.css';
import { Undo, Redo, FormatBold, FormatUnderlined, FormatItalic, CopyAll, DownloadForOffline } from "@mui/icons-material";
import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import OneTimeUseFeature from '../pages/onetimepayment';
import useAuth from '../context/AuthContext';
import address from '../address';
import { useCookies } from "react-cookie";
import CloseIcon from '@mui/icons-material/Close';
import useTranslation from 'next-translate/useTranslation';

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const style = {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.25) !important',
    backdropFilter: 'blur(11px) !important',
    top: '20%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '35vh',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflow: 'scroll',
};



export default function Confirmation(props) {
    const { user } = useAuth();

    const { t } = useTranslation('dashboard');


    return (
        <div >
            <Modal
                {...props}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >


                <Box sx={{ ...style, }}>




                    <div className="p-6 text-center">

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            {t("confirm-paraphrase")}
                        </h3>
                        <div className='text-sm mb-5' style={{ color: 'red' }}>{t("extra-charges-warn")}
                        </div>
                        {
                            user && user.paraphrasinglimit > 0 ? <button style={{ backgroundColor: 'green' }} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:
                            font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={() => {
                                    props.close();
                                }}>
                                {
                                    t("goto-paraphrasing"
                                    )}                            </button> : <OneTimeUseFeature />
                        }

                        <button style={{ border: '1px solid gray' }} className="text-white bg-gray-900 ml-5 hover:bg-gray-800 focus:ring-4 focus:
                        font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={() => {
                                props.cancel();
                            }}>
                            {t("cancel")}                    </button>

                    </div>

                </Box>
            </Modal>
        </div>
    )
}
