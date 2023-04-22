import { MessageDescriptor } from "@lingui/core"
import { msg } from "@lingui/macro"

interface Languages {
  locale: string
  msg: MessageDescriptor
  territory?: string
}

export type LOCALES = "en-us" | "nl-nl" | "pseudo"

const languages: Languages[] = [
  {
    locale: "en-us",
    msg: msg`English`,
    territory: "US",
  },
  {
    locale: "nl-nl",
    msg: msg`Dutch`,
    territory: "NL",
  },
]

if (process.env.NODE_ENV !== "production") {
  languages.push({
    locale: "pseudo",
    msg: msg`Pseudo`,
  })
}

export default languages