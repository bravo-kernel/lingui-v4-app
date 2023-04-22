import styles from "@/styles/Home.module.css";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { loadCatalog } from "src/translations/utils";
import { Trans } from "@lingui/macro";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ul>
          <li><Link href="/" locale="en-us">English: <Trans>English</Trans></Link></li>
          <li><Link href="/" locale="nl-nl">Dutch: <Trans>Dutch</Trans></Link></li>
          <li><Link href="/" locale="pseudo">Pseudo: <Trans>Pseudo</Trans></Link></li>
        </ul>
      </div>
    </main>
  );
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  };
}
