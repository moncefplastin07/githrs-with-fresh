
// support jsx on deno deploy
/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { Link } from "aleph/react";

export default function Alert({ title, body }: any) {
  return (
    <div
      className="p-3 m-5 text-red-500 bg-red-50 rounded-md fixed left-0 top-10"
    >
      <p>
        <span className="font-bold">{title}</span>
        <span>{body}</span>
      </p>
    </div>
  );
}
