
import React, { useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import address from "../address";
import { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import dashstyling from '../styles/Dashboard.module.css';

import useAuth from "../context/AuthContext";
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@mui/material/Tooltip';

import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/20/solid";
import writingimg from '../public/new/writing.gif'
import { Undo, Redo, FormatBold, FormatUnderlined, FormatItalic, CopyAll, DownloadForOffline } from "@mui/icons-material";
import Image from "next/image";
import { ForBlog, ForProducts, ForRephrase, ForSummarize, ForWeb } from "../axiosCalls";
import ParaPhrase from "../components/paraphrase";
import Confirmation from "../components/confirmationmodal";
import useTranslation from 'next-translate/useTranslation';


import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

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






export default function GenerateResults(props) {

    const [cookies] = useCookies();
    const router = useRouter();

    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [searchterm, setSearchTerm] = useState('');
    const [openpopover, setOpenPopover] = useState(false);
    const [btnclick, setBtnClick] = useState(false);
    const { user } = useAuth();
    const [selectedValue, setSelectedValue] = React.useState("");
    const [selectedValueProducts, setSelectedProductsValue] = React.useState("");
    const [selectedValueBlogs, setSelectedBlogsValue] = React.useState("");
    const [selectedValueCustomerReview, setSelectedCustomerReviewValue] = React.useState("");
    const [selectedValueWebPage, setSelectedWebPageValue] = React.useState("");
    const [selectedValueRephrazing, setSelectedRephrazingValue] = React.useState("");
    const [prompt, setPrompt] = useState("");
    const [wordcount, setWordcount] = useState(20)
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [loaddata, setLoadData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [outputlen, setOutputLen] = useState(1);
    const [remainingwords, setRemainingWords] = useState(0);
    const [selectedContent, setSelectedCOntent] = useState([])
    const [showtags, setShowTags] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [total, setTotal] = useState(0)
    const [showdetails, setshodetails] = useState(false);
    const [productdata, setProductdata] = useState([]);
    const [webdata, setWebData] = useState([]);
    const [changecontent, setChangeContent] = useState([]);

    const [userselectedcontent, setUserSelectesContent] = useState(null)

    const { t } = useTranslation('dashboard');
    const renderFormattedText = (text) => {
        return text.split('\n').map((line, index) => {
          if (line.includes('\t')) {
            const parts = line.split('\t');
            const indentedLine = parts.map((part, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="tab"></span>}
                {part}
              </React.Fragment>
            ));
            return <p key={index}>{indentedLine}</p>;
          } else {
            return <p key={index}>{line}</p>;
          }
        });
      };

    useEffect(() => { if (user) { setRemainingWords(user.remainingwords) } }, [user]);
    function countWordsrephrase(data) {
        let totalwords = 0;
        setTotal(0)
        for (let i = 0; i < data.length; i++) {
            data[i].reply = data[i].reply.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].reply = data[i].reply.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans1 = data[i].reply.split(' ').filter(function (str) { return str != ""; }).length;
            // //return s.split(' ').filter(String).length; - this can also be used







            totalwords = ans1;


        }
        setTotal(totalwords)
    }

    function countWordsweb(data) {
        let totalwords = 0;
        setTotal(0)
        for (let i = 0; i < data.length; i++) {


            data[i].title = data[i].title.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].title = data[i].title.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans1 = data[i].title.split(' ').filter(function (str) { return str != ""; }).length;
            // //return s.split(' ').filter(String).length; - this can also be used

            data[i].titledesc = data[i].titledesc.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].titledesc = data[i].titledesc.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans2 = data[i].titledesc.split(' ').filter(function (str) { return str != ""; }).length;





            data[i].desc = data[i].desc.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].desc = data[i].desc.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans3 = data[i].desc.split(' ').filter(function (str) { return str != ""; }).length;


            data[i].aboutus = data[i].aboutus.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].aboutus = data[i].aboutus.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans4 = data[i].aboutus.split(' ').filter(function (str) { return str != ""; }).length;


            data[i].metadata = data[i].metadata.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].metadata = data[i].metadata.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans5 = data[i].metadata.split(' ').filter(function (str) { return str != ""; }).length;
            totalwords = ans1 + ans2 + ans3 + ans4 + ans5;
        }
        setTotal(totalwords)
    }

    function countWordsproduct(data) {
        let totalwords = 0;
        setTotal(0)
        for (let i = 0; i < data.length; i++) {
            data[i].title = data[i].title.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].title = data[i].title.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans1 = data[i].title.split(' ').filter(function (str) { return str != ""; }).length;
            // //return s.split(' ').filter(String).length; - this can also be used

            data[i].description = data[i].description.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].description = data[i].description.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans2 = data[i].description.split(' ').filter(function (str) { return str != ""; }).length;






            totalwords = ans1 + ans2;


        }
        setTotal(totalwords)
    }
    function countWordsblog(data) {
        let totalwords = 0;
        setTotal(0)
        for (let i = 0; i < data.length; i++) {

            data[i].topic = data[i].topic.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].topic = data[i].topic.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans1 = data[i].topic.split(' ').filter(function (str) { return str != ""; }).length;
            // //return s.split(' ').filter(String).length; - this can also be used

            data[i].overview = data[i].overview.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
            data[i].overview = data[i].overview.replace(/\n /, "\n"); // exclude newline with a start spacing
            let ans2 = data[i].overview.split(' ').filter(function (str) { return str != ""; }).length;



            let dp = data[i].expand;

            let ans3 = dp.trim().split(/\s+/).length;
            totalwords = ans1 + ans2 + ans3;

        





            totalwords = ans1 + ans2 + ans3;
        }
        setTotal(totalwords)
    }

    const handleChangeForValue = (e) => {
        setOutputLen(e.target.value);

    }

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setPrompt('')
    };


    const handleChangeForCustomerReview = (event) => {
        setSelectedCustomerReviewValue(event.target.value);
    };

    const handleChangeForRephrazingReview = (event) => {
        setSelectedRephrazingValue(event.target.value);
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const downloadUserSelectedFile = () => {

        let data = userselectedcontent + '\n\n\n  Generated By SEO 360'


        const txtToBlob = new Blob([data], { type: 'text/plain' });
        const fileName = 'SEO360 RESULT.text';
        let newLink = document.createElement('a');

        newLink.href = URL.createObjectURL(txtToBlob);
        newLink.download = fileName;
        // document.body.appendChild(newLink); 
        newLink.click();
        successToast('File saved successfully')

    }

    const downloadFile = () => {
        let data = document.getElementById('note').innerText;

        data = data + '\n\n\n  Generated By SEO 360'


        const txtToBlob = new Blob([data], { type: 'text/plain' });
        const fileName = 'SEO360 RESULT.text';
        let newLink = document.createElement('a');

        newLink.href = URL.createObjectURL(txtToBlob);
        newLink.download = fileName;
        // document.body.appendChild(newLink); 
        newLink.click();
        successToast('File saved successfully')

    }

    const changeShowTags = () => {
        showtags ? setShowTags(false) : setShowTags(true)
    }



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

    const handleHeading1Click = () => {
        document.execCommand('fontSize', '10pt')
    }
    const handleHeading2Click = () => {
        document.execCommand('H2', false, null)
    }
    const handleHeading3Click = () => {
        document.execCommand('H3', false, null)
    }
    const handleHeading4Click = () => {
        document.execCommand('H4', false, null)
    }
    const handleHeading5Click = () => {
        document.execCommand('H5', false, null)
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


    const handleCopyAllClick1 = () => {
        const range = document.createRange();
        range.selectNodeContents(document.getElementById('note1'));

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        selection.removeAllRanges();
        successToast('All text Copied to ClipBoard successfully')
    }








    const addKeywords = (keyword) => {


        const index = selectedKeywords.indexOf(keyword);

        if (index > -1) {


            let a = selectedKeywords.filter((item) => {
                return item != keyword
            });
            setSelectedKeywords(a)




            failToast(keyword + ' Removed from  List')



        } else {

            if (selectedKeywords.length >= 5) {

                failToast('You can only select 5 keywords Remove exsisitng one')

            } else {








                setSelectedKeywords(selectedKeywords => [...selectedKeywords, keyword])
                successToast(keyword + ' Added in  List')
            }

        }


    }



    // Getting keywords from backend

    const GetKeywords = (e) => {
        e.preventDefault();
        setLoading(true);
        setSelectedKeywords([])

        axios
            .post(
                address + `/content/keywords`,
                { searchterm, usertype: user.usertype },

                {
                    headers: {
                        authtoken: cookies.AuthToken,
                    },
                }
            ).then((res) => {
                if (res.data.success) {
                    if (res.data.keywords.length < 1) {
                        failToast('No Data Found for these Keywords')
                    }
                    setKeywords(res.data.keywords);
                    setLoading(false);
                } else {
                    failToast(res.data.message)
                }
                setLoading(false);
            }).catch((error) => {
                console.log(error.message);
                setLoading(false);

            })
    }





    return (
        <>
            <div className="ml-10 flex justify between">
                <div>
                    <div>
                        <span>{t("remaining-words")}</span>
                        <span className="m-5">{remainingwords}</span>
                    </div>
                    <div>
                        <span>{t("subscribed-plan")}</span>
                        <span className="m-5">{user ? user.plan : ''}</span>
                    </div>
                </div>
                <div style={{ border: '1px solid white ', width: 'auto' }}>
                    <p>Buy Our Subscription and get Access  to all of our amazing features</p>
                    <button className={dashstyling.a1} onClick={() => {
                        router.push('/#payment-div')
                    }}>Click here</button>
                </div>
            </div>

            <div style={{ position: 'relative', overflowX: 'hidden' }} className="grid xl:grid-cols-12  lg:grid-cols-12 sm:grid-cols-12 gap-4">


                <div className={`xl:col-span-5 lg:col-span-5 sm:col-span-12  ${dashstyling.inputside}`} >
                    <div className="mb-7">{t("paraphrase-content")}
                        <span className="ml-3 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline cursor-pointer" onClick={() => {
                            setConfirmation(true)
                        }}>{t("click-here")}</span>                    </div>
                    <span className="mb-7">{t("include-keywords")}

                        {
                            showtags ? <span style={{ cursor: 'pointer' }} onClick={changeShowTags}> {t("hide-keywords")}</span> : <span onClick={changeShowTags} style={{ cursor: 'pointer' }}>{t("show-keywords")}</span>
                        }
                    </span>
                    {
                        showtags ? <div>
                            <div className="mt-3 mb-3">
                                <span style={{ color: 'red', fontSize: '15px' }}> Disclaimer: Selcted KeyWords may not show in content sometime due to AI Generated Content.</span>
                            </div>
                            <p className="mb-4">{t("select-seo-tag")}</p>

                            <div className="flex">

                                <input
                                    className={dashstyling.dashtextfield}
                                    placeholder="Write a KeyWord to Select Related KeyWords"
                                    variant="outlined" onChange={(e) => { setSearchTerm(e.target.value) }} />

                                <div style={{ margin: ' -19px -29px -29px  3%' }}>
                                    {
                                        loading ? <div className={`${dashstyling.waitingdiv}`}>
                                            <Image alt='img' src={writingimg} style={{ width: '100px' }} />
                                            <span>{t("writing")}</span>
                                        </div> : <button
                                            style={{
                                                borderRadius: "4px",
                                                paddingRight: '5px',
                                                paddingLeft: '5px',
                                                border: "1px solid white",
                                            }}
                                            onClick={GetKeywords}

                                            className="w-44 mt-8 h-10  font-normal text-base leading-7 text-white"
                                        >
                                            {t("search-keywords")}
                                        </button>
                                    }
                                </div>


                            </div>
                            {
                                keywords.length > 0 ? <div className={`${dashstyling.keywordslist} flex flex-wrap`} >


                                    {
                                        keywords.map((keyword, index) => {
                                            return <div className={`${dashstyling.keyword}`} style={{
                                                backgroundColor: selectedKeywords.includes(keyword.text) ? 'green' : 'transparent'
                                            }}
                                            >
                                                <Tooltip title={`Volume : ${keyword.v}  Score : ${keyword.score} Cpc: ${keyword.cpc} competition : ${keyword.competition}`} placement="top-end">
                                                    <Button style={{ padding: '2px', margin: '0px', color: 'white' }} >{keyword.text}</Button>
                                                </Tooltip>


                                                <PlusIcon className={`${dashstyling.addicon}`} onClick={() => { addKeywords(keyword.text) }} />
                                            </div>
                                        })
                                    }




                                </div> : null
                            }






                        </div> : ''
                    }

                    <div className="mt-4">


                        <form >
                            <div style={{ color: 'white', display: 'flex' }}>


                            </div>
                            <div className="not-italic font-normal text-sm leading-6 text-white mt-3">
                                {t("want-to-create")}                                </div>
                            <Select
                                value={selectedValue}
                                placeholder="Goal"
                                onChange={handleChange}
                            >
                                <MenuItem value="Goal">{t("for-blog")}</MenuItem>
                                <MenuItem value="Products">{t("for-products")}</MenuItem>

                                <MenuItem value="WebPage">{t("for-webpage")}</MenuItem>
                                <MenuItem value="Rephrazing">
                                    {t("for-rephrasing")}
                                </MenuItem>
                            </Select>
                        </form>

                        {/* For Blog */}

                        <form className="mt-8" >

                            {selectedValue === "Goal" ? (
                                <>


                                    <div>
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            {
                                                t("describe-what-want")
                                            }                           </label>
                                        <TextField value={prompt}
                                            className={`${dashstyling.dashtextfieldf}`} placeholder="Write about your Product"
                                            variant="outlined" onChange={(e) => { setPrompt(e.target.value) }} >`</TextField>
                                    </div>
                                    <div className="mt-4">
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            {
                                                t("no-of-outputs")
                                            }
                                        </label>

                                        <Select placeholder="Goal" onChange={handleChangeForValue}>
                                            <MenuItem value="1">{t("one-output")}</MenuItem>
                                            <MenuItem value="2">{t("two-output")}</MenuItem>
                                            <MenuItem value="3">{t("three-output")}</MenuItem>
                                            <MenuItem value="4">{t("four-output")}</MenuItem>
                                            <MenuItem value="5">{t("five-output")}</MenuItem>


                                        </Select>
                                    </div>

                                    {
                                        loading ? <div className={`${dashstyling.waitingdiv}`}>
                                            <Image alt='img' src={writingimg} style={{ width: '100px' }} />
                                            <span>{t("writing")}</span>
                                        </div> : <div>
                                            <button
                                                style={{
                                                    borderRadius: "4px",
                                                    border: "1px solid white",
                                                }}
                                                className="w-auto mt-8 h-10 ml-3 font-normal text-base leading-7 text-white"
                                                onClick={async (e) => {
                                                    setLoading(true);

                                                    e.preventDefault();
                                                    ForBlog(selectedKeywords, prompt, outputlen, cookies.AuthToken).then((resdata) => {

                                                        if (resdata.success) {

                                                            setProductdata([])
                                                            setData(resdata.result);
                                                            successToast(resdata.message);
                                                            countWordsblog(resdata.result)

                                                        } else {
                                                            failToast(resdata.message)
                                                        }
                                                        setLoading(false);

                                                    }).catch((err) => {
                                                        console.log(err);
                                                        failToast(err.message)
                                                        setLoading(false);

                                                    })

                                                }


                                                }
                                            >
                                                {
                                                    t("write-for-me")
                                                }
                                            </button>

                                        </div>
                                    }
                                </>
                            ) : null}
                        </form>

                        {/* For Product */}

                        <form className="mt-8" >
                            {selectedValue === "Products" ? (
                                <>

                                    <div>
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            {
                                                t("describe-product")
                                            }                                          </label>
                                        <TextField value={prompt}
                                            className={dashstyling.dashtextfieldf} placeholder="Write about your Product"
                                            variant="outlined" onChange={(e) => { setPrompt(e.target.value) }} ></TextField>
                                    </div>
                                    <div className="mt-5">
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            {t("no-of-outputs")}
                                        </label>

                                        <Select placeholder="Goal" onChange={handleChangeForValue}>
                                            <MenuItem value="1">{t("one-output")}</MenuItem>
                                            <MenuItem value="2">{t("two-output")}</MenuItem>
                                            <MenuItem value="3">{t("three-output")}</MenuItem>
                                            <MenuItem value="4">{t("four-output")}</MenuItem>
                                            <MenuItem value="5">{t("five-output")}</MenuItem>


                                        </Select>
                                    </div>

                                    {
                                        loading ? <div className={`${dashstyling.waitingdiv}`}>
                                            <Image alt='img' src={writingimg} style={{ width: '100px' }} />
                                            <span>{t("writing")}</span>
                                        </div> : <div>

                                            <button

                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setLoading(true);
                                                    ForProducts(selectedKeywords, prompt, outputlen, cookies.AuthToken).then((resdata) => {
                                                        if (resdata.success) {
                                                            setData([]);
                                                            setProductdata(resdata.result);
                                                            successToast(resdata.message);
                                                            countWordsproduct(resdata.result)
                                                        } else {
                                                            failToast(resdata.message)
                                                        }
                                                        setLoading(false);

                                                    }).catch((err) => {
                                                        console.log(err);
                                                        failToast(err.message)
                                                        setLoading(false);

                                                    })

                                                }}
                                                style={{
                                                    borderRadius: "4px",
                                                    border: "1px solid white",
                                                }}
                                                className="w-auto mt-8 h-10 ml-3 font-normal text-base leading-7 text-white"
                                            >
                                                {t("write-for-me")}
                                            </button>


                                        </div>
                                    }
                                </>
                            ) : null}
                        </form>



                        {/* webpage */}

                        <form >
                            {selectedValue === "WebPage" ? (
                                <>

                                    <div >
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            {
                                                t("describe-webpage")
                                            }                                           </label>
                                        <TextField value={prompt}
                                            className={dashstyling.dashtextfieldf} placeholder="Write about your Product"
                                            variant="outlined" onChange={(e) => { setPrompt(e.target.value) }} ></TextField>
                                    </div>
                                    <div className="mt-5">
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            {
                                                t("no-of-outputs")
                                            }
                                        </label>

                                        <Select placeholder="Goal" onChange={handleChangeForValue}>
                                            <MenuItem value="1">{t("one-output")}</MenuItem>
                                            <MenuItem value="2">{t("two-output")}</MenuItem>
                                            <MenuItem value="3">{t("three-output")}</MenuItem>
                                            <MenuItem value="4">{t("four-output")}</MenuItem>
                                            <MenuItem value="5">{t("five-output")}</MenuItem>



                                        </Select>
                                    </div>
                                    {
                                        loading ? <div className={`${dashstyling.waitingdiv}`}>
                                            <Image alt='img' src={writingimg} style={{ width: '100px' }} />
                                            <span>{t("writing")}</span>
                                        </div> : <div>

                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setLoading(true);
                                                    ForWeb(selectedKeywords, prompt, outputlen, cookies.AuthToken).then((resdata) => {
                                                        if (resdata.success) {
                                                            setData([]);
                                                            setProductdata([]);
                                                            setWebData(resdata.result);
                                                            successToast(resdata.message);
                                                            countWordsweb(resdata.result)

                                                        } else {
                                                            failToast(resdata.message)
                                                        }
                                                        setLoading(false);

                                                    }).catch((err) => {
                                                        console.log(err);
                                                        failToast(err.message)
                                                        setLoading(false);

                                                    })
                                                }}
                                                style={{
                                                    borderRadius: "4px",
                                                    border: "1px solid white",
                                                }}
                                                className="w-auto mt-8 h-10 ml-3 font-normal text-base leading-7 text-white"
                                            >
                                                {
                                                    t("write-for-me")
                                                }
                                            </button>


                                        </div>
                                    }
                                </>
                            ) : null}
                        </form>

                        {/* Rephrase */}

                        <form >
                            {selectedValue === "Rephrazing" ? (
                                <>
                                    <label className="not-italic font-normal text-sm leading-6 text-white block">

                                        {
                                            t("select-option")
                                        }                                     </label>
                                    <Select

                                        placeholder="Rephrazing"
                                        onChange={handleChangeForRephrazingReview}
                                    >
                                        <MenuItem value="Rephrase">{t("rephrase")}</MenuItem>
                                        <MenuItem value="Summarize">{
                                            t("summarize")
                                        }</MenuItem>
                                    </Select>
                                    <div className="mt-5">
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            {t("describe-what-want")}                                          </label>
                                        <TextField value={prompt}
                                            className={dashstyling.dashtextfieldf}
                                            placeholder="Write your Paragraph here "
                                            variant="outlined" onChange={(e) => { setPrompt(e.target.value) }} ></TextField>
                                    </div>
                                    {/* <div>
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            words Count
                                        </label>
                                        <TextField value={wordcount}
                                            style={{ color: "white", border: "1px solid white", width: "80%" }}
                                            className={dashstyling.dashtextfieldf}
                                            variant="outlined" onChange={(e) => { setWordcount(e.target.value) }} >asdsa</TextField>
                                    </div> */}
                                    <div className="mt-5">
                                        <label className="not-italic font-normal text-sm leading-6 text-white block">
                                            {t("no-of-outputs")}
                                        </label>

                                        <Select placeholder="Goal" onChange={handleChangeForValue}>
                                            <MenuItem value="1">{t("one-output")}</MenuItem>
                                            <MenuItem value="2">{t("two-output")}</MenuItem>
                                            <MenuItem value="3">{t("three-output")}</MenuItem>
                                            <MenuItem value="4">{t("four-output")}</MenuItem>
                                            <MenuItem value="5">{t("five-output")}</MenuItem>



                                        </Select>
                                    </div>
                                    {
                                        loading ? <div className={`${dashstyling.waitingdiv}`}>
                                            <Image alt='img' src={writingimg} style={{ width: '100px' }} />
                                            <span>{t("writing")}</span>
                                        </div> : <div>

                                            <button
                                                onClick={(e) => {
                                                    setLoading(true);

                                                    e.preventDefault();
                                                    if (selectedValueRephrazing === 'Rephrase') {
                                                        ForRephrase(prompt, outputlen, cookies.AuthToken).then((resdata) => {
                                                            if (resdata.success) {
                                                                setData([]);
                                                                setProductdata([]);
                                                                setWebData([]);
                                                                setChangeContent(resdata.result);
                                                                successToast(resdata.message);
                                                                countWordsrephrase(resdata.result)
                                                            } else {
                                                                failToast(resdata.message)
                                                            }
                                                            setLoading(false);


                                                        }).catch((err) => {
                                                            console.log(err);
                                                            failToast(err.message)
                                                            setLoading(false);

                                                        })

                                                    } else {
                                                        ForSummarize(prompt, outputlen, cookies.AuthToken).then((resdata) => {
                                                            if (resdata.success) {
                                                                setData([]);
                                                                setProductdata([]);
                                                                setWebData([]);
                                                                setChangeContent(resdata.result);
                                                                successToast(resdata.message);
                                                                countWordsrephrase(resdata.result)
                                                            } else {
                                                                failToast(resdata.message)
                                                            }
                                                            setLoading(false);

                                                        }).catch((err) => {
                                                            console.log(err);
                                                            failToast(err.message)
                                                            setLoading(false);

                                                        })
                                                    }
                                                }}
                                                style={{
                                                    borderRadius: "4px",
                                                    border: "1px solid white",
                                                }}
                                                className="w-auto mt-8 h-10 ml-3 font-normal text-base leading-7 text-white"
                                            >
                                                {
                                                    t("write-for-me")
                                                }
                                            </button>


                                        </div>
                                    }
                                </>
                            ) : null}
                        </form>



                    </div>











                </div>








                <div >{
                    loading ? <>
                        <Image alt='img' src={writingimg} className={`xl:col-span-7 lg:col-span-7    sm:col-span-11 ${dashstyling.loadinggif}`} />
                    </> :
                                    <GrammarlyEditorPlugin clientId="client_HEQwrnxaMVPmTWukHFX1Jt">

                    <div className={`xl:col-span-7 lg:col-span-7  sm:col-span-12 ml-10 ${dashstyling.resultside}`}>

                        <div className={dashstyling.resultheader}>
                            <div className={dashstyling.headericonsdiv}>
                                <Undo className="mr-3" onClick={handleUndoClick} />
                                <Redo onClick={handleRedoClick} />
                            </div>
                            {/* <div className={dashstyling.headericonsdiv}>
                            <span className="mr-3" onClick={handleHeading1Click}>H1</span>
                            <span className="mr-3" onClick={handleHeading2Click}>H2</span>

                            <span className="mr-3" onClick={handleHeading3Click}>H3</span>
                            <span className="mr-3" onClick={handleHeading4Click}>h4</span>

                         </div> */}
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

                        <div id="note" className={` m-2 ${dashstyling.editablearea}`} contentEditable='true' >

                            {
                                data.length > 0 ? data.map((content) => {






                                    return <>
                                        <p>{t("topic")} <br /> {content.topic}</p> <br />
                                        <p>{t("overview")}  <br /> {content.overview}</p> <br />
                                        <p style={{
                                        width:'fit-content',
                                      }}>{t("expanded")}</p> 
                                       {
                                        renderFormattedText(content.expand)
                                       }

                                     

                                        


                                        <hr className="mb-5 mt-5" />

                                     


                                    </>
                                }) : productdata.length > 0 ? productdata.map((content) => {





                                    return <>
                                        <p> {t("p-title")}<br />{content.title}</p> <br />
                                        <p>{t("p-desc")} <br />{content.description}</p> <br />


                                        <hr className="mb-5" />
                                        {/* <TypeAnimation
        sequence={['one']}
        wrapper="p"
        cursor={true}
        repeat={0}
        style={{ fontSize: '15px', display: 'inline-block' }}
    /> */}


                                    </>
                                }) : webdata.length > 0 ? webdata.map((content) => {





                                    return <>
                                        <p> {t("web-title")} <br />{content.title}</p> <br />
                                        <p>{t("web-title-desc")} <br />{content.titledesc}</p> <br />
                                        <p> {t("web-desc")} <br />{content.desc}</p> <br />

                                        <p>{t("web-aboutus")} <br />{content.aboutus}</p> <br />

                                        <p> {t("web-meta")}<br />{content.metadata}</p> <br />


                                        <hr className="mb-5" />

                                        {/* <TypeAnimation
        sequence={['one']}
        wrapper="p"
        cursor={true}
        repeat={0}
        style={{ fontSize: '15px', display: 'inline-block' }}
    /> */}


                                    </>
                                }) : changecontent.length > 0 ? changecontent.map((content) => {





                                    return <>
                                        <p> {t("updated-content")}<br />{content.reply}</p> <br />



                                    </>
                                }) : ''
                            }


                        </div>


                    </div>
                    
                    </GrammarlyEditorPlugin >
}                                    <GrammarlyEditorPlugin clientId="client_HEQwrnxaMVPmTWukHFX1Jt">

                    <h1 className="ml-10 w-96 mt-10 text-3xl">{t("selected-content")}</h1>


                    <div className={`xl:col-span-7 lg:col-span-7  sm:col-span-12 ml-10 mt-10  ${dashstyling.resultside}`}>

                        <div className={dashstyling.resultheader}>
                            {/* <div className={dashstyling.headericonsdiv}>
                                <Undo className="mr-3" onClick={handleUndoClick} />
                                <Redo onClick={handleRedoClick} />
                            </div> */}



                            <div className={dashstyling.headericonsdiv}>
                                <CopyAll className="mr-3" onClick={handleCopyAllClick} />
                                <DownloadForOffline className="mr-3" onClick={downloadUserSelectedFile} />

                            </div>
                            <div className={dashstyling.headericonsdiv}>
                                <span className="text-sm">{t("copy-paste-inst")}</span>
                            </div>

                        </div>
                        <hr className="ml-3 mr-3" />


                        <textarea id="note1"
                            onPaste={(e) => {
                                setUserSelectesContent(e.clipboardData.getData('text')
                                )
                            }}
                            onChange={(e) => {
                                setUserSelectesContent(e.target.value)
                            }}
                            className={`m-2 ${dashstyling.textarea} `} >






                        </textarea>
                    </div>


                    </GrammarlyEditorPlugin >

                </div>







            </div>








            <ParaPhrase open={showModal} close={() => { setShowModal(false) }} />
            <Confirmation open={confirmation} close={() => {
                setConfirmation(false);
                setShowModal(true)
            }}

                cancel={() => {
                    setConfirmation(false);
                }}
            />





        </>
    );
}



