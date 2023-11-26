import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useAuth from "../context/AuthContext";
import useTranslation from "next-translate/useTranslation";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

import { Typography } from "@mui/material";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useCookies } from "react-cookie";

import address from "../address";
const style = {
  position: "absolute",
  background: "rgba(255, 255, 255, 0.25) !important",
  backdropFilter: "blur(11px) !important",
  top: "40%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "50vh",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflow: "scroll",
};
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
export default function GetDemo(props) {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhone] = useState("");
  const [Cookies] = useCookies();

  const { t } = useTranslation("dashboard");

  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        sx={{
          marginBottom: "10px",
        }}
      >
        <Box sx={{ ...style }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}></h1>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.close();
              }}
            />
          </div>

          <div className="mt-10 mb-10 flex justify-center  grid grid-cols-12 ">
            <div className="col-span-6 mt-5">
              <label className="not-italic font-bold text-lg leading-6 text-white">
                Name{" "}
              </label>
              <input
                style={{
                  backgroundColor: "#2A2A2A",
                  height: "40px",
                  color: "white",
                  paddingLeft: "10px",
                  width: "100%",
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
            <div className="col-span-6 mt-5">
              <label className="not-italic font-bold text-lg leading-6 text-white ">
                Email{" "}
              </label>
              <input
                style={{
                  backgroundColor: "#2A2A2A",
                  height: "40px",
                  color: "white",
                  width: "100%",
                  paddingLeft: "10px",
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
            <div className="col-span-6 mt-5">
              <label className="not-italic font-bold text-lg leading-6 text-white ">
                Contact No{" "}
              </label>
              <input
                style={{
                  backgroundColor: "#2A2A2A",
                  height: "40px",
                  color: "white",
                  width: "100%",
                  paddingLeft: "10px",
                }}
                type="number"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg p-1"
                placeholder="+12 3230-43432"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <button
              style={{
                borderRadius: "4px",
                background: "linear-gradient(180deg, #647EF9 0%, #2B47F3 100%)",
              }}
              onClick={() => {
                axios
                  .post(
                    `${address}/user/storedemouser`,
                    {
                      name,
                      email,
                      phno,
                    },
                    {
                      headers: {
                        authtoken: Cookies.AuthToken,
                      },
                    }
                  )
                  .then((res) => {
                    alert(res.data.message);
                    if(res.data.success==true) {
                        props.close();

                    }else{
successToast(res.data.message)
                    }
                  })
                  .catch((err) => {
                    for (var i = 0; i < err.response.data.errors.length; i++) {
                        failToast(err.response?.data.errors[i].msg)
                    }                  });
              }}
              type="button"
              className="w-40 h-10 font-normal text-base leading-7 text-white ml-0 p-2 mt-5 "
            >
              Ask a Free Demo
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
