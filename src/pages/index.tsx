import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data } = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <h1>
            ROCM Esports
          </h1>
          <div>
            {data ? <p>{data.greeting}</p> : <p>Loading...</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
