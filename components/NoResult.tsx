/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Alert from "./Alert.tsx";
export default function _404() {
  return (
    <div className={tw`font-mono absolute inset-0 flex items-center justify-center `}>
        <Alert title="Warning: " body="No stats available for this area"/>
    </div>
  );
}
