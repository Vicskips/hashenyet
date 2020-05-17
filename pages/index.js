import Container from "../components/container";
import NotableRepositories from "../components/notable-repositories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Has Hen Yet</title>
        </Head>
        <Container>
          <Intro />

          {allPosts.length > 0 && <NotableRepositories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
}
