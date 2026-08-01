import {useEffect} from "react-router-dom"

const Intro = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <div id="servicePage" className="flex justify-center mt-20">
          <div className="flex flex-col justify-center items-center">
              <div className="text-center p-5 space-y-5">
                  <p className="text-custom-gold tracking-wider text-sm sm:text-base">SERVICES</p>
                  <h1 className="text-4xl sm:text-5xl espresso">Every sitting begins with <span className="text-custom-gold italic">a conversation.</span></h1>
                  <p className="text-lg lightGold tracking-wide">Bridal, studio sessions and events glam, built around your face and your day - not a trend board.</p>
              </div>
          </div>
      </div>
      </>

  )
}

export default Intro
