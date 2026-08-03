import { useState } from "react"
import SmallScreen from "./Navbar/SmallScreen"
import LargeScreen from "./Navbar/LargeScreen"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;

    if (diff > 0) {
      setTranslateX(diff);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    if (translateX > 100) {
      setIsOpen(false);
    }
    setTranslateX(0);
  };
  return (
    <>
      <SmallScreen isOpen={isOpen} setIsOpen={setIsOpen} handleTouchStart={handleTouchStart} translateX={translateX}
        handleTouchMove={handleTouchMove} handleTouchEnd={handleTouchEnd} isDragging={isDragging}
      />
      <LargeScreen />
    </>
  )
}

export default Header
