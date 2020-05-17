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
          <h2 className="mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
            Hi, I'm Hen 👋
          </h2>
          <p>
            Currently, I am finishing my final year in college where I am
            learning,{" "}
          </p>
          <ul className="list-disc list-inside mt-3 ml-3 mb-8">
            <li>C#</li>
            <li>HTML</li>
            <li>SQL</li>
            <li>Cisco Packet Tracer</li>
          </ul>

          <p>
            Outside of college I am working as a part time chef and have been
            self learning,
          </p>
          <ul className="list-disc list-inside mt-3 ml-3 mb-8">
            <li>NodeJS</li>
            <li>Express</li>
            <li>Cypress</li>
            <li>NextJS</li>
          </ul>

          <p>Hear are a couple places you can find me online</p>

          <ul className="list-disc list-inside mt-3 ml-3 mb-8">
            <li>
              <a href="https://twitter.com/w_crankshaw" target="__blank">
                <strong>twitter</strong>.com/w_crankshaw
              </a>
            </li>
            <li>
              <a href="https://github.com/Vicskips" target="__blank">
                <strong>github</strong>.com/Vicskips
              </a>
            </li>
            <li>
              <a href="mailto:wjjcrankshaw@gmail.com">
                wjjcrankshaw@<strong>gmail</strong>.com
              </a>
            </li>
          </ul>

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
