import type { MetaFunction } from "@remix-run/node";
import HomeAntivirus from "~/components/home/homeantivirus";


export const meta: MetaFunction = () => {
  return [
    { title: "Fundación Antivirus" },
  ];
};

export default function Index() {
  return (
    <div>
      <div>
        <HomeAntivirus />
      </div>
    </div>
  );
}

