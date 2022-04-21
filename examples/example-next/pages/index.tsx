import { EvolvClient } from "@evolv/client";
import { Button } from "ui";

export default function Web() {
  const client = new EvolvClient({
    enviromentId: process.env.NEXT_PUBLIC_EVOLV_ENVIROMENT || ''
  })
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
