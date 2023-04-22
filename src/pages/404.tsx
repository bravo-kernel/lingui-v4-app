import Head from "next/head";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { t, Trans } from "@lingui/macro";
import { loadCatalog } from "@/translations/utils";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{t`Page Not Found`}</title>
      </Head>
      <h1>
        <Trans>Page Not Found</Trans>
      </h1>
    </>
  );
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> {
  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  };
}
