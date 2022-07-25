/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";

export default function Alert({ title, body }: any) {
  return (
    <div
      className={tw`p-3 m-5 text-red-500 bg-red-50 rounded-md`}
    >
      <p>
        <span className={tw`font-bold`}>{title}</span>
        <span>{body}</span>
      </p>
    </div>
  );
}
