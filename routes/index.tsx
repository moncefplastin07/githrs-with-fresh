/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/src/runtime/head.ts";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";
import RegionsList from "../components/RegionsList.tsx";
import Alert from "../components/Alert.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    
    const res = await fetch(`https://dzgitrs.herokuapp.com/get_countries`)
    const resp = await ctx.render(await res.json());
    return resp;
  },
};
export default function Home({data}:PageProps) {
  return (
  <Layout title="DZGitrs - The most active GitHub By geographic region">
    <div
          className="dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen py-2"
        >
          <main
            className={tw`flex flex-col items-center justify-center flex-1 text-center`}
          >
            <h1 className={tw`text-4xl font-bold lg:text-6xl`}>
              Welcome to{" "}
              <span className={tw`text-green-600`}>
                DZGitrs!
              </span>
            </h1>
            <Alert title="Warning: " body="Some of the following links may not work for source reasons"></Alert>
            <RegionsList listOfRegions={data}/>
          </main>
        </div>
      </Layout>
  );
}
