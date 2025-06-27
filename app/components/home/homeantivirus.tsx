import Service from "./service"
import Opportunity from "./opportunity"
import DollHome from "./dollhome";
import Benefits from "../benefits";


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
      <div>
        <Benefits />
      </div>
    </div>
  )
}