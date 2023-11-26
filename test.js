const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// const findKeywords = async (keyword, country) => {
//     let data = [];
//     relatedQueries = [];

//     const axios = require("axios");

//     const options = {
//         method: 'GET',
//         url: 'https://seo-keyword-research.p.rapidapi.com/keynew.php',
//         params: { keyword: 'care', country: 'us' },
//         headers: {
//             'X-RapidAPI-Key': 'a350f94596mshf14d44e43776643p1a8e4ajsn332ca7b338a0',
//             'X-RapidAPI-Host': 'seo-keyword-research.p.rapidapi.com'
//         }
//     };

//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
// }
const findKeywords = async () => {
    const resdata = openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: finalquery,
        temperature: 0.7,
        max_tokens: tokens,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    }).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
}
findKeywords();