import Intro from "./Services/Intro"
import List from "./Services/ServiceList"
import Price from "./Services/Price"
import Questions from "./Services/Questions"
import Footer from "./Services/Footer"
import BackHome from "./Services/BackHome"

const ServicePage = () => {
  return (
    <>
    {/* <BackHome /> */}
    <Intro />
    <hr className="border-custom-gold border-t my-6" />
    <List />
    <hr className="border-custom-gold border-t my-6" />
    <Price />
    <Questions />
    <Footer />
    </>
    )
}

export default ServicePage
