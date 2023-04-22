import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { I18nProvider } from "@lingui/react";
import { useLinguiInit } from "src/translations/utils";

export default function App({ Component, pageProps }: AppProps) {
  const initializedI18n = useLinguiInit(pageProps.i18n);

  return (
    <I18nProvider i18n={initializedI18n}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}
