import Header from "./Components/Header"
import Page from "./Components/Page"
import WeekSitting from "./Components/WeekSitting"
import Remark from "./Components/Remark"
import Bookings from "./Components/Bookings"
import Footer from "./Components/Footer"


const RoutePages = () => {
  return (
    <div>
          <Header />
          <Page />
          <WeekSitting />
          <Remark />
          <div id="Bookings"><Bookings /></div>
          <Footer />
    </div>
  )
}

export default RoutePages
