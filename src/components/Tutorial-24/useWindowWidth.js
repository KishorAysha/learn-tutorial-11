import { useCallback, useEffect, useState } from "react";

const useWindowWidth = (screenSize) => {
  const [onSmallScreen, setOnSmallScreen] = useState("Small");
  console.log(onSmallScreen);

  const checkScreen = useCallback(() => {
    setOnSmallScreen(window.innerWidth < screenSize);
  }, [screenSize]);
  useEffect(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [checkScreen]);

  return onSmallScreen;
};
export default useWindowWidth;
