import axios from "axios";
import address from "./address";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const failToast = (message) => {
    Toastify({
        text: message,
        position: "center",
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
export const SignUpUser = async (name, email, password) => {
    const data = await axios.post(`${address}/user/signup`, { name: name, email: email, password: password })
    return data;
}



export const ForBlog = async (keywords, query, outputlength, authtoken) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    let lang = 'en';
    let language = 'English'
    for (const cookie of cookies) {
        if (cookie.indexOf('NEXT_LOCALE') === 0) {
            lang = cookie.substring('NEXT_LOCALE'.length + 1);

        }
    }
    if (lang == 'de') {
        language = 'German'
    } else if (lang == 'es') {
        language = 'Spanish'
    }

    const data = await axios.post(`${address}/content/create-blog`, {
        keywords, query, outputlength, language
    }, {
        headers: {
            authtoken: authtoken,
        },
    }).then((res) => {
        return res.data



    }).catch((err) => {
        console.log(err);
        failToast(err.message)
    });
    return data;
}


export const ForProducts = async (keywords, query, outputlength, authtoken) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    let lang = 'en';
    let language = 'English'
    for (const cookie of cookies) {
        if (cookie.indexOf('NEXT_LOCALE') === 0) {
            lang = cookie.substring('NEXT_LOCALE'.length + 1);

        }
    }
    if (lang == 'de') {
        language = 'German'
    } else if (lang == 'es') {
        language = 'Spanish'
    }
    const data = await axios.post(`${address}/content/create-product`, {
        keywords, query, outputlength, language,
    }, {
        headers: {
            authtoken: authtoken,
        },
    }).then((res) => {
        return res.data



    }).catch((err) => {
        console.log(err);
        failToast(err.message)
    });
    return data;
}

export const ForWeb = async (keywords, query, outputlength, authtoken) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    let lang = 'en';
    let language = 'English'
    for (const cookie of cookies) {
        if (cookie.indexOf('NEXT_LOCALE') === 0) {
            lang = cookie.substring('NEXT_LOCALE'.length + 1);

        }
    }
    if (lang == 'de') {
        language = 'German'
    } else if (lang == 'es') {
        language = 'Spanish'
    }
    const data = await axios.post(`${address}/content/create-web`, {
        keywords, query, outputlength, language
    }, {
        headers: {
            authtoken: authtoken,
        },
    }).then((res) => {
        return res.data



    }).catch((err) => {
        console.log(err);
        failToast(err.message)
    });
    return data;
}
export const ForRephrase = async (query, outputlength, authtoken) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    let lang = 'en';
    let language = 'English'
    for (const cookie of cookies) {
        if (cookie.indexOf('NEXT_LOCALE') === 0) {
            lang = cookie.substring('NEXT_LOCALE'.length + 1);

        }
    }
    if (lang == 'de') {
        language = 'German'
    } else if (lang == 'es') {
        language = 'Spanish'
    }
    const data = await axios.post(`${address}/content/create-rephrase`, {
        query, outputlength, language
    }, {
        headers: {
            authtoken: authtoken,
        },
    }).then((res) => {
        return res.data



    }).catch((err) => {
        console.log(err);
        failToast(err.message)
    });
    return data;
}

export const ForSummarize = async (query, outputlength, authtoken) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    let lang = 'en';
    let language = 'English'
    for (const cookie of cookies) {
        if (cookie.indexOf('NEXT_LOCALE') === 0) {
            lang = cookie.substring('NEXT_LOCALE'.length + 1);

        }
    }
    if (lang == 'de') {
        language = 'German'
    } else if (lang == 'es') {
        language = 'Spanish'
    }
    const data = await axios.post(`${address}/content/create-summarize`, {
        query, outputlength, language
    }, {
        headers: {
            authtoken: authtoken,
        },
    }).then((res) => {
        return res.data



    }).catch((err) => {
        console.log(err);
        failToast(err.message)
    });
    return data;
}