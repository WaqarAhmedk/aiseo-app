import Head from "next/head";
import React, { useRef } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import VideoImage from "../public/Group 6531.png";
import Vector from "../public/Vector 2.png";
import Vector2 from "../public/Vector 3.png";
import Triangle from "../public/XMLID_926_.png";
import Case from "../public/XMLID_234_.png";
import LinkedIn from "../public/Vector (1).png";
import Discord from "../public/Vector (2).png";
import Instagram from "../public/Group 6545.png";
import Facebook from "../public/Vector (3).png";
import Upload from "../public/Group 6547.png";
import Tick from "../public/Group 6549.png";
import Winter from "../public/Group 6551.png";
import Group from "../public/Group 6624.png";
import Icon1 from "../public/material-symbols_speed.png";
import Icon2 from "../public/material-symbols_content-paste-go.png";
import Icon3 from "../public/jam_write-f.png";
import Icon4 from "../public/academicons_ideas-repec.png";
import Plus from "../public/XMLID_944_.png";
import Plus2 from "../public/XMLID_1116_.png";
import Lines from "../public/XMLID_1066_.png";
import Plus10 from "../public/XMLID_1027_.png";
import Plus11 from "../public/XMLID_1112_.png";
import Plus12 from "../public/Ellipse 4.png";
import Plus13 from "../public/Group 6626.png";
import Plus14 from "../public/Group 6627.png";
import Plus5 from "../public/XMLID_975_ (1).png";
import Plus3 from "../public/charm_tick-double.png";
import Plus6 from "../public/fluent-emoji-flat_cross-mark.png";
import Grid from "@mui/material/Grid";
import GLMON from "../public/XMLID_1112_.png";
import Faq from "react-faq-component";
import { useRouter } from "next/router";
import useAuth from "./context/AuthContext";


const pages = ["Pricing", "Features", "Team", "FAQ"];



export default function Home() {

  const paymentref = useRef(null);
  const featureref = useRef(null);
  const teamref = useRef(null);
  const faqref = useRef(null);


  const { user, logout } = useAuth();
  const router = useRouter();

  const data = {
    title: " Asked Questions",
    rows: [
      {
        title: "What is AISEO360?",
        content:
          "Fitbunny is revolutionary and we are different. A project with it's people in mind, equipping its community with habits, skills, and discipline to give that extra competitive advantage in good health.",
      },
      {
        title: "Which languages does AISEO360 support?",
        content:
          "First, we identify their challenges and goals (Eg- Depression,Body Transformation, Better pay cheque, Mental Health, Muscle Gain, etc)",
      },
      {
        title: "Do I have to sign a long-term contract?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "Does AISEO360 provide an AI Image Generator?",
        content:
          "We have created 4444 access passes and a unique collection of 10,000 artworks on the Polygon blockchain. Fitbunny artworks have been uniquely designed with unique graphics, giving it a high rarity score that can be seen in low amounts in the market. Each artwork is different from the others.4444 of 10000 artworks will be airdropped to access pass holders and the remaining sold in open market.",
      },

      {
        title: "Did AISEO360 build a ChatGPT tool?",
        content:
          "Way 1. Reach Level 10 Be an active member of the community by positively engaging in our channels. Meaningful conversations only, spamming will not be tolerated. You can check your current level in our level channel.",
      },
      {
        title:
          "Is Chatsonic by aiseo360 the ultimate ChatGPT alternative??            ",
        content:
          "By connecting your wallet to our website and verifying that you are a Fitbunny holder, you can stake your NFTs and claim rewards daily. The NFT will be locked as long as you want to stake. You will need to complete one whole cycle to receive the $HERB Tokens.",
      },
    ],
  };
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      {/* appbar */}
      <AppBar position="static">
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
              <Image src={Logo} />
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
              {pages.map((page) => (
                <Button
                  onClick={() => {
                    handleCloseNavMenu()
                    if (page === "Pricing") {
                      paymentref.current.scrollIntoView()
                    } else if (page === "Features") {
                      featureref.current.scrollIntoView()
                    } else if (page === "Team") {
                      teamref.current.scrollIntoView()
                    } else if (page === "FAQ") {
                      faqref.current.scrollIntoView()
                    }
                  }}
                  key={page}

                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {
              user ? <button
                onClick={logout}
                style={{
                  borderRadius: "4px",
                  background: "transparent",
                }}
                type="button"
                className="w-32 h-10 font-normal text-base leading-7 text-white"
              >
                Logout
              </button> : <button
                onClick={() => { router.push("/login") }}
                style={{
                  borderRadius: "4px",
                  background: "transparent",
                }}
                type="button"
                className="w-32 h-10 font-normal text-base leading-7 text-white"
              >
                Login
              </button>
            }
            {
              user ? <button
                style={{
                  borderRadius: "4px",
                  background: "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
                }}
                onClick={() => { router.push("/dashboard") }}
                type="button"
                className="w-32 h-10 font-normal text-base leading-7 text-white"
              >
                Dashboard
              </button> : <button
                onClick={() => { router.push("/sign-up") }}
                style={{
                  borderRadius: "4px",
                  background: "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
                }}
                type="button"
                className="w-32 h-10 font-normal text-base leading-7 text-white"
              >
                Get Started
              </button>
            }
          </Toolbar>
        </Container>
      </AppBar>

      <div style={{ padding: "100px", paddingRight: "450px" }} className="bg-black">
        <div
          className="large-text not-italic font-medium text-gray-300"
          style={{ fontSize: "70px", fontFamily: "DM Sans" }}
        >
          Unlock SEO Potential with AI to develop content{" "}
          <span className="faster">faster</span> at better pricing
        </div>
        <Image
          src={Vector}
          className="remove"
          style={{ position: "relative", bottom: "126px", right: "-218px" }}
        />
        <div className="not-italic font-normal lg:text-xl sm:text-sm leading-7 text-white mb-8">
          “There is no such thing as a new idea. It is impossible. We simply
          take a lot of old ideas and put them into a sort of mental
          kaleidoscope. We give them a turn and they make new and curious
          combinations. We keep on turning and making new combinations
          indefinitely; but they are the same old pieces of colored glass that
          have been in use through all the ages.”
        </div>
        <div>
          <button
            style={{
              borderRadius: "4px",
              background: "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
            }}
            type="button"
            className="w-32 h-10 font-normal text-base leading-7 text-white"
          >
            Start Writing
          </button>
          <button
            style={{
              borderRadius: "4px",
              border: "1px solid white",
            }}
            type="button"
            className="w-32 h-10 demoBtn ml-3 font-normal text-base leading-7 text-white"
          >
            Get a demo
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={VideoImage}
          style={{ width: "1000px", position: "absolute" }}
        />
      </div>
      <div className="bg-black grid lg:grid-cols-2 sm:grid-cols-1">
        <div
          style={{
            height: "250px",
            background:
              "radial-gradient(59.77% 59.77% at 50% 47.88%, #0F7173 0%, rgba(78, 41, 120, 0) 100%)",
            filter: "blur(150px)",
          }}
        ></div>
        <div
          style={{
            height: "250px",
            background:
              "radial-gradient(33.61% 33.61% at 40.37% 50%, #D76162 0%, rgba(72, 29, 20, 0.38) 100%)",
            filter: "blur(150px)",
          }}
        ></div>
      </div>
      <div
        className="removeMT not-italic font-bold text-xs leading-7 flex justify-center text-black"
        style={{ letterSpacing: "0.37em", marginTop: "300px" }}
      >
        TRUSTED BY 1000,000 + MARKETERS AT COMPANIES INCLUDING. . .
      </div>
      <div
        className="not-italic font-bold text-sm leading-7 flex justify-center text-black mt-5"
        style={{ letterSpacing: "0.37em", fontSize: "8px" }}
      >
        29 lANGUAGES 2 MIN SIGN UP FREE TO TRY
      </div>
      <Image src={Triangle} style={{ position: "relative", left: "50px" }} />

      <div
        className="flex justify-center not-italic font-bold text-sm leading-7 flex justify-center text-black mt-5"
        style={{ letterSpacing: "0.37em", fontSize: "8px" }}
      >
        ASEO360 Overview
      </div>
      <div
        className="large-text p-10 not-italic flex justify-center font-medium"
        style={{ fontSize: "45px", color: "black", fontFamily: "DM Sans" }}
      >
        What amazing content will you generate
      </div>
      <span className="faster flex justify-center">with AI?</span>
      <div className="flex justify-center">
        <Image
          src={Vector2}
          style={{
            position: "relative",
            bottom: "20px",
            right: "12px",
            top: "1px",
          }}
        />
      </div>
      <div className="not-italic mt-10 font-normal text-lg leading-6 lg:p-10 md:p-10 sm:p-10 text-center text-gray-600 flex justify-center">
        Discover the way of AISEO360 content platform can help determine your{" "}
        <br /> creative workflows.
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            paymentref.current.scrollIntoView();
          }}
          style={{
            borderRadius: "4px",
            background: "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
          }}
          type="button"
          className="w-32 mt-10 h-10 font-normal text-base leading-7 text-white"
        >
          Start For Free
        </button>
      </div>
      <div
        style={{
          height: "150px",
          background:
            "linear-gradient(179.33deg, #FFFFFF 74.84%, #A0B0FF 117.65%)",
        }}
      ></div>

      <div
        style={{
          height: "65px",
          borderRadius: "35px",
          top: "2158px",
          left: "365px",
          width: "500px",
          position: "absolute",
        }}
        className="flex bg-white mobileHide justify-center"
      >
        <div className="not-italic font-medium text-xl leading-7 text-black mt-4">
          Trusted by
        </div>
        <div
          style={{ color: "#4661F5" }}
          className="ml-4 mt-4 mr-4 not-italic font-medium text-xl"
        >
          |
        </div>
        <div className="flex">
          <Image src={LinkedIn} className="ml-2 h-6 mt-4" />
          <Image src={Discord} className="ml-2 h-6 mt-4" />
          <Image src={Instagram} className="ml-2 h-6 mt-4" />
          <Image className="ml-2 h-6 mt-4" src={Facebook} />
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
      {/* using AI */}
      <div className="bg-black p-10">
        <Image src={Winter} style={{ position: "relative", bottom: "45px" }} />
        <div className="flex justify-end">
          <Image
            src={Winter}
            style={{ position: "relative", bottom: "125px" }}
          />
        </div>
        <div
          style={{ marginTop: "100px" }}
          className="not-italic large-text flex justify-center mt-10 font-medium text-4xl text-white"
        >
          Spelling And Grammar Check
        </div>
        <div className="large-text using-ai flex justify-center mt-10">
          Using Artificial Intelligence.
        </div>
        <div className="not-italic addmargin font-normal flex justify-center mt-10 text-2xl leading-7 text-center text-white">
          <ul>
            <li>Foreboded words check</li>
            <li>Keywords check and scoring</li>
            <li>Salable to ideal results</li>
            <li>chat GTP [generate articles, images, videos ([future)</li>
            <li>AI high-quality content creation supports SEO</li>
            <li>
              Generate content ideas from Quora, linked in, Facebook, Google,
              you tube
            </li>
            <li>created by the AI and edited by a human</li>
          </ul>
        </div>
      </div>

      <div
        style={{ padding: "100px" }}
        className="flex addmargin3 bg-black grid lg:grid-cols-2 sm:grid-cols-1 justify-center"
      >
        <div className="custom-box">
          <Image src={Upload} className="mb-6" />
          Up to 14x
          <br />
          <span>Higher Conversion Rates</span>
          <br />
          <span
            className="font-normal text-xs leading-4 text-white relative"
            style={{ top: "20px" }}
          >
            Compared to creatives that are not data
            <br /> backed.
          </span>
          <br />
          <div className="border mt-10 ml-3"></div>
        </div>
        <div className="custom-box">
          <Image src={Tick} className="mb-6" />
          Over 95%
          <br />
          <span>of the users improve CTR</span>
          <br />
          <span
            className="font-normal text-xs leading-4 text-white relative"
            style={{ top: "20px" }}
          >
            In their first month,using our creatives.
          </span>
          <br />
          <div className="border mt-10 ml-3"></div>
        </div>
      </div>
      <div style={{ background: "#DCDADA" }}>
        <div className="pt-10 flex justify-center">
          <Image src={Case} />
        </div>
        <div className="large-text not-italic flex justify-center font-medium text-5xl text-black">
          Best Examples And
        </div>
        <Image style={{ position: "relaive", left: "850px" }} src={Plus} />
        <div className="faster flex justify-center">Use Case</div>
        <div className="flex justify-center">
          <Image
            src={Vector2}
            style={{
              position: "relative",
              bottom: "20px",
              right: "12px",
              top: "1px",
            }}
          />
        </div>
        <div
          style={{ padding: "150px", paddingBottom: "0px" }}
          className="grid addmargin2 gap-8 lg:grid-cols-2 sm:grid-cols-1" >
          <div className="p-10">
            <Image
              className="mt-10"
              style={{ position: "relative", right: "35px", top: "25px" }}
              src={Icon2}
            />
            <div className="not-italic font-bold text-xl text-black">
              How does it work
            </div>
            <div>
              Your AI sidekick is trained to produce high-converting marketing
              copy
            </div>
            <Image
              className="mt-10"
              style={{ position: "relative", right: "35px", top: "25px" }}
              src={Icon1}
            />
            <div className="not-italic font-bold text-xl text-black">
              Writing copyright
            </div>
            <div>
              Your AI sidekick is trained to produce high-converting marketing
              copy
            </div>
          </div>
          <div className="p-10">
            <Image
              className="mt-10"
              style={{ position: "relative", right: "35px", top: "25px" }}
              src={Icon4}
            />
            <div className="not-italic font-bold text-xl text-black">
              Steps in build SEO type content
            </div>
            <div>
              Your AI sidekick is trained to produce high-converting marketing
              copy
            </div>
            <Image
              className="mt-10"
              style={{ position: "relative", right: "35px", top: "25px" }}
              src={Icon3}
            />
            <div className="not-italic font-bold text-xl text-black">
              Writing blogs/Vlogger
            </div>
            <div>
              Your AI sidekick is trained to produce high-converting marketing
              copy
            </div>
          </div>
        </div>
        {/* <div>
        Create Engaging Marketing Copy With 
        </div> */}
        <div
          className="large-text not-italic flex justify-center font-medium"
          style={{ fontSize: "45px", color: "black", fontFamily: "DM Sans" }}
        >
          Create Engaging Marketing Copy With
        </div>
        <span className="faster flex justify-center">SEO360</span>
        <div className="flex justify-center">
          <Image
            src={Vector2}
            style={{
              position: "relative",
              bottom: "20px",
              right: "0px",
              top: "1px",
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-10">
          <div className="p-10 product ml-10" style={{ background: "white" }}>
            <form>
              <div>
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 product-name border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Product Name:"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows="4"
                    className="product-name mt-8 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Product Description:"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-10 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Start Creating
              </button>

              <div className="not-italic font-bold text-lg leading-5 text-white mt-20">
                Your AI sidekick is trained to produce high-converting marketing
                copy
              </div>
            </form>
          </div>
          <div className="p-10 pt-0">
            <div className="product p-10 not-italic font-normal text-lg leading-6 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ornare magna a enim ultricies.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ornare magna a enim ultricies, sed imperdiet leo cursus. Cras
              luctus magna vel placerat lobortis. Donec sed massa ultrices est
              consectetur pulvinar eu in velit. Aenean pharetra libero eget
              tellus blandit, porttitor bibendum mauris fringilla. Maecenas
              vestibulum est sed dui lacinia, ut dictum quam tincidunt. In
              faucibus tellus sed dapibus lobortis. Ut lorem ante, consequat eu
              orci non, imperdiet fringilla arcu. Maecenas nunc nisl, iaculis
              eget diam non, condimentum maximus nisi. Curabitur luctus luctus
              nibh quis pulvinar. Nullam ut elementum diam, ut tincidunt odio.
              Aliquam varius vehicula ipsum, et porta lectus tincidunt et.
              Nullam non neque sed libero lacinia lobortis ac nec elit. Sed et
              iaculis dui, sed dictum est. Cras pretium, metus eget dapibus
              malesuada, erat odio viverra augue, ut posuere odio enim eu quam.
              Nullam leo augue, mattis id gravida at, maximus sit amet nibh.
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={Plus2} className="mr-10 mb-10" />
        </div>
        <div className="flex justify-center" ref={featureref}>
          <Image src={Group} />
        </div>
        <div
          ref={paymentref}
          className="mt-10 large-text flex justify-center not-italic font-medium text-black"
          style={{ fontSize: "70px" }}
        >
          <Image src={Plus5} />
          Pricing
        </div>
        <Image
          src={Lines}
          style={{
            position: "absolute",
            width: "150px",
            height: "200px",
            left: "1100px",
          }}
          className="remove"
        />
        <div className="grid gap-8 p-20 lg:grid-cols-3 sm:grid-cols-1">
          <div
            className="bg-red"
            style={{
              background: "#09405A",
              border: "1px solid #BFBFBF",
              borderRadius: "12px",
              padding: "40px",
            }}
          >
            <div className="text-white text-lg">Free</div>
            <div
              className="not-italic font-bold text-blue-600"
              style={{ fontSize: "40px" }}
            >
              $0 <br />
              <span className="not-italic font-normal text-sm text-white">
                Per Month
              </span>{" "}
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-lg leading-5 text-white ml-2">
                500 Word Trial
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-lg leading-5 text-white ml-2">
                Unlimited Logins
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-lg leading-5 text-white ml-2">
                100+ Languages
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus6} />
              <span
                className="not-italic font-normal text-lg leading-5 text-white ml-2"
                style={{ color: "rgba(255, 255, 255, 0.4)" }}
              >
                Genius Editor Tool
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus6} />
              <span
                className="not-italic font-normal text-lg leading-5 text-white ml-2"
                style={{ color: "rgba(255, 255, 255, 0.4)" }}
              >
                Newest Features
              </span>
            </div>
            <button
              className="mt-10"
              style={{
                background: " #040E12",
                borderRadius: "8px",
                color: "white",
                width: "150px",
                height: "40px",
              }}
              onClick={() => { router.push({ pathname: "/payment", query: { price: "price_1MYnMkLSI0nFoTImt643soEx" } }) }}
            >
              Try Now!
            </button>
          </div>
          <div
            className="bg-red"
            style={{
              background: "white",
              border: "1px solid #BFBFBF",
              borderRadius: "12px",
              padding: "30px",
            }}
          >
            <div className="text-black text-lg">Go-Getter Plan</div>
            <div
              className="not-italic font-bold text-blue-600"
              style={{ fontSize: "40px" }}
            >
              $2.95
              <br />
              <span className="not-italic font-normal text-sm leading-4 text-black">
                Per Month
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                40,000 Monthly Word Limit
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                {" "}
                Unlimited Logins
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                {" "}
                100+ Languages
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                {" "}
                Genius Editor Tool
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                Newest Features
              </span>
            </div>
            <button
              className="mt-10"
              style={{
                background: " #040E12",
                borderRadius: "8px",
                color: "white",
                width: "150px",
                height: "40px",
              }}
              onClick={() => { router.push({ pathname: "/payment", query: { price: "price_1MYnNrLSI0nFoTImVJGcgiUD" } }) }}

            >
              Try Now!
            </button>
          </div>
          <div
            className="bg-red"
            style={{
              background: "white",
              border: "1px solid #BFBFBF",
              borderRadius: "12px",
              padding: "25px",
            }}
          >
            <div className="text-black text-lg">Creator Boss</div>
            <div
              className="not-italic font-bold text-blue-600"
              style={{ fontSize: "40px" }}
            >
              $34.95 <br />
              <span className="not-italic font-normal text-sm leading-4 text-black">
                Per Month
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                120,000 Monthly Word Limit
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                {" "}
                Unlimited Logins
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                {" "}
                100+ Languages
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                {" "}
                Genius Editor Tool
              </span>
            </div>
            <div className="flex p-1">
              <Image src={Plus3} />
              <span className="not-italic font-normal text-sm leading-5 text-black ml-1">
                Newest Features
              </span>
            </div>
            <button
              className="mt-10"
              style={{
                background: " #040E12",
                borderRadius: "8px",
                color: "white",
                width: "150px",
                height: "40px",
              }}
            >
              Try Now!
            </button>
          </div>
        </div>
        <div className="p-10">
          <Image src={Plus10} />
        </div>
        <div
          className="large-text flex justify-center not-italic font-medium text-black"
          style={{ fontSize: "73px" }}
        >
          Testimonials <br />
          <Image src={Plus11} />
        </div>
        <div className="flex justify-center mt-10" ref={teamref}>
          <div className="red-box">
            <Image style={{ margin: "55px" }} src={Plus12} />
          </div>
        </div>
        <div className="mt-10 bg-black">
          <div className="grid p-10 gap-8 lg:grid-cols-3 sm:grid-cols-1">
            <div>
              <Image src={Plus14} />
            </div>
            <div className="large-text not-italic font-bold text-5xl ml-10 text-white">
              Zack Erwin <br />
              <span className="not-italic font-normal text-2xl leading-7 text-center text-gray-600">
                PPC Marketing
              </span>
            </div>
            <div>
              <Image
                src={Plus13}
                className="mr-10"
                style={{ float: "right" }}
              />
            </div>
          </div>
          <div className="flex large-text justify-center not-italic font-medium text-5xl text-center text-white" ref={faqref}>
            Frequently Asked
          </div>
          <div className="faster flex justify-center">Questions</div>
          <div className="flex justify-center">
            <Image
              src={Vector2}
              style={{
                position: "relative",
                bottom: "20px",
                right: "-16px",
                top: "1px",
              }}
            />
          </div>
          {/* FAQ */}
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
              <div style={{ width: "800px" }}>
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
          <div
            className="grid lg:grid-cols-2 sm:grid-cols-1 p-10"
            style={{
              width: "900px",
              background: "#091B24",
              borderRadius: "3px",
            }}
          >
            <div>
              <div className="flex">
                <Image src={Logo} />
                <br />
                <span className="not-italic font-normal text-base leading-7 text-white ml-3 mt-3">
                  AISEO360
                </span>
              </div>
              <div className="not-italic font-bold text-xl text-white">
                Want the latest News about AISEO360?
              </div>
              <div className="not-italic font-normal text-sm text-white">
                Get access to monthly development updates, exciting new <br />{" "}
                projects, and much, much more.
              </div>
              <div>
                <div>
                  <input type="text" id="first_name" className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter e-mail address" required />
                </div>
              </div>
            </div>
            <div>
              <h2 className="remove flex justify-center not-italic font-bold text-2xl leading-8 text-white ml-20">
                Socials
              </h2>
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
      </div>
    </div>
  );
}
