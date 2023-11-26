module.exports = {
    locales: ['en', 'de', 'es'], // Array with the languages that you want to use
    defaultLocale: 'en', // Default language of your website
    localeDetection: true,

    pages: {
        '*': ['common'],
        '/sign-up': ['signup'],
        '/login': ['signin'],
        '/dashboard': ['dashboard'],
        '/payment': ['payment'],




    },
};
