import Head from "next/head";

export default function Home({ locale }) {
  return (
    <>
      <Head>
        <title>Next.js i18n issue</title>
      </Head>
      <div>Hello from the Pages Router :flag-{locale}:!</div>
    </>
  );
}

export function getServerSideProps(ctx) {
  return {
    props: {
      locale: ctx.locale ?? null,
    },
  };
}
