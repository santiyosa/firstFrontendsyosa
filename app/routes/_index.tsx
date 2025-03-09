import type { MetaFunction } from "@remix-run/node";
import AdminLogin from "~/components/adminLogin/adminLogin";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <AdminLogin />
    </div>
  );
}

