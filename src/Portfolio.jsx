import {useState} from "react"
import Intro from "./Portfolio/Intro"
import Buttons from "./Portfolio/Buttons"
import Portrait from "./Portfolio/Portrait"
import Footer from "./Portfolio/Footer"
import BackHome from "./Portfolio/BackHome"

const Portfolio = () => {
  const [filter, setFilter] = useState("All")
  const [hover, setHover] = useState(false)
 
  return (
    <div>
      <BackHome />
      <Intro />
      <Buttons filter={filter} setFilter={setFilter} />
      <Portrait filter={filter} hover={hover} setHover={setHover}/>
      <Footer />
    </div>
  )
}

export default Portfolio
