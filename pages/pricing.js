import React from "react";
import Computer from "../public/pexels-george-morina-4960438 1.png";
import Logo from "../public/Initial_Letter_D_Digital_Logo_Design_Template-removebg-preview (1) 1.png";

import Image from "next/image";
import Plus5 from "../public/XMLID_975_ (1).png";
import Plus3 from "../public/charm_tick-double.png";
import Plus6 from "../public/fluent-emoji-flat_cross-mark.png";

export default function Pricing() {
  return (
    <div>
      
      <div style={{height:"763px"}}>
          <Image style={{height:"763px", width:"100%"}} src={Computer} />
        </div>
      <div style={{height:"763px"}} className="grid payment pricing">
      <div className="absolute ml-8 mt-3">
        <Image src={Logo} />
      </div>
        <div>
        <div
          className="mt-10 flex justify-center not-italic font-medium text-white"
          style={{ fontSize: "32px" }}
        >
          Pricing
        </div>
        <div style={{paddingLeft:"200px"}} className="grid gap-8 p-20 lg:grid-cols-3 sm:grid-cols-1">
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
        </div>
      </div>
    </div>
  );
}
