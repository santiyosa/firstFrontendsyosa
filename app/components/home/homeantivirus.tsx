import Service from "./service"
import Opportunity from "./opportunity"
import DollHome from "./dollhome";

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
    </div>
  )
}