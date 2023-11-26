import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import dashstyling from '../styles/Dashboard.module.css';
import { Undo, Redo, FormatBold, FormatUnderlined, FormatItalic, CopyAll, DownloadForOffline } from "@mui/icons-material";
import { Button, CircularProgress, MenuItem, Select, TextField } from "@material-ui/core";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import address from '../address';
import { useCookies } from "react-cookie";
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../context/AuthContext';
import SaveWarning from './savewarining';

import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'
import useTranslation from 'next-translate/useTranslation';


const style = {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.25) !important',
    backdropFilter: 'blur(11px) !important',
    top: '50%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90vh',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflow: 'scroll',
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



export default function ParaPhrase(props) {
    const { setUser } = useAuth();
    const [total, setTotal] = useState(0);
    const [paragraph, setParaGraph] = useState('')
    const [exit, setExit] = useState(false)
    const [Cookies] = useCookies();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const { t } = useTranslation('dashboard');

    const handleBoldClick = () => {
        document.execCommand('bold', false, null)
    }

    const handleItalicClick = () => {
        document.execCommand('italic', false, null)
    }
    const handleUnderlineClick = () => {
        document.execCommand('underline', false, null)
    }

    const handleUndoClick = () => {
        document.execCommand('undo', false, null)
    }
    const handleRedoClick = () => {
        document.execCommand('redo', false, null)
    }
    const handleCopyAllClick = () => {
        const range = document.createRange();
        range.selectNodeContents(document.getElementById('note'));

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        selection.removeAllRanges();
        successToast('All text Copied to ClipBoard successfully')
    }

    const downloadFile = () => {
        let d = data


        const txtToBlob = new Blob([data], { type: 'text/plain' });
        const fileName = 'SEO360 RESULT.text';
        let newLink = document.createElement('a');

        newLink.href = URL.createObjectURL(txtToBlob);
        newLink.download = fileName;
        // document.body.appendChild(newLink); 
        newLink.click();
        successToast('File saved successfully')

    }


    const Rephrase = () => {
        setLoading(true);
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        let lang = 'en';
        let language = 'English'
        for (const cookie of cookies) {
            if (cookie.indexOf('NEXT_LOCALE') === 0) {
                lang = cookie.substring('NEXT_LOCALE'.length + 1);

            }
        }
        if (lang == 'de') {
            language = 'German Deutsch,'
        } else if (lang == 'es') {
            language = 'Spanish'
        }
        axios.post(`${address}/content/create-paraphrase`, {
            query: paragraph, language: language
        }, {
            headers: {
                authtoken: Cookies.AuthToken,
            },
        }).then((res) => {

            if (res.data.success) {
                setData(res.data.result);
                setLoading(false);
                successToast(res.data.message);
                setUser(res.data.user)

            } else {
                setLoading(false);
                failToast(res.data.message)
            }


        }).catch((err) => {
            console.log(err);
            failToast(err.message)
        });
    }

    return (
        <div >
            <Modal
                {...props}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >


                <Box sx={{ ...style, }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}></h1>
                        <CloseIcon style={{ cursor: 'pointer' }} onClick={() => {
                            props.close();
                        }} />
                    </div>
                    <hr className='mt-2 mb-2' />

                    {
                        data ?
                            <>  <button

                                onClick={(e) => {
                                    setExit(true)

                                }}
                                style={{
                                    borderRadius: "4px",
                                    border: "1px solid white",

                                }}
                                className=" mt-2 h-10 ml-3 mb-4 pl-3 pr-3 font-normal text-base leading-7 text-white"
                            >
                                {
                                    t("rephrase-more")
                                }
                            </button>
                                <div className={`xl:col-span-7 lg:col-span-7  sm:col-span-12 ml-10 ${dashstyling.resultside}`}>



                                    <div className={dashstyling.resultheader}>
                                        <div className={dashstyling.headericonsdiv}>
                                            <Undo className="mr-3" onClick={handleUndoClick} />
                                            <Redo onClick={handleRedoClick} />
                                        </div>

                                        <div className={dashstyling.headericonsdiv}>
                                            <FormatUnderlined className="mr-3" onClick={handleUnderlineClick} />
                                            <FormatItalic className="mr-3" onClick={handleItalicClick} />
                                            <FormatBold className="mr-3" onClick={handleBoldClick} />
                                        </div>
                                        <div className={dashstyling.headericonsdiv}>
                                            <CopyAll className="mr-3" onClick={handleCopyAllClick} />
                                            <DownloadForOffline className="mr-3" onClick={downloadFile} />

                                        </div>
                                        <div className={dashstyling.headericonsdiv}>
                                            {
                                                total}
                                        </div>
                                    </div>
                                    <hr className="ml-3 mr-3" />

                                    <GrammarlyEditorPlugin clientId="client_WJyWgQzmfF5SiYrjJK5HCn">
                                        <div id="note" className={`m-2 ${dashstyling.editablearea}`} contentEditable='true' >
                                            {
                                                data.map((d) => {
                                                    return <p>{d} .</p>
                                                })
                                            }
                                        </div>
                                    </GrammarlyEditorPlugin>


                                </div>

                            </>
                            :

                            <>

                                <label className="not-italic font-normal text-sm leading-6 text-white block">
                                    {
                                        t("describe-what-want")
                                    }
                                </label>
                                <div className='flex'>

                                    <textarea cols='80'
                                        className={`${dashstyling.paratextfield}`} placeholder="Paste your Content here "
                                        variant="outlined" onChange={(e) => { setParaGraph(e.target.value) }} >

                                    </textarea>

                                    {
                                        loading ? <button


                                            style={{
                                                borderRadius: "4px",
                                                border: "1px solid white",
                                                marginTop: '10%',
                                                padding: '5px'
                                            }}
                                            className="w-32 mt-8 h-15 ml-3 font-normal text-base leading-7 text-white"
                                        >
                                            <CircularProgress />
                                        </button> : <button

                                            onClick={(e) => {
                                                e.preventDefault();

                                                Rephrase();
                                            }}
                                            style={{
                                                borderRadius: "4px",
                                                border: "1px solid white",
                                                marginTop: '10%'
                                            }}
                                            className="w-32 mt-8 h-10 ml-3 font-normal text-base leading-7 text-white"
                                        >
                                            {
                                                t("rephrase")
                                            }
                                        </button>
                                    }
                                </div>



                            </>
                    }




                </Box>
            </Modal>
            <SaveWarning open={exit} close={() => {
                setData(null);
                props.close();
                setExit(false);
            }}

                notclose={() => {
                    setExit(false)
                }} />
        </div>

    )
}
