/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";
import UserColumn from "../components/UserColumn.tsx";
import _404 from "../components/404.tsx";
import NoResult from "../components/NoResult.tsx";
import { timeAgo } from "https://deno.land/x/time_ago/mod.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    
    const res = await fetch(`https://dzgitrs.herokuapp.com${new URL(req.url).pathname}`)
    const resp = await ctx.render(await res.json());
    return resp;
  },
};
export default function Home({params, data}:PageProps) {
  if (params.region?.startsWith("israel")) {
    return <_404/>;
  }
  const {users, header} = data.data

  if (users < 1) {
    return <NoResult/>
  }



  return (
    <Layout
      title={`DZGitrs - The most active GitHub users in ${header.country}`}
    > 
    <div
        className={tw`dark:bg-black dark:text-white  flex flex-col items-center justify-center min-h-screen py-2`}
      >
        <main
          className={tw`flex flex-col items-center justify-center flex-1 text-center`}
        >
          <h1
            className={tw`text-4xl font-bold lg:text-6xl border-solid border-b-4 border-green-500`}
          >
            Welcome to{" "}
            <span className={tw`text-green-600`}>
              <a href="/">DZGitrs!</a>
            </span>
          </h1>
          <h2 className={tw`text-lg lg:text-xl`}>
            This is a list of most active GitHub users in{" "}
            <b className={tw`text-green-600`}>{header.country}</b>
          </h2>
          <p className={tw`my-16 text-1xl`}>
            <b>Last Update:</b>{" "}
            <code
              className={tw`p-3  text-lg bg-gray-100 rounded-md dark:text-black`}
            >
              {timeAgo(new Date(header.lastUpdate?.split("UTC")[0]))}
            </code>
          </p>
          <p className="mb-4">
            There are{" "}
            <span className="font-bold">
              {header.totalUsersNumber}
            </span>{" "}
            users on the GitHub who say they are from {header.country}
          </p>
          <ul className={tw`grid grid-cols-3 gap-4`}>
            <li
              className={tw`hover:font-bold ${
                params.region == header.country.toLowerCase()
                  ? "bg-green-500 font-bold"
                  : "hover:bg-green-400"
              }`}
            >
              <a href={`/${header.country.toLowerCase()}`}>Commits</a>
            </li>
            <li
              className={tw`hover:font-bold ${
                params.region == `${header.country.toLowerCase()}_public`
                  ? "bg-green-500 font-bold"
                  : "hover:bg-green-400"
              } px-5 border-solid border-r-2 border-l-2 border-green-500`}
            >
              <a href={`/${header.country.toLowerCase()}_public`}>
                Contributions
              </a>
            </li>
            <li
              className={tw`hover:font-bold ${
                params.region == `${header.country.toLowerCase()}_private`
                  ? "bg-green-500 font-bold"
                  : "hover:bg-green-400"
              }`}
            >
              <a href={`/${header.country.toLowerCase()}_private`}>All</a>
            </li>
          </ul>
          <div
            className={tw`flex flex-wrap items-center justify-around max-w-4xl sm:w-full`}
          >
            <table>
              <thead>
                <tr>
                  <th>Score</th>
                  <th>User</th>
                  <th>Contribs</th>
                  <th className={tw`w-28 sm:w-24`}>Avatar</th>
                </tr>
              </thead>
              <tbody>
                {users.map(
                  (userInfo:any) => (
                    <UserColumn
                      key={userInfo.score}
                      score={userInfo.score}
                      githubName={userInfo.name}
                      githubUsername={userInfo.username}
                      githubURL={userInfo.URL}
                      contribs={userInfo.contribs}
                      avatarURL={userInfo.avatar}
                      className={tw`shadow`}
                    >
                    </UserColumn>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      
    </Layout>
  );
}
