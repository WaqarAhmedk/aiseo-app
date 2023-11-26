import { CardElement , CardNumberElement,useElements ,useStripe} from "@stripe/react-stripe-js"
import axios from "axios";
import address from "../address";
import { useCookies } from "react-cookie";

import React ,{useState}from 'react'

export default function teststripe() {

  const [cookies,setCookies]=useCookies();
  

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [priceId, setPriceId] = useState("");
    const [price, setPrice] = useState("");
    const stripe=useStripe();
    
    const elements=useElements();

    const createSubscription=async ()=>{
      
        const paymentMethod=await stripe ?.createPaymentMethod({
            type:"card",
            card:elements?.getElement(CardElement),
            billing_details:{
                name,email,
            }
    
        });

    
        const result=await axios.post(address+"/stripe/create-payment",{
            paymentMethod:paymentMethod?.paymentMethod?.id,
            d:paymentMethod,
            name,
            email,
            price
        },{
          headers:{
            "AuthToken":cookies.AuthToken
          }
        }).then(((res)=>{
            stripe?.confirmCardPayment(res.data.clientSecret).then((res)=>{

            }).catch((err)=>{
              console.log(err);
            })

        }))
    
    
    
    }
  return (
    <div className="grid gap-4 m-auto px-12 py-12">

      <select onChange={(e)=>{setPrice(e.target.value)}}>
        <option>choose</option>
      <option value="price_1MYnMkLSI0nFoTImt643soEx">frreee</option>

        <option value="price_1MYnNrLSI0nFoTImVJGcgiUD">plabn1</option>
      </select>
    <input  // this should not be a text field. maybe a radio button ro something
      placeholder="Price Id"
      type="text"
      value={name}
      onChange={(e) => setPriceId(e.target.value)}
    />
    <input
      placeholder="Name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <br />
    <input
      placeholder="Email"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    

    <CardElement />
    <button onClick={createSubscription} disabled={!stripe}>
      Subscribe
    </button>
  </div>
  )
}
