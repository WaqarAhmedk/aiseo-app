// /** @type {import('next').NextConfig} */
// const withVideos = require('next-videos')
// const nextTranslate = require('next-translate-plugin')
// module.exports = nextTranslate()

// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = nextConfig
// module.exports = withVideos()


const withVideos = require('next-videos');
const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate(
  withVideos({
    reactStrictMode: true,
    // Other Next.js configuration options...
  })
);

