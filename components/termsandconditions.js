import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useAuth from "../context/AuthContext";
import useTranslation from "next-translate/useTranslation";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from '@mui/icons-material/Close';

import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";

const style = {
  position: "absolute",
  background: "rgba(255, 255, 255, 0.25) !important",
  backdropFilter: "blur(11px) !important",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "35vh",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflow: "scroll",
};

export default function TermsAndConditions(props) {
  const { user } = useAuth();

  const ts = [
    "Acceptance of Terms: By using the Website, you acknowledge that you have read, understood, and agree to be bound by this Agreement, including any additional terms and conditions and policies referenced herein.",
    "Services: The Provider offers SEO services through the Website, which includes payment integration for the convenience of users. The services provided may be subject to additional terms and conditions or separate agreements.",
    "User Account: To access certain features of the Website or use the payment integration, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to be responsible for all activities that occur under your account.",
  ];

  const { t } = useTranslation("dashboard");

  return (
    <div >
      <Modal
        {...props}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        sx={{
            marginBottom:'10px'
        }}
      >
        <Box sx={{ ...style }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}></h1>
                        <CloseIcon style={{ cursor: 'pointer' }} onClick={() => {
                            props.close();
                        }} />
                    </div>
          <Typography sx={{
            color:'red'
          }}>Terms And Conditions</Typography>

          {ts.map((item, index) => {
            return (
              <List key={index} sx={{
                display:'flex'
              }}>
                <ListItem >{item}</ListItem>
              </List>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}
