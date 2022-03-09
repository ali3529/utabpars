// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

// }


// module.exports = nextConfig
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      
      
      use: ['@svgr/webpack'],
    });

    return config;
  },
};