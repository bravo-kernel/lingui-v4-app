const { formatter } = require("@lingui/format-po")

const locales = ["en-us", "nl-nl"]

if (process.env.NODE_ENV !== "production") {
  locales.push("pseudo")
}

module.exports = {
  locales: locales,
  sourceLocale: "en-us",
  pseudoLocale: "pseudo",
  catalogs: [
    {
      path: "src/translations/locales/{locale}",
      include: [
        "src/pages",
        "src/translations/languages.ts",
      ],
    },
  ],
  format: formatter({ origins: false }),
}