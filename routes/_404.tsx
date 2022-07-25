
/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";
export default function _404() {
  return (
    <div className={tw`font-mono absolute inset-0 flex items-center justify-center `}>
        <h1 className={tw`text-2xl`}>404 ERROR|</h1>
        <p className={tw`text-xl`}>Page not found</p>
    </div>
  );
}
