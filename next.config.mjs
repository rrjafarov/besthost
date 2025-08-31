// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin({
//   locales: ["az", "en", "ru"],
//   defaultLocale: "az",
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
  
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "//",
//         pathname: "/**",
//       },
//     ],
//   },

//   // output: "export",

//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: "@svgr/webpack",
//           options: {
//             svgoConfig: {
//               plugins: [
//                 {
//                   name: "preset-default",
//                   params: {
//                     overrides: {
//                       removeViewBox: false,
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// export default withNextIntl(nextConfig);












import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  locales: ["az", "en", "ru"],
  defaultLocale: "az",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // 🔹 şəkil optimizasiyasını söndürdük
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin-besthost.onestudio.az", // 🔹 əlavə olundu
        pathname: "/storage/**",
      },
    ],
  },

  // output: "export",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
