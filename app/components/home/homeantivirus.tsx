import Service from "./service"
import Opportunity from "./opportunity"
import DollHome from "./dollhome";
import WompiButton from "../wompi";
import Beneficios from "../Benefits";


export default function HomeAntivirus() {
  return (
    <div>
      <div>
        <DollHome />
      </div>
      <div>
        <Opportunity />
      </div>
      <div>
        <Service />
      </div>
      <WompiButton />
    </div>
  )
}