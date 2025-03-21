import type { MetaFunction } from "@remix-run/node";
import Login from "~/components/login/login";
import HomeAntivirus from "../components/home/homeantivirus";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      {/* <Login /> */}
      <div>
        <HomeAntivirus />
      </div>
    </div>

  );
}

