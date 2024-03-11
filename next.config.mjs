/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: false, // 圧縮無効
            },
          },
        ],
      });
      return config;
    },
    images: {
      disableStaticImages: true, 
    },
};

export default nextConfig;
