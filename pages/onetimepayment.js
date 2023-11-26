import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import address from '../address';
import { useCookies } from "react-cookie";
import useTranslation from 'next-translate/useTranslation';
const stripePromise = loadStripe('pk_test_51MYjj7LSI0nFoTIm3GC3ilBs5nm4oauLl6hl5tGdf6eA8STSmkdb8zjJKJZNPXkZ5JvI86t2dzf5gVJwRqyvyaEF00Oo3UZJ7G');

const OneTimeUseFeature = () => {
    const [hasAccess, setHasAccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cookies] = useCookies();
    const { t } = useTranslation('dashboard');

    // Check if the user has access to the one-time use feature
    useEffect(() => {
        const checkAccess = async () => {
            try {
                const response = await axios.get(address + '/stripe/one-time-payment', {
                    headers: {
                        authtoken: cookies.AuthToken,
                    },
                });
                setHasAccess(true);
            } catch (error) {
                console.error(error);
                setError(t("onetime-payment-error"));
            }
        };

        checkAccess();
    }, []);

    // Handle the purchase of the one-time use feature
    const handlePurchase = async () => {
        try {
            setLoading(true);

            // Create a checkout session for the one-time use feature
            const response = await axios.post(address + '/stripe/one-time-payment', {}, {
                headers: {
                    authtoken: cookies.AuthToken,
                },
            });
            const sessionId = response.data.id;

            // Redirect the user to the Stripe checkout page
            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({ sessionId });

            if (result.error) {
                console.error(result.error);
                setError(t("onetime-payment-error-purchase"));
            }
        } catch (error) {
            console.error(error);
            setError(t("onetime-payment-error-purchase"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button disabled={loading} onClick={handlePurchase} className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:
                            font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'>
                {loading ? <>{t("loading")}</> : <>{t("buynow")}</>}
            </button>
        </>

    );
};

export default OneTimeUseFeature;
