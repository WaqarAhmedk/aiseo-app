import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../public/Initial_Letter_D_Digital_Logo_Design_Template-removebg-preview (1) 1.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Triangle from "../public/new/XMLID_926_.png";
import BlackTriangle from "../public/new/blacktrianlge.png";
import { DoneAll } from "@mui/icons-material";
import dotsimg from "../public/new/Group 33804.png";
import videoCard from "../public/new/Group 6531.png";
import Case from "../public/XMLID_234_.png";
import featureContainer from "../public/new/Group33843.png";
import LinkedIn from "../public/Vector (1).png";
import Discord from "../public/Vector (2).png";
import Instagram from "../public/Group 6545.png";
import Facebook from "../public/Vector (3).png";
import Upload from "../public/Group 6547.png";
import Icon1 from "../public/material-symbols_speed.png";
import Icon2 from "../public/material-symbols_content-paste-go.png";
import Icon3 from "../public/jam_write-f.png";
import Icon4 from "../public/academicons_ideas-repec.png";
import Plussign from "../public/new/XMLID_944_.png";
import BestSupportimg from "../public/new/Group6551.png";
import PlusBlack from "../public/XMLID_944_.png";
import Halfcircle from "../public/XMLID_1116_.png";
import Lines from "../public/XMLID_1066_.png";
import Plus10 from "../public/XMLID_1027_.png";
import Plus11 from "../public/XMLID_1112_.png";
import Plus13 from "../public/Group 6626.png";
import Plus14 from "../public/Group 6627.png";
import Plus5 from "../public/XMLID_975_ (1).png";
import Plus3 from "../public/charm_tick-double.png";
import Plus6 from "../public/fluent-emoji-flat_cross-mark.png";
import Faq from "react-faq-component";
import { useRouter } from "next/router";
import useAuth from "../context/AuthContext";
import axios from "axios";
import address from "../address";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useCookies } from "react-cookie";
import { CircularProgress, Select } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import { team } from "../team";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import TermsAndConditions from "../components/termsandconditions";
import GetDemo from "../components/getdemo";

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
      color: "black",
    },
  }).showToast();
};
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
      color: "black",
    },
  }).showToast();
};

export default function Home() {
  const paymentref = useRef(null);
  const featureref = useRef(null);
  const teamref = useRef(null);
  const faqref = useRef(null);

  const { user, logout } = useAuth();
  const router = useRouter();
  const [cookies] = useCookies();
  const [loading, setLoading] = useState(false);
  const [currentteam, setCurrentTeam] = useState(0);
  const [openpop, setOpenPop] = useState(false);
  const { t, lang } = useTranslation("common");
  const title = t("titlea");
  const [opendemo,setopendemo] = useState(false);

  const [opentc, setOpentc] = useState(false);
  // const rows = t("rows.title", { returnObjects: true });

  let rows = t("common:rows", { count: 1 }, { returnObjects: true });

  const data = {
    title: title,
    rows: rows,
  };

  const pages = [
    t("page-pricing"),
    t("page-features"),
    t("page-team"),
    t("page-faq"),
  ];

  const setCookie = (locale) => {
    document.cookie = `NEXT_LOCALE = ${locale}; max - age=31536000; path = /`;
  };
  const nextImage = () => {
    if (currentteam == team.length - 1) {
      setCurrentTeam(0);
    } else {
      setCurrentTeam(currentteam + 1);
     
    }
  };
  const previousImage = () => {
    if (currentteam == 0) {
      setCurrentTeam(team.length - 1);
    } else {
      setCurrentTeam(currentteam - 1);
    }
  };

  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleFreeSUb = () => {
    setLoading(true);
    if (!user) {
      failToast(t("loginfirst"));
      setLoading(false);
    } else {
      axios
        .post(
          `${address}/stripe/create-free-sub`,
          {},
          {
            headers: {
              authtoken: cookies.AuthToken,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            successToast(res.data.message);
            setLoading(false);
            router.push("/dashboard");
          } else {
            failToast(res.data.message);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log("catch error in free subscription", error.message);
        });
    }
  };

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // useEffect(() => {

  //     setTimeout(() => {
  //         if (user) {
  //             console.log('dsadsadghsadhsja');
  //             setOpenPop(false)
  //         } else {
  //             console.log('dsadsadghsadhsja');

  //             setOpenPop(true);
  //         }
  //     }, 2000)

  // }, [user])
  return (
    <div className="parent">
      {/* appbar */}
      <ScrollToTop smooth />
      {/* <TrialPopup open={openpop} close={() => { setOpenPop(false) }} /> */}
      <div div className="section1">
        <div
          className="flex absolute text-white space-x-5 "
          style={{ right: "0px" }}
        >
          <Link
            href="/"
            locale="en"
            onClick={() => {
              setCookie("en");
            }}
          >
            {/* <h2>English</h2> */}
          </Link>
          <Link
            href="/"
            locale="de"
            onClick={() => {
              setCookie("de");
            }}
          >
            {/* <h2>German</h2> */}
          </Link>
          <Link
            href="/"
            locale="es"
            onClick={() => {
              setCookie("es");
            }}
          >
            {/* <h2>Spanish</h2> */}
          </Link>
        </div>
        <Image alt="image" src={Plussign} className="section1-plusimg" />
        <Image alt="image" src={dotsimg} className="section1-dotsimg" />

        <Image alt="image" src={Triangle} className="section1-triangleimg" />

        <AppBar position="static" className="section1-appbar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {/* <Avatar alt="Remy Sharp" className="h-8 w-auto lg:block" src={Logo} /> */}
                <Image alt="image" src={Logo} />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        className="text-white hover:text-indigo-400"
                        textAlign="center"
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Avatar alt="Remy Sharp" src={Logo} />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page, index) => (
                  <Button
                    onClick={() => {
                      handleCloseNavMenu();
                      if (page === t("page-pricing")) {
                        paymentref.current.scrollIntoView();
                      } else if (page === t("page-features")) {
                        featureref.current.scrollIntoView();
                      } else if (page === t("page-team")) {
                        teamref.current.scrollIntoView();
                      } else if (page === t("page-faq")) {
                        faqref.current.scrollIntoView();
                      }
                    }}
                    key={page}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              {user ? (
                <button
                  onClick={logout}
                  style={{
                    borderRadius: "4px",
                    background: "transparent",
                  }}
                  type="button"
                  className="w-32 h-10 font-normal text-base leading-7 text-white"
                >
                  {t("logout")}
                </button>
              ) : (
                <button
                  onClick={() => {
                    router.push("/login");
                  }}
                  style={{
                    borderRadius: "4px",
                    background: "transparent",
                  }}
                  type="button"
                  className="w-32 h-10 font-normal text-base leading-7 text-white"
                >
                  {t("login")}
                </button>
              )}
              {user ? (
                <button
                  style={{
                    borderRadius: "4px",
                    background:
                      "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
                  }}
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                  type="button"
                  className="w-auto h-10 pl-3 pr-3 font-normal text-base leading-7 text-white"
                >
                  {t("dashboard")}
                </button>
              ) : (
                <button
                  onClick={() => {
                    router.push("/sign-up");
                  }}
                  style={{
                    borderRadius: "4px",
                    background:
                      "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
                  }}
                  type="button"
                  className="w-32 h-10 font-normal text-base leading-7 text-white"
                >
                  {t("title")}{" "}
                </button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        <Container className="section1-container">
          <div className="section1-heading">{t("s1heading")}</div>
          <div className="section1-para">{t("s1para")}</div>
          <div className="section1-btn-div">
            <button
              style={{
                borderRadius: "4px",
                background: "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
              }}
              type="button"
              className="w-auto h-10 pl-3 pr-3 font-normal text-base leading-7 text-white"
              onClick={() => {
                console.log(user);
                if (user) {
                  if (user.type === "trial") {
                    router.push("/dashboard");
                  } else if (user.plan === "null") {
                    failToast(t("select-plan"));
                    paymentref.current.scrollIntoView();
                  } else {
                    router.push("/dashboard");
                  }
                } else {
                  router.push("/login");
                }
              }}
            >
              {t("section1-start-writing")}
            </button>
            <button
            onClick={()=>{
              setopendemo(true)
            }}
              style={{
                borderRadius: "4px",
                border: "1px solid white",
              }}
              type="button"
              className="w-auto h-10 pl-3 pr-3 demoBtn ml-3 font-normal text-base leading-7 text-white"
            >
              {t("section1-demo")}{" "}
            </button>
          </div>
          <Image alt="image" src={videoCard} className="section1-videocard" />

          <video
            className="section1-vid"
            src={require("../public/new/03109062659.mp4")}
            autoPlay
            muted
            loop
            controls
          />
        </Container>
      </div>
      <div className="section2">
        <Image alt="image" src={Lines} className="section2-lines-img" />
        <Container>
          <div className="section2-trusted">{t("section2-trusted")}</div>
          <div className="section2-about">
            <div className="section2-about-details">
              <DoneAll className="section2-doneall" />
              <span>{t("section2-languages")}</span>
            </div>
            <div className="section2-about-details">
              <DoneAll className="section2-doneall" />
              <span>{t("section2-2minsignup")}</span>
            </div>
            <div className="section2-about-details">
              <DoneAll className="section2-doneall" />
              <span>{t("section2-free2try")}</span>
            </div>
          </div>

          <div className="section2-seo-overview">
            {t("section2-aiseo-overview")}{" "}
          </div>

          <div className="section2-generate">
            {t("section2-generate-amazing-content")}
          </div>
          <div className="section2-discover">
            {t("section2-discover-content")}
          </div>
          <button className="section2-btn">
            {t("section2-start-creating")}{" "}
          </button>
        </Container>
        <Image alt="image" src={BlackTriangle} className="section2-triangle" />
      </div>

      <div className="section3">
        <div className="section3-trustedby-main">
          <Image
            alt="image"
            src={BestSupportimg}
            className="section3-bestsupport"
          />
          <div className="section3-trustedby">
            <div className="not-italic font-medium text-xl leading-7 text-black mt-4">
              {t("section3-trustedby")}{" "}
            </div>
            <div
              style={{ color: "#4661F5" }}
              className="ml-4 mt-4 mr-4 not-italic font-medium text-xl"
            >
              |
            </div>
            <div className="flex">
              <Image alt="image" src={LinkedIn} className="ml-2 h-6 mt-4" />
              <Image alt="image" src={Discord} className="ml-2 h-6 mt-4" />
              <Image alt="image" src={Instagram} className="ml-2 h-6 mt-4" />
              <Image alt="image" className="ml-2 h-6 mt-4" src={Facebook} />
            </div>
            <div
              style={{ color: "#4661F5" }}
              className="ml-4 mt-4 mr-4 not-italic font-medium text-xl"
            >
              |
            </div>
            <div className="not-italic font-medium text-xl leading-7 text-black mt-4">
              GOOGLE
            </div>
          </div>
          <Image
            alt="image"
            src={BestSupportimg}
            className="section3-bestsupport"
          />
        </div>
        <div>
          <div className="section3-gcheck ">
            {t("section3-spell-grammer-check")}
          </div>
          <div className="section3-usingai">{t("section3-usingai")}</div>
          <div className="not-italic  font-normal flex justify-center mt-10 text-2xl leading-7 text-center text-white">
            <ul className="section3-ul">
              <li>{t("section3-ul-li1")}</li>
              <li>{t("section3-ul-li2")}</li>
              <li>{t("section3-ul-li3")}</li>
              <li>{t("section3-ul-li4")}</li>
              <li>{t("section3-ul-li5")}</li>
              <li>{t("section3-ul-li6")}</li>
              <li>{t("section3-ul-li7")}</li>
            </ul>
          </div>
        </div>
        <div className="section3-boxes-main">
          <div className="section3-custombox">
            <Image alt="image" src={Upload} className="mb-6" />
            {t("section3-upto14")} <br />
            <span>{t("section3-higherconversion")}</span>
            <br />
            <span
              className="font-normal text-xs leading-4 text-white relative"
              style={{ top: "20px" }}
            >
              {t("section3-compare-to-data-backed")}
              <br /> {t("section3-compare-backed")}
            </span>
            <br />
            <div className="border mt-10 ml-3"></div>
          </div>
          <div className="section3-custombox">
            <Image alt="image" src={Upload} className="mb-6" />
            {t("section3-upto14")}
            <br />
            <span>{t("section3-higherconversion")}</span>
            <br />
            <span
              className="font-normal text-xs leading-4 text-white relative"
              style={{ top: "20px" }}
            >
              {t("section3-compare-to-data-backed")}
              <br /> {t("section3-compare-backed")}
            </span>
            <br />
            <div className="border mt-10 ml-3"></div>
          </div>
        </div>
        <div className="section3-usecase-main">
          <Image alt="image" src={Case} className="section3-img" />

          <div className="section3-usecase">
            <div className="large-text not-italic flex justify-center font-medium text-5xl text-black">
              {t("section3-bestexamples")}
            </div>
            <div className="section3-usecase-t">{t("section3-usecases")}</div>
          </div>
          <Image alt="image" src={PlusBlack} className="section3-img2" />
        </div>
      </div>

      <div className="section4">
        <Container className="section4-container">
          <div className=" grid  gap-8 lg:grid-cols-2 sm:grid-cols-1">
            <div className="p-10">
              <Image
                alt="image"
                className="mt-10"
                style={{ position: "relative", right: "35px", top: "25px" }}
                src={Icon2}
              />
              <div className="not-italic font-bold text-xl text-black">
                {t("section4-howit-works")}
              </div>
              <div>{t("section4-howit-works-details")}</div>
              <Image
                alt="image"
                className="mt-10"
                style={{ position: "relative", right: "35px", top: "25px" }}
                src={Icon1}
              />
              <div className="not-italic font-bold text-xl text-black">
                {t("section4-writing-copyright")}
              </div>
              <div>{t("section4-writing-copyright-details")}</div>
            </div>
            <div className="p-10">
              <Image
                alt="image"
                className="mt-10"
                style={{ position: "relative", right: "35px", top: "25px" }}
                src={Icon4}
              />
              <div className="not-italic font-bold text-xl text-black">
                {t("section4-steps-in-seo")}
              </div>
              <div>{t("section4-steps-in-seo-details")}</div>
              <Image
                alt="image"
                className="mt-10"
                style={{ position: "relative", right: "35px", top: "25px" }}
                src={Icon3}
              />
              <div className="not-italic font-bold text-xl text-black">
                {t("section4-writng-blogs")}
              </div>
              <div>{t("section4-writng-blogs-details")}</div>
            </div>
          </div>

          <div className="section4-create-market">
            <div>
              {" "}
              {t("section4-create-enganging-copy")}
              <span className=" section4-seospan"> {t("section4-seo360")}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-10">
            <div className="p-10  ml-10 section4-product">
              <form>
                <div>
                  <div>
                    <input
                      className="section4-input mt-8 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      id="first_name"
                      placeholder="Product Name:"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      rows="4"
                      className="section4-input mt-8 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product Description:"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#09405A" }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-10 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {t("section4-start-creating")}{" "}
                </button>

                <div className="not-italic font-bold text-lg leading-5 text-white mt-20">
                  {t("section4-side1-deatail")}
                </div>
              </form>
            </div>
            <div className="p-10 pt-0">
              <div className="section4-product p-10 not-italic font-normal text-lg leading-6 text-white">
                {t("section4-side2-top")}
                <br />
                <br />
                {t("section4-side2-bottom")}
              </div>
            </div>
          </div>
          <Image
            alt="image"
            src={Halfcircle}
            className="section4-img"
            ref={featureref}
          />

          <div className="section4-features">
            <div className="section4-features-details">
              <div className="section4-featurediv">
                {t("section4-features")}
              </div>

              <div className="section4-feature-heading">
                {t("section4-features-every1")}{" "}
                <span style={{ color: "#35A2D7" }}>
                  {t("section4-features-quickly")}
                </span>
              </div>
              <div className="section4-features-para">
                {t("section4-features-generate-high")}
              </div>
              <div className="section4-features-btn-div">
                <button className="section4-btn">
                  {t("section4-features-agree")}
                </button>
                <button className="section4-btn-2">
                  {t("section4-features-signup")}
                </button>
              </div>
            </div>
            <Image
              alt="image"
              src={featureContainer}
              className="feature-container"
            />
          </div>

          <Image
            alt="image"
            src={Lines}
            className="section4-pricing-img-lines"
          />

          <div className="section4-pricing" ref={paymentref} id="payment-div">
            <Image alt="image" src={Plus5} className="section4-pricing-img" />

            <div className="section4-price">{t("section4-pricing")}</div>

            <div className="grid  p-20 lg:grid-cols-2 sm:grid-cols-1">
              <div className="section4-pricediv">
                <div className="text-white text-lg">{t("section4-free")}</div>
                <div
                  className="not-italic font-bold text-blue-600"
                  style={{ fontSize: "40px" }}
                >
                  {t("section4-price-0")} <br />
                </div>
                <span style={{ color: "gray" }}>{t("section4-permonth")}</span>
                <div className="flex p-1 mt-3">
                  <Image alt="image" src={Plus3} />
                  <span className="not-italic font-normal text-lg leading-5 text-white ml-2">
                    {t("section4-price-1-wordslimit")}
                  </span>
                </div>
                <div className="flex p-1 mt-2">
                  <Image alt="image" src={Plus3} />
                  <span className="not-italic font-normal text-lg leading-5 text-white ml-2">
                    {t("section4-price-1-unlimited-login")}
                  </span>
                </div>
               
                <div className="flex p-1 mt-2">
                  <Image alt="image" src={Plus6} />
                  <span
                    className="not-italic font-normal text-lg leading-5 text-white ml-2"
                    style={{ color: "rgba(255, 255, 255, 0.4)" }}
                  >
                    {t("section4-price-1-editor-tool")}
                  </span>
                </div>
                <div className="flex p-1 mt-2">
                  <Image alt="image" src={Plus6} />
                  <span
                    className="not-italic font-normal text-lg leading-5 text-white ml-2"
                    style={{ color: "rgba(255, 255, 255, 0.4)" }}
                  >
                    {t("section4-price-1-new-features")}{" "}
                  </span>
                </div>
                {loading ? (
                  <button
                    className="mt-10 section4-trynow-btns"
                    style={{
                      background: " #040E12",
                      color: "white",
                    }}
                  >
                    <CircularProgress />{" "}
                  </button>
                ) : (
                  <button
                    className="mt-10 section4-trynow-btns"
                    style={{
                      background: " #040E12",
                      color: "white",
                    }}
                    onClick={handleFreeSUb}
                  >
                    {t("section4-price-1-trynow")}{" "}
                  </button>
                )}
              </div>
              <div
                className="section4-pricediv"
                style={{ background: "white" }}
              >
                <div className="text-black text-lg">
                  {t("section4-price-2-go-getter")}
                </div>
                <div
                  className="not-italic font-bold text-blue-600"
                  style={{ fontSize: "40px" }}
                >
                  {t("section4-price-2-price")}
                  <br />
                </div>
                <span style={{ color: "gray" }}>
                  {t("section4-price-2-permonth")}{" "}
                </span>
                <div className="flex p-1 mt-3">
                  <Image alt="image" src={Plus3} />
                  <span className="not-italic font-normal text-sm text-black ml-1">
                    {t("section4-price-2-word-limit")}
                  </span>
                </div>
                <div className="flex p-1 mt-2">
                  <Image alt="image" src={Plus3} />
                  <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                    {" "}
                    {t("section4-price-2-unlimited-login")}
                  </span>
                </div>
               
                <div className="flex p-1 mt-2">
                  <Image alt="image" src={Plus3} />
                  <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                    {" "}
                    {t("section4-price-2-editor-tool")}
                  </span>
                </div>
                <div className="flex p-1 mt-2">
                  <Image alt="image" src={Plus3} />
                  <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                    {t("section4-price-2-new-features")}
                  </span>
                </div>
                <button
                  className="mt-10 section4-trynow-btns"
                  onClick={() => {
                    router.push({
                      pathname: "/payment",
                      query: { price: "price_1MYnNrLSI0nFoTImVJGcgiUD" },
                    });
                  }}
                >
                  {t("section4-price-2-trynow")}
                </button>
              </div>
              
            </div>
          </div>
        </Container>
      </div>

      <div className="section5" ref={teamref}>
        <Image alt="image" src={Plus10} className="section5-dots" />
        <div className="section5-imagecover">
          <Image
            alt="image"
            src={team[currentteam].image}
            className="section5-team-img"
          />
        </div>
        <div className="section5-testimo large-text flex justify-center not-italic font-medium text-black">
          {t("section5-testimonials")} <br />
          <Image alt="image" src={Plus11} className="testimon-img" />
        </div>
        <div className="grid p-10 gap-8 lg:grid-cols-3 sm:grid-cols-1 section5-details">
          <div>
            <Image alt="image" src={Plus14} onClick={previousImage} />
          </div>
          <div className="large-text not-italic font-bold text-5xl mr-10 text-white">
            {team[currentteam].name} <br />
            <span className="not-italic font-normal text-2xl leading-7 text-center text-gray-600 ml-11">
              {team[currentteam].role}{" "}
            </span>
          </div>
          <div>
            <Image
              alt="image"
              src={Plus13}
              className="mr-10"
              style={{ float: "right" }}
              onClick={nextImage}
            />
          </div>
        </div>

        <div className="section5-faq" ref={faqref}>
          <div
            className="flex large-text justify-center not-italic font-medium text-5xl text-center text-white"
            ref={faqref}
          >
            {t("section5-fa")}
          </div>
          <div className="section5-question"> {t("section5-q")}</div>
          <div className="flex justify-center">
            <div
              className="coreteam"
              id="FAQsScroll"
              style={{
                color: "white",
                paddingTop: "150px",
                paddingBottom: "150px",
              }}
            >
              <div className="section5-faqdiv">
                <Faq data={data} />
              </div>
            </div>
            <div className="bg-change bg-black"></div>
            <div className="bg-change-2 bg-black"></div>
          </div>
        </div>
        <div
          style={{ height: "315px" }}
          className="flex bg-black justify-center"
        >
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-10 section5-footer">
            <div className="section5-footer-1">
              <div className="flex">
                <Image alt="image" src={Logo} />
                <br />
                <span className="not-italic font-normal text-base leading-7 text-white ml-3 mt-3">
                  AISEO360
                </span>
              </div>
              <div className="not-italic font-bold text-xl text-white mt-3">
                {t("section5-latest-about")}
              </div>
              <div className="mt-2 not-italic font-normal text-sm text-white">
                {t("section5-get-access")}
                <br /> {t("section5-much-more")}
              </div>
              <div className="flex text-center">
                <input
                  type="text"
                  id="first_name"
                  className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter e-mail address"
                  required
                />
                <button className="subscribe-btn">
                  {t("section5-subscribe")}
                </button>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  color: "blue",
                }}
              >
                <span
                  className="tc"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={()=>{setOpentc(true)}}
                >
                  Terms and Condtions
                </span>
              </div>
            </div>
            <div className=" not-italic font-bold text-2xl leading-8 text-white mr-20">
              <h2 className="mb-4 mt-3">{t("section5-socials")}</h2>
              <ul className="no-order remove">
                <li>-Instagram</li>
                <li>-Linked In</li>
                <li>-Facebook</li>
                <li>-Twitter</li>
                <li>-Discord</li>
                <li>-Youtube</li>
                <li>-Live Chat</li>
                <li>-Email</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section5-blue"></div>

        <div className="section5-red"></div>
      </div>
      <TermsAndConditions
        open={opentc}
        close={() => {
          setOpentc(false);
        }}
      />
      <GetDemo
        open={opendemo}
        close={() => {
          setopendemo(false);
        }}
      />
    </div>
  );
}
