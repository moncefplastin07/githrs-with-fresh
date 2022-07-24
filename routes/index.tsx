/** @jsx h */
import { h } from "preact";
// import { Head } from "react";
import { tw } from "@twind";
import RegionsList from "../components/RegionsList.tsx";
import { Head } from "$fresh/src/runtime/head.ts";
const res = await fetch(`https://dzgitrs.herokuapp.com/get_countries`);
const regionsList  = await res.json()
export default function Home() {

  return (
    <div
        className="dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen py-2"
      >
        <Head>
          <title>DZGitrs - The most active GitHub By geographic region</title>
          <meta name="viewport" content="width=device-width"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* {alert ? <Alert {...alert} /> : ""} */}
        <main
          className={tw`flex flex-col items-center justify-center flex-1 text-center`}
        >
          <h1 className={tw`text-4xl font-bold lg:text-6xl`}>
            Welcome to{" "}
            <span className={tw`text-green-600`}>
              DZGitrs!
            </span>
          </h1>
          <RegionsList listOfRegions={regionsList}/>
        </main>
      </div>
  );
}
