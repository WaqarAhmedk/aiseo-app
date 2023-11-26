import React, { useState } from "react";
import Computer from "../public/google-920532_1920 1.png";
import Logo from "../public/Initial_Letter_D_Digital_Logo_Design_Template-removebg-preview (1) 1.png";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Google from "../public/c.png"
import { SignUpUser } from "../axiosCalls";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import address from "../address";
import useAuth from "../context/AuthContext";
import { CircularProgress } from "@mui/material";
import useTranslation from 'next-translate/useTranslation';


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
    className: "info",
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

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignUpwithGoogle, loading } = useAuth();
  const [rloading, setRloading] = useState(false)
  const { t } = useTranslation('signup')

  const handleSubmit = (e) => {
    e.preventDefault();
    setRloading(true);
    SignUpUser(name, email, password).then((res) => {
      if (res.data.success === true) {
        successToast(res.data.message);
        router.push("/login")
        setRloading(false)
      } else if (res.data.success === false) {
        failToast(res.data.message);
        setRloading(false)


      }
    }).catch((err) => {
      console.log(err);
      for (var i = 0; i < err.response.data.errors.length; i++) {
        failToast(err.response.data.errors[i].msg)
      }
      setRloading(false)

    });

  }



  const SignUpWithGoogle = async (res) => {
    SignUpwithGoogle(res)

  }




  return (
    <div>
      <div className="absolute paymentLogo2">
        <Image src={Logo} />
        <div className="not-italic font-normal text-lg text-white">
          {
            t("hello")
          }
        </div>
      </div>
      <div style={{ height: "100vh" }} className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="payment">
          <div className="mt-20 ml-8">
            <label
              for="first_name"
              className="not-italic font-normal text-sm leading-6 text-blue-600"
              style={{ opacity: "0.7" }}
            >
              {
                t("name")
              }
            </label>
            <input
              style={{ width: "70%" }}
              onChange={(e) => { setName(e.target.value) }}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Zack erwin"
              required
            />
          </div>
          <div className="mt-8 ml-8">
            <label
              for="first_name"
              className="not-italic font-normal text-sm leading-6 text-blue-600"
              style={{ opacity: "0.7" }}
            >
              {
                t("email")
              }
            </label>
            <input
              style={{ width: "70%" }}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123@gmail.com"
              required
            />
          </div>
          <div className="mt-8 ml-8">
            <label
              for="first_name"
              className="not-italic font-normal text-sm leading-6 text-blue-600"
              style={{ opacity: "0.7" }}
            >
              {
                t("password")
              }
            </label>
            <input
              style={{ width: "70%" }}
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="*********"
              required
            />
          </div>
          {
            rloading ? <button
              className="mt-10 ml-8 text-center"
              style={{
                background: " #445FF5",
                borderRadius: "8px",
                color: "white",
                width: "70%",
                height: "50px"
              }}
            >
              <CircularProgress />
            </button> : <button
              className="mt-10 ml-8 text-center"
              onClick={handleSubmit}
              style={{
                background: " #445FF5",
                borderRadius: "8px",
                color: "white",
                width: "70%",
                height: "50px"
              }}
            >
              {
                t("signup")
              }
            </button>
          }
          <GoogleLogin onSuccess={SignUpWithGoogle} />
          <div className="not-italic font-normal text-sm leading-6 text-white ml-10 mt-20">
            {t("already")} <span className="not-italic font-normal text-sm leading-6 text-blue-600" style={{ cursor: "pointer" }} onClick={() => { router.push("/login") }}>{t("signin")}</span>
          </div>

        </div>
        <div style={{ position: 'relative' }}>
          <Image style={{ height: "100%", width: '100vw' }} src={Computer} />
          <div className="img-div"  >
          </div>
        </div>
      </div>
    </div>
  );
}
