import React, { useState } from "react";
import Computer from "../public/computer-767776_1920 1.png";
import Logo from "../public/Initial_Letter_D_Digital_Logo_Design_Template-removebg-preview (1) 1.png";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import address from "../address";
import useAuth from "../context/AuthContext";
import { useCookies } from "react-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Link from "next/link";
import CircularProgress from '@mui/material/CircularProgress';
import useTranslation from 'next-translate/useTranslation';

const successToast = (message) => {
  console.log(message);
  Toastify({
    text: message,
    position: "right",
    className: "info",
    offset: {
      x: 0,
      y: 40,
    },
    style: {
      background: "green",
      color: "white",
    },
  }).showToast();
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
      color: "white",
    },
  }).showToast();
};

export default function Payment() {
  const [cookies] = useCookies();
  const router = useRouter();
  const price = router.query.price;

  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();
  const name = user.name;
  const email = user.email;
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('payment');



  const createSubscription = async () => {
    setLoading(true);

    const paymentMethod = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(
        CardNumberElement,
        CardCvcElement,
        CardExpiryElement
      ),
      billing_details: {
        name,
        email,
      },
    });

    await axios
      .post(
        address + "/stripe/create-payment",
        {
          paymentMethod: paymentMethod?.paymentMethod?.id,
          price,
        },
        {
          headers: {
            authtoken: cookies.AuthToken,
          },
        }
      )
      .then((res) => {
        setLoading(false)
        if (res.data.success === true) {
          // router.push(res.data.data.latest_invoice.invoice_pdf)

          successToast(res.data.message);
          router.push("/dashboard");
        } else {
          failToast(res.data.message);
        }
        // stripe?.confirmCardPayment(res.data.clientSecret).then((res) => {

        //   console.log("dsadsa", res.data);
        // }).catch((err) => {
        //   console.log(err);
        // })
      });
  };

  return (
    <div>



      <div className="absolute paymentLogo">
        <Image src={Logo} />
      </div>
      <div
        style={{ height: "763px" }}
        className="grid lg:grid-cols-2 sm:grid-cols-1"
      >
        <div className="payment">


          <button
            className="mt-10 ml-8"
            style={{
              background: " #2A2A2B",
              borderRadius: "8px",
              color: "white",
              width: "150px",
              height: "40px",
              opacity: "0.7",
            }}
          >
            {t("card")}          </button>
          <div className="mt-8 ml-8 px-4">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              {t("card-no")}
            </label>

            <CardNumberElement
              required
              className=" card-no w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex grid grid-cols-2 px-4">
            <div className="mt-8 ml-4">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-white"
              >
                {
                  t("expiry")
                }
              </label>

              <CardExpiryElement className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mt-8 ml-8 ">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-white"
              >
                {t("cvc")}
              </label>

              <CardCvcElement className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>

          {loading ? <button
            className="mt-10 ml-8 text-center"

            style={{
              background: " #445FF5",
              borderRadius: "8px",
              color: "white",
              width: "85%",
              height: "40px",
            }}
            onClick={createSubscription}
            disabled
          >
            <CircularProgress style={{ color: "white" }} />
          </button> : <button
            className="mt-10 ml-8 text-center"
            style={{
              background: " #445FF5",
              borderRadius: "8px",
              color: "white",
              width: "85%",
              height: "40px",
            }}
            onClick={createSubscription}
          >
            {t("paynow")}{" "}
          </button>}
        </div>
        <div style={{ height: "100vh" }}>
          <Image style={{ height: "100vh" }} src={Computer} />
        </div>
      </div>
    </div>
  );
}
