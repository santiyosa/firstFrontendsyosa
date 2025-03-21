import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer/Footer";
import Login from "~/components/login/login";
import Navbar from "~/components/Navbar/Navbar";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Login />
    </div>
  );
}

