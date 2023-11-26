import Head from "next/head";
import "../styles/globals.css";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "../context/AuthContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoutes from "../protectedroute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Link from "next/link";


const stripePromise = loadStripe("pk_test_51MYjj7LSI0nFoTIm3GC3ilBs5nm4oauLl6hl5tGdf6eA8STSmkdb8zjJKJZNPXkZ5JvI86t2dzf5gVJwRqyvyaEF00Oo3UZJ7G")
export default function App({ Component, pageProps }) {


  return <>
    <Elements stripe={stripePromise}>

      <GoogleOAuthProvider clientId='962209000249-mgihg63q240n6ecarlg4doe2sa80v62v.apps.googleusercontent.com'>
        <AuthContextProvider>
          <CookiesProvider>

            <ProtectedRoutes>

              <Component {...pageProps} />

            </ProtectedRoutes>
          </CookiesProvider>
        </AuthContextProvider>
      </GoogleOAuthProvider>

    </Elements>

  </>
}
