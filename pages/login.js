import React, { useState } from "react";
import Computer from "../public/search-engine-optimization-4111000_1920 1.png";
import Logo from "../public/Initial_Letter_D_Digital_Logo_Design_Template-removebg-preview (1) 1.png";
import Image from "next/image";
import useAuth from "../context/AuthContext";
import { useRouter } from "next/router";
import { GoogleLogin } from "@react-oauth/google";
import { CircularProgress } from "@mui/material";

import useTranslation from 'next-translate/useTranslation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { logIn, loading, SignUpwithGoogle } = useAuth();
  const [password, setPassword] = useState("");
  const { t } = useTranslation('signin');
  const handleLogin = (e) => {
    e.preventDefault();
    logIn(email, password)

  }
  const SignUpWithGoogle = async (res) => {
    SignUpwithGoogle(res)

  }



  return (
    <div className="loginmaindiv">
      <div className="absolute paymentLogo2">
        <Image src={Logo} className='ml-5 logoimage' />
        <div className="not-italic font-normal text-lg text-white">
          {
            t("hello")
          }
        </div>
      </div>
      <div style={{ height: "100vh" }} className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="payment" >
          <div className="mt-20 ml-8">
            <label
              htmlFor="first_name"
              className="not-italic font-normal text-sm leading-6 text-blue-600"
              style={{ opacity: "0.7" }}
            >
              {
                t("email")
              }            </label>
            <input
              style={{ width: "70%" }}
              onChange={(e) => { setEmail(e.target.value) }}

              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Zack erwin"
              required
            />
          </div>
          <div className="mt-8 ml-8">
            <label
              htmlFor="first_name"
              className="not-italic font-normal text-sm leading-6 text-blue-600"
              style={{ opacity: "0.7" }}
            >
              {
                t("password")
              }
            </label>
            <input
              style={{ width: "70%" }}
              type="password"
              id="first_name"
              onChange={(e) => { setPassword(e.target.value) }}

              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="*********"
              required
            />
          </div>
          {
            loading ? <button
              style={{
                borderRadius: "4px",
                border: "1px solid white",
                width: '60%'
              }}


              className=" mt-8  ml-9 h-10 ml-3 font-normal text-base leading-7 text-white"
            >
              <CircularProgress />
            </button> : <button
              style={{
                borderRadius: "4px",
                border: "1px solid white",
                width: '60%'
              }}
              onClick={handleLogin}

              className=" mt-8  ml-9 h-10 ml-3 font-normal text-base leading-7 text-white"
            >
              {
                t("login")
              }            </button>
          }
          {
            loading ?
              <button className="mt-10 ml-8 logingoogle block">              <CircularProgress />
              </button>
              : <GoogleLogin onSuccess={SignUpWithGoogle} className="mt-10 ml-8 logingoogle block" />
          }

          <button

          >

          </button>
          <div className="not-italic font-normal text-sm leading-6 text-white ml-10 mt-20">
            {t("noaccount")} <span className="not-italic font-normal text-sm leading-6 text-blue-600" style={{ cursor: "pointer" }} onClick={() => { router.push("/sign-up") }}>{t("signup")}</span>
          </div>
        </div>
        <div className="img-main-div">
          <Image style={{ height: "100vh", width: '100vw' }} src={Computer} />

          <div className="img-div"  >
          </div>
        </div>

      </div>
    </div>
  );
}
