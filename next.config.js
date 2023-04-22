const linguiConfig = require("./lingui.config")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      [
        "@lingui/swc-plugin", {}
      ],
    ],
  },
  i18n: {
    locales: linguiConfig.locales,
    defaultLocale: linguiConfig.sourceLocale,
  },
}

module.exports = nextConfig